// import { useEffect, useState } from "react";

interface InputProps {
  handlestate: () => void;
  color: string;
}

function ContinueButton({ handlestate, color }: InputProps) {
  const handleSubmit = () => {
    handlestate();
  };
  const buttonColor = color === "6" ? `var(--text-color${4})` : "";
  //   const [isDisabled, setIsDisabled] = useState<boolean>(false);

  //   useEffect(() => {
  //     if (color === "6") {
  //       setIsDisabled(true);
  //     } else {
  //       setIsDisabled(false);
  //     }
  //   }, [color]);

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
