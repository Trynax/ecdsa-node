import server from "./server";
// const secp = require("ethereum-cryptography/secp256k1");
// const {toHex}= require("ethereum-cryptography/utils")
import {toHex, utf8ToBytes} from "ethereum-cryptography/utils"
import {keccak256} from "ethereum-cryptography/keccak"

import * as secp from "ethereum-cryptography/secp256k1"

function Wallet(props) {
  const { address, setAddress, balance, setBalance, privateKey, setPrivateKey } = props
  async function onChange(evt) {
    const privateKey= evt.target.value;
    setPrivateKey(privateKey )
   const address = toHex(secp.secp256k1.getPublicKey(privateKey))
    
    setAddress(address)
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Private Key
        <input placeholder="Type in a private key" value={privateKey} onChange={onChange}></input>
      </label>
      <div>
          Address: {`0x${address.slice(-20)}`}
      </div>
      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
