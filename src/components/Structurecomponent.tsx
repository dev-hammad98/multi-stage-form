import { useState } from "react";
import Heading from "./Heading";
import SideNavigation from "./SideNavigation";
import Subheading from "./Subheading";
import CenterForm from "./CenterForm";

type Stage = "1" | "2" | "3";

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
      <div className="navmargin">
        <SideNavigation subheadingValues={subheadingValues} stage={stage} />
      </div>
      <div className="main">
        <div className="center-content">
          <div className="center-content2">
            <Heading content="Super test form" />
            <Subheading titleofheading={subheadingValues[Number(stage) - 1]} />
          </div>
          <CenterForm stage={stage} onStageChange={handleStageChange} />
        </div>
      </div>
    </div>
  );
}
export default Structurecomponent;
