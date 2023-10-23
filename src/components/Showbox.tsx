type showproptype = {
  label: string;
  value: string;
};
function Showbox({ label, value }: showproptype) {
  return (
    <div className="d-flex flex-row align-items-center ">
      <span
        className="d-flex flex-column align-items-center "
        style={{
          color: "var(--text-color2)",
          fontSize: "14px",
          textAlign: "left",
          marginRight: "170px",
        }}
      >
        {label}.
      </span>

      <span
        className="d-flex flex-column align-items-center "
        style={{
          color: "var(--text-color2)",
          marginLeft: "20px",
          fontSize: "14px",
          textAlign: "right",
        }}
      >
        {value}
      </span>
    </div>
  );
}

export default Showbox;
