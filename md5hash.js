const crypto = require('crypto');

function hashPassword(password) {
    return crypto.createHash('md5')
                 .update(password)
                 .digest('hex');
}

function comparePassword(inputPassword, storedHash) {
    const inputHash = hashPassword(inputPassword);
    return inputHash === storedHash;
}

const originalPassword = "Arjun@123";
const storedHash = hashPassword(originalPassword);
console.log("Stored Hashed Password:", storedHash);
//check with true password
const isCorrectPassword = comparePassword("mySecurePassword123", storedHash);
console.log("Correct Password Check:", isCorrectPassword ? "Password is correct" : "Password does not match!");

// Check with wrong password
const isIncorrectPassword = !comparePassword("wrongPassword", storedHash);
console.log("Incorrect Password Check:", isIncorrectPassword ? "Password does not match!" : "Password is correct");
