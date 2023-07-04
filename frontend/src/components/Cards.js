import { SiBitcoinsv } from "react-icons/si";
import usdcLogo from "../assets/usdcLogo.svg";
import ethereum from "../assets/ethereum.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialCards = [
  {
    icon: <SiBitcoinsv className="wbtc-icon" />,
    title: "BTC/USD",
    status: "Check price",
  },
  {
    icon: <img src={ethereum} alt="ETH/USD" className="weth-logo" />,
    title: "ETH/USD",
    status: "Check price",
  },
  {
    icon: <img src={usdcLogo} alt="CSPX/USD" className="usdc-logo" />,
    title: "CSPX/USD",
    status: "Check price",
  },
  {
    icon: <img src={usdcLogo} alt="CSPX/USD" className="usdc-logo" />,
    title: "EUR/USD",
    status: "Check price",
  },
  {
    icon: <img src={usdcLogo} alt="CSPX/USD" className="usdc-logo" />,
    title: "FORTH/USD",
    status: "Check price",
  },
  {
    icon: <img src={usdcLogo} alt="CSPX/USD" className="usdc-logo" />,
    title: "SNX/USD",
    status: "Check price",
  },
];

const Cards = () => {
  const [cards, setCards] = useState(initialCards);
  const navigate = useNavigate();

  const showCardDetails = (card) => {
    navigate(`/vaults/${card.title.replace("/", "-")}`);
  };

  return (
    <div className="cards-container">
      <div className="section-cards">
        {cards.map((card, index) => (
          <div
            className="card"
            key={index}
            onClick={() => showCardDetails(card)}
          >
            <div className="option-logo">{card.icon}</div>
            <div className="card-title">{card.title}</div>
            <button>{card.status}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
