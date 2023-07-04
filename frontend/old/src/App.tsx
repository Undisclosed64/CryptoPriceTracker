import "./App.scss";
import Header from "./components/Header";
import Vaults from "./pages/Vaults";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import { Card } from "./components/Card";

//connect wallet setup
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "Cruize Finance Dapp",
    alchemyId,
  })
);

const App = () => {
  return (
    <div className="App">
      <WagmiConfig client={client}>
        <ConnectKitProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Vaults />} />
              <Route path="/vaults" element={<Vaults />} />
              <Route path="/vaults/:title" element={<Card />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </BrowserRouter>
        </ConnectKitProvider>
      </WagmiConfig>
      <Footer />
    </div>
  );
};

export default App;
