import { IoChevronBack } from "react-icons/io5";
import { BsChevronRight } from "react-icons/bs";
import SelectOptions from "./SelectOptions";
import WalletCard from "./WalletCard";
import { useNavigate } from "react-router-dom";

export const Card = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="section-card">
      <button id="back-btn" onClick={handleBack}>
        <IoChevronBack />
        Back to Home
      </button>
      <h1>Protected twin peaks</h1>
      <div className="cards-wrapper">
        <div className="strategy-container">
          <div className="quick-info-container">
            <div className="quick-info-header">
              <SelectOptions />
              <div className="number-data">
                <div className="tvl-group">
                  <div>$20.9K</div>
                  <div>TVL</div>
                </div>
                <hr />
                <div className="base-APY-group">
                  <div>0.315%</div>
                  <div>Base APY</div>
                </div>
                <hr />

                <div className="max-apy-group">
                  <div>10.035%</div>
                  <div>Max APY</div>
                </div>
              </div>
            </div>
          </div>
          <div className="how-work-container">
            <h2>Strategy</h2>
            <p>
              This weekly strategy earns interest through an exotic option
              strategy called Twin Peaks. The strategy captures a linearly
              increasing rate of return for price movements in both directions
              up to the upper and lower barriers respectively.{" "}
              <a
                href="https://docs.cruize.finance/vaults/twin-peaks"
                className="learn-more"
              >
                Learn More
                <BsChevronRight />
              </a>
            </p>
          </div>
          <div className="vault-specifications">
            <h2>Vault specifications</h2>
            <div className="vault-data">
              <div className="expiry-wrapper">
                <div>2D 14H 49M</div>
                <div>Time to next expiry</div>
              </div>
              <hr />
              <div className="wbtc-wrapper">
                <div>WBTC</div>
                <div>Asset Tracked</div>
              </div>
              <hr />

              <div className="current-price-wrapper">
                <div>$29,186.6</div>
                <div>Current Price</div>
              </div>
              <hr />

              <div className="current-range-wrapper">
                <div>$1,925.56 - $2,260.44</div>
                <div>Current range</div>
              </div>
            </div>
          </div>
          <div className="current-deposits">
            <h2>Current deposits</h2>
            <button id="current-deposits-btn">0.7188 WBTC/10.0K WBTC</button>
          </div>
        </div>
        <WalletCard />
      </div>
    </div>
  );
};
