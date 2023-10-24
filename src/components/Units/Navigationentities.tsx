import "../../App.css";

import { NavProps } from "../type";

const Navigationentities = ({ navtitle, color }: NavProps): JSX.Element => {
  return (
    <div className="row">
      <div
        className="square col-md-0.5 my-auto mr-2 "
        style={{ backgroundColor: `var(--text-color${color})` }}
      />
      <p
        className="col-md-0.5 my-auto "
        style={{ fontSize: "10px", color: "var(--text-color5)" }}
      >
        {navtitle}
      </p>
    </div>
  );
};

export default Navigationentities;
