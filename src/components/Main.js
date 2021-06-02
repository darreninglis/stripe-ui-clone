import SearchBar from "./SearchBar"
import { BiWalletAlt, BiRightArrowAlt } from "react-icons/bi";
import { HiChevronDown } from "react-icons/hi";
import { BsInfoSquare, BsPlus } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";

const Main = () => {
  return (
    <div className="main">
      <SearchBar />

      {/* TEST DATA Tab */ }
      <div className="test-data-tab">TEST DATA</div>

      {/* PAYOUTS Section */ }
      <div className="payouts-container">
        <div className="payouts-title">
          <div>
            <BiWalletAlt className="icon" />PAYOUTS
          </div>
          <GrClose />
        </div>
        <h1>Customize your start of day to your local timezone</h1>
        <p>Set your start of day to make your automatic payouts reconciliation easier ot track.
        <span className="active left">Learn more <BiRightArrowAlt /></span>
        </p>
        <button className="cta-button"> <IoSettingsSharp className="icon" />Go to payout settings</button>
      </div>

      {/* Add bank account Section */ }
      <div className="add-bank-container">
        <div>
          <BsInfoSquare className="icon" />
        Please add a AUD denominated bank account to pay out your AUD balance.
        </div>
        <button className="cta-button-white"><BsPlus className="icon" />Add bank account</button>
      </div>

      {/* I need to split this into two columns that are align-self:center */ }
      <div className="balance-section">
        <div className="balance-title">
          <h1>Balances</h1>
          <div className="balance-title-container">
            <button className="cta-button-white">Add to balance</button>
            <button className="cta-button-white">More <HiChevronDown className="icon-left" /> </button>
          </div>
        </div>

        {/* Balances Section */ }
        <div className="flow-right">
          <div className="flow-down">
            <div className="aud-balance-section">
              <h2>AUD Balance</h2>
            </div>

            <div className="aud-balance-section-clear">
              <p>Currently on the way to your bank account</p>
              <p>$0.00</p>
            </div>

            <div className="aud-balance-section">
              <p>Funds on hold</p>
              <p>$0.00</p>
            </div>

            <div className="aud-balance-section">
              <p><strong>Total</strong></p>
              <p><strong>$0.00</strong></p>
            </div>
          </div>
          <div className="highlight-box">
            <h6 className="highlight-title">Highlighted report</h6>
            <div className="active">Balance</div>
            <p>Reconcile your Stripe balance and download your categorized transaction history.</p>
          </div>
        </div>

        <hr className="break" />

        {/* Outgoing Section */ }
        <div className="flow-right">
          <div className="flow-down">
            <div className="aud-balance-section">
              <h2>Outgoing from Stripe</h2>
            </div>

            <div className="aud-balance-section-clear">
              <p>Currently on the way to your bank account</p>
            </div>

            <div className="aud-balance-section">
              <p>These funds should arrive in your bank account soon.</p>
            </div>

            <div className="aud-balance-section">
              <p><strong>Total</strong></p>
              <p><strong>$0.00</strong></p>
            </div>
          </div>
          <div className="highlight-box">
            <h6 className="highlight-title">Highlighted report</h6>
            <div className="active">Payout reconciliation</div>
            <p>Transactions that have settled to your bank account including a categorized breakdown for each payout.</p>
          </div>
        </div>

        <hr className="break" />

        {/* Outgoing Section */ }
        <div className="flow-right">
          <div className="flow-down">
            <div className="aud-balance-section">
              <h2>Incoming to Stripe</h2>
            </div>

            <div className="aud-balance-section-clear">
              <p>Funds on hold</p>
            </div>

            <div className="aud-balance-section">
              <p>These funds will start being paid out again once you have resolved the issue with your bank account above.</p>
            </div>

            <div className="aud-balance-section">
              <p><strong>Total</strong></p>
              <p><strong>$0.00</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Main;