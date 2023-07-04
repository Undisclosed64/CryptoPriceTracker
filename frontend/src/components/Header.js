import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { ConnectKitButton } from "connectkit";
import styled from "styled-components";
import React, { useState } from "react";
import { SlMenu } from "react-icons/sl";

const StyledButton = styled.button`
  cursor: pointer;
  padding: 14px 24px;
  background: #ffffff;
  font-size: 16px;
  font-family: Roboto;
  border-radius: 10rem;
  border: none;
  color: #1d1512;
  font-weight: 500;
  text-transform:capitalize;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  &:active {
    transform: translateY(-3px);
  }
`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="brand-name">
        <a href="./" className="brand-name">
          CryptoPriceTracker
        </a>
      </div>

      <button className="toggler" onClick={handleToggleMenu}>
        <SlMenu />
      </button>

      <ul className={`navbar-menu`}>
        <li>
          <Link to="/assets">Assets</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
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
        </li>
      </ul>
    </header>
  );
}
