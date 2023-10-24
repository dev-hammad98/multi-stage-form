import { showboxproptype } from "../type";

function Showbox({ label, value }: showboxproptype) {
  return (
    <div className="showboxcomponents">
      <div
        style={{
          color: "var(--text-color2)",
          fontSize: "14px",
          textAlign: "left",
        }}
      >
        {label}
      </div>

      <div
        style={{
          color: "var(--text-color2)",
          fontSize: "14px",
          textAlign: "right",
        }}
      >
        {value}
      </div>
    </div>
  );
}

export default Showbox;
