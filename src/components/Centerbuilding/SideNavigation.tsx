import Navigationentities from "../Units/Navigationentities";
import { SideNavigationProps } from "../type";

function SideNavigation({ subheadingValues, stage }: SideNavigationProps) {
  return (
    <div className="d2">
      <Navigationentities
        navtitle={subheadingValues[1 - 1]}
        color={stage === "1" ? "1" : "5"}
      />
      <Navigationentities
        navtitle={subheadingValues[2 - 1]}
        color={stage === "2" ? "1" : "5"}
      />
      <Navigationentities
        navtitle={subheadingValues[3 - 1]}
        color={stage === "3" ? "1" : "5"}
      />
    </div>
  );
}

export default SideNavigation;
