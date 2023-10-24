import { useState } from "react";
import Heading from "../Units/Heading";
import SideNavigation from "../Centerbuilding/SideNavigation";
import Subheading from "../Units/Subheading";
import CenterForm from "../Centerbuilding/CenterForm";
import { Stage } from "../type";

const subheadingValues = ["Initial info", "Password screen", "Review screen"];

function Structurecomponent() {
  const [stage, setStage] = useState<Stage>("1");

  const handleStageChange = () => {
    console.log("it is triggered");
    setStage((prevStage) => {
      switch (prevStage) {
        case "1":
          return "2";
        case "2":
          return "3";
        case "3":
          return "1";
      }
    });
  };

  return (
    <div>
      <div className="navmargin ">
        <SideNavigation subheadingValues={subheadingValues} stage={stage} />
      </div>
      <div className="main">
        <div className="center-content">
          <div className="center-content2">
            <Heading title="Super test form" />
            <Subheading titleofheading={subheadingValues[Number(stage) - 1]} />
          </div>
          <CenterForm stage={stage} onStageChange={handleStageChange} />
        </div>
      </div>
    </div>
  );
}
export default Structurecomponent;
