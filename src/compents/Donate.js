import { ethers } from "ethers";
import FatchMemo from "./FatchMemo";

const Donate = ({ state }) => {
  async function DonateNow(e) {
    e.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    const amount = { value: ethers.utils.parseEther("0.001") };
    console.log(name, message, amount);
    const transaction = await contract.Pey(name, message, amount);
    await transaction.wait();
    console.log("Transaction is done");
    alert("donation successfully Done!");
  }

  return (
    <>
      <div className="container-md" style={{ width: "50%", marginTop: "25px" }}>
        <form onSubmit={DonateNow}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Enter Your Message"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
          >
            Pay
          </button>
        </form>
      </div>
      <FatchMemo state={state} />
    </>
  );
};

export default Donate;
