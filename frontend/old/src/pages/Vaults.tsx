import { ConnectKitButton } from "connectkit";
import styled from "styled-components";
import Cards from "../components/Cards";

const StyledButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  font-family: Roboto;
  background-image: linear-gradient(to right, #FF512F 0%, #DD2476  51%, #FF512F  100%);
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;            
  border-radius: 10rem;
  display: block;       
  border: none;
  font-weight: 500;
  margin:0 auto;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  &:active {
    transform: translateY(-3px);
  }
`;

export default function Vaults() {
  return (
    <>
      <div className="section-vaults">
        <h1>
          Invest in safer, principal protected income opportunities through
          novel structured products
        </h1>
        <ConnectKitButton.Custom>
          {({ isConnected, show, truncatedAddress, ensName }) => {
            return (
              <div>
                <StyledButton onClick={show}>
                  {isConnected ? ensName ?? truncatedAddress : "Connect wallet"}
                </StyledButton>
              </div>
            );
          }}
        </ConnectKitButton.Custom>
      </div>
      <Cards />
    </>
  );
}
