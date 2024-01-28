var voterRecords = {
  "voter123": { "mobile": "1234567890", "Password": null, "publicKey": null, "privateKey": null },
  "voter456": { "mobile": "9876543210", "Password": null, "publicKey": null, "privateKey": null },
};

async function login() {
  var voterId = document.getElementById('login-user').value;
  var password = document.getElementById('login-pass').value;

  if (voterRecords.hasOwnProperty(voterId)) {
    var storedPassword = voterRecords[voterId].Password;
    if (password === storedPassword) {
      // Redirect to login page
      window.location.href = 'CTYPE.html';
      return;
    }
    if (storedPassword === null) {
      alert('Please register.');
      return;
    }
  }
  alert('Invalid voter ID or password. Please try again.');
}


async function generateKeys() {
  // Generate a key pair
  var keyPair = await crypto.subtle.generateKey(
    {
      name: "RSA-OAEP",
      modulusLength: 2048,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: "SHA-256",
    },
    true,
    ["encrypt", "decrypt"]
  );

  // Export keys
  var publicKey = await crypto.subtle.exportKey("spki", keyPair.publicKey);
  var privateKey = await crypto.subtle.exportKey("pkcs8", keyPair.privateKey);

  return { publicKey, privateKey };
}

async function register() {
  var voterId = document.getElementById('register-user').value;
  var password = document.getElementById('register-pass').value;
  var confirmPassword = document.getElementById('confirm-pass').value;
  var mobileNumber = document.getElementById('register-mobile').value;

  // Validate input fields
  if (voterId.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || mobileNumber.trim() === '') {
    alert('Please fill in all fields.');
    return;
  }

  if (!voterRecords.hasOwnProperty(voterId)) {
    alert('Voter ID does not exist. Please enter a valid ID.');
    return;
  }

  var storedMobileNumber = voterRecords[voterId].mobile;
  if (mobileNumber !== storedMobileNumber) {
    alert('Invalid mobile number. Please try again with the correct mobile number.');
    return;
  }
  var storedPassword = voterRecords[voterId].Password;
  if (password !== confirmPassword) {
    alert('Passwords do not match. Please re-enter your password.');
    return;
  }

  // Generate keys
  var keyPair = await generateKeys();

  // Store voter details including keys
  voterRecords[voterId] = { "mobile": mobileNumber, "Password": password, "publicKey": keyPair.publicKey, "privateKey": keyPair.privateKey };

  // Optionally, you can also log the generated keys for testing purposes
  console.log("Public Key:", keyPair.publicKey);
  console.log("Private Key:", keyPair.privateKey);
  // Display success message (optional)
  alert('Registration successful. Login details are sent');
}

function copyPublicKey() {
  const publicKey = document.getElementById('public-key').innerText;
  const tempInput = document.createElement('input');
  tempInput.value = publicKey;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  alert('Public key copied to clipboard: ' + publicKey);
}

