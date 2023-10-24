import { continuebuttonprop } from "../type";

function ContinueButton({ handlestate, color }: continuebuttonprop) {
  const handleSubmit = () => {
    handlestate();
  };
  const buttonColor = color === "6" ? `var(--text-color${4})` : "";

  return (
    <div>
      <button
        className="btn mt-2 btn-lg fs=10 custom-button"
        style={{
          backgroundColor: `var(--text-color${color})`,
          color: buttonColor,
        }}
        onClick={handleSubmit}
        disabled={false}
      >
        Continue
      </button>
    </div>
  );
}

export default ContinueButton;
