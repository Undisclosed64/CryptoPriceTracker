import Select from "react-select";

const options = [
  { value: "wbtc", label: "WBTC" },
  { value: "eth", label: "ETH" },
  { value: "usdc", label: "USDC" },
  { value: "weth", label: "WETH" },
];

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? "black" : "white",
    color: state.isSelected ? "white" : "black",
  }),
  control: (provided: any) => ({
    ...provided,
    borderRadius: "4px",
    border: "none",
    boxShadow: "none",
    fontSize: "30px",
    background: "#f1f2f9",
    width: "100%",
    marginBottom: "30px",
    [`@media (min-width: 644px)`]: {
      marginBottom: "0px",
      maxWidth: "200px",
      textAlign: "left",
    },
  }),
};

const SelectOptions = () => (
  <Select defaultValue={options[0]} options={options} styles={customStyles} />
);
export default SelectOptions;
