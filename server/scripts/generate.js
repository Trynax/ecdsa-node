const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");
const {toHex}= require("ethereum-cryptography/utils")



const previteKey = secp.secp256k1.utils.randomPrivateKey();

const publicKey = secp.secp256k1.getPublicKey(previteKey)

console.log(`private key: ${toHex(previteKey)}` )
console.log("Public key:", toHex(publicKey))