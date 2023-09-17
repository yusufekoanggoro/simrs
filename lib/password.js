const bcrypt = require('bcrypt');

async function generateAdminPassword(password) {
  try {
    // Menghasilkan salt untuk mengenkripsi kata sandi
    const saltRounds = 10;

    const salt = await bcrypt.genSalt(saltRounds);

    // Mengenkripsi kata sandi dengan salt
    const hash = await bcrypt.hash(password, salt);

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