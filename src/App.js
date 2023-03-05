import { useEffect, useState } from "react";
import { ABI, Contract } from "./contracts/donte";
import { ethers } from "ethers";
import Donate from "./compents/Donate";
import dot from "./image/dot.png";
// import FatchMemo from "./compents/FatchMemo";

function App() {
  const [state, setState] = useState({
    contract: null,
    provider: null,
    signer: null,
  });
  const [account, setAccount] = useState("None");
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = Contract;
      const contractABI = ABI;
      try {
        if (typeof window.ethereum !== "undefined") {
          const accounts = window.ethereum.request({
            method: "eth_requestAccounts",
          });

          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(accounts);
          setState({ provider, signer, contract });
        } else {
          alert("install metamsk");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  console.log(state);
  return (
    <div style={{ backgroundColor: "#EFEFEF", height: "100%" }}>
      <img src={dot} className="img-fluid" alt=".." width="100%" />
      <p
        className="text-muted lead "
        style={{ marginTop: "10px", marginLeft: "5px" }}
      ></p>
      <div className="container">
        <Donate state={state} />
      </div>
    </div>
  );
}

export default App;
