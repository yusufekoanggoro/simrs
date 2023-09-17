const bcrypt = require('bcrypt');
const crypto = require('crypto');

function generateRandomString(length) {
  return crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex') // Convert to hexadecimal format
    .slice(0, length); // Trim to desired length
}

async function generateAdminPassword(length = 12) {
  try {

    const randomString = generateRandomString(length);
    console.log('random string:', randomString);

    // Menghasilkan salt untuk mengenkripsi kata sandi
    const saltRounds = 10;

    const salt = await bcrypt.genSalt(saltRounds);

    // Mengenkripsi kata sandi dengan salt
    const hash = await bcrypt.hash(randomString, salt);

    return Promise.resolve(hash);
  } catch (err) {
    console.error('Error:', err);
    return Promise.reject(err);
  }
}

async function verifyPassword(inputPassword, hashedPassword) {
    const passwordMatch = await bcrypt.compare(inputPassword, hashedPassword);
    return passwordMatch;
}

module.exports = {
    generateAdminPassword,
    verifyPassword
}