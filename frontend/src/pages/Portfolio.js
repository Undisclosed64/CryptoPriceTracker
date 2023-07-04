import teamWorking from "../assets/teamWorking.png";

export default function Portfolio() {
  return (
    <div className="section-portfolio">
      <h1>Trust us, we are working hard on it</h1>
      <div className="img-container">
        <img src={teamWorking} alt="" />
      </div>
    </div>
  );
}
