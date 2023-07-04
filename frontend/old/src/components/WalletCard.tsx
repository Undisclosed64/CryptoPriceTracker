import { useState } from "react";
import { ConnectKitButton } from "connectkit";
import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  padding: 14px 24px;
  background: #000000;
  width: 100%;
  font-size: 16px;
  font-family: Roboto;
  border-radius: 4px;
  border: none;
  color: white;
  font-weight: bold;
`;

function WalletCard() {
  const [isDeposit, setIsDeposit] = useState(true);

  const SwitchToDeposit = (e: any) => {
    setIsDeposit(true);
  };
  const SwitchToWithdraw = () => {
    setIsDeposit(false);
  };
  return (
    <div className="wallet-card">
      <div className="switch-options">
        <h2
          onClick={SwitchToDeposit}
          style={{
            color: isDeposit ? "" : "gray",
            borderBottom: isDeposit ? "2px solid black" : "none",
          }}
        >
          Deposit
        </h2>
        <h2
          onClick={SwitchToWithdraw}
          style={{
            color: isDeposit ? "gray" : "",
            borderBottom: !isDeposit ? "2px solid black" : "none",
          }}
        >
          Withdraw
        </h2>
      </div>
      {isDeposit ? (
        <div className="deposit-card">
          <label htmlFor="amount" className="amount-label">
            Amount
          </label>
          <input type="number" name="amount" value="amount" placeholder="0" />
          <ConnectKitButton.Custom>
            {({ isConnected, show, truncatedAddress, ensName }) => {
              return (
                <div>
                  <StyledButton onClick={show}>
                    {isConnected
                      ? ensName ?? truncatedAddress
                      : "Connect wallet"}
                  </StyledButton>
                </div>
              );
            }}
          </ConnectKitButton.Custom>
        </div>
      ) : (
        <div className="withdraw-card">
          <div className="buttons">
            <button>Request</button>
            <button>Instant</button>
          </div>
          <label htmlFor="amount" className="amount-label">
            Amount
          </label>
          <input
            type="number"
            name="amount"
            value="amount"
            checked={isDeposit}
            placeholder="0"
          />
          <div className="wallet-info">
            <div>
              Complete withdrawal <span>0.0000 WBTC</span>
            </div>
            <div>
              Funds in active use
              <span>0.0000 WBTC</span>
            </div>
            <div>
              Funds in queue <span>0.0000 WBTC</span>
            </div>
          </div>
          <ConnectKitButton.Custom>
            {({ isConnected, show, truncatedAddress, ensName }) => {
              return (
                <div>
                  <StyledButton onClick={show}>
                    {isConnected
                      ? ensName ?? truncatedAddress
                      : "Connect wallet"}
                  </StyledButton>
                </div>
              );
            }}
          </ConnectKitButton.Custom>
        </div>
      )}
    </div>
  );
}

export default WalletCard;
