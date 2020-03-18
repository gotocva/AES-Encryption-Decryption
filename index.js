const cryptLib = require('./aes'), 
plainText = 'This is the text to be encrypted',
iv = cryptLib.generateRandomIV(16), //16 bytes = 128 bit
key = cryptLib.getHashSha256('my secret key', 32), //32 bytes = 256 bits
cypherText = cryptLib.encrypt(plainText, key, iv);

console.log('iv = %s', iv);
console.log('key = %s', key);
console.log('Cypher text = %s', cypherText);
console.log('Plain text = %s', cryptLib.decrypt(cypherText, key, iv));