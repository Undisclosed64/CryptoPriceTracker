import { SiBitcoinsv } from "react-icons/si";
import usdcLogo from "../assets/usdcLogo.svg";
import fraxIcon from "../assets/fraxIcon.svg";
import ethereum from "../assets/ethereum.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialCards = [
  {
    icon: <SiBitcoinsv className="wbtc-icon" />,
    title: "wbtc",
    apy: "10.035% APY",
    status: "Start earning",
    category: "protected",
  },
  {
    icon: <img src={ethereum} alt="weth-icon" className="weth-logo" />,
    title: "weth",
    apy: "23.346% APY",
    status: "Start earning",
    category: "protected",
  },
  {
    icon: <img src={usdcLogo} alt="" className="usdc-logo" />,
    title: "usdc",
    apy: "23.346% APY",
    status: "Start earning",
    category: "protected",
  },
  {
    icon: (
      <div className="icons-group">
        <img src={ethereum} alt="weth-icon" className="weth-logo" />
      </div>
    ),
    title: "ram-weth",
    apy: "328.77% APY",
    status: "Coming soon",
    category: "booster",
  },
  {
    icon: (
      <div className="icons-group">
        <img src={fraxIcon} alt="frax-icon" className="frax-logo" />
        <img src={usdcLogo} alt="" className="usdc-logo" />
      </div>
    ),
    title: "frax-usdc",
    apy: "56.67% APY",
    status: "Coming soon",
    category: "booster",
  },
  {
    icon: (
      <div className="icons-group">
        <img src={ethereum} alt="weth-icon" className="weth-logo" />
        <img src={usdcLogo} alt="" className="usdc-logo" />
      </div>
    ),
    title: "weth-usdc",
    apy: "104.63% APY",
    status: "Coming soon",
    category: "booster",
  },
];

const Cards = () => {
  const [cards, setCards] = useState(initialCards);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const handleSort = (category: string) => {
    if (category === "all") {
      setCards(initialCards);
    } else {
      const filteredCards = initialCards.filter(
        (card) => card.category === category
      );
      setCards(filteredCards);
    }
    setSelectedCategory(category);
  };
  const showCardDetails = (card: any) => {
    navigate(`/vaults/${card.title}`);
  };

  return (
    <div className="cards-container">
      <div className="sort-by-buttons">
        <button
          onClick={() => handleSort("all")}
          style={{
            backgroundColor: selectedCategory === "all" ? "#ffffff" : "",
            color: selectedCategory === "all" ? "#1d1512" : "",
          }}
        >
          All
        </button>
        <button
          onClick={() => handleSort("protected")}
          style={{
            backgroundColor: selectedCategory === "protected" ? "#ffffff" : "",
            color: selectedCategory === "protected" ? "#1d1512" : "",
          }}
        >
          Principal protected
        </button>
        <button
          onClick={() => handleSort("booster")}
          style={{
            backgroundColor: selectedCategory === "booster" ? "#ffffff" : "",
            color: selectedCategory === "booster" ? "#1d1512" : "",
          }}
        >
          Ramses yield booster
        </button>
      </div>
      <div className="section-cards">
        {cards.map((card, index) => (
          <div
            className="card"
            key={index}
            onClick={() => showCardDetails(card)}
          >
            <div className="option-logo">{card.icon}</div>
            <div className="card-title">{card.title}</div>
            <div>
              Earn up to <span>{card.apy}</span>
            </div>
            <button>{card.status}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
