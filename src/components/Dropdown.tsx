import React, { useState } from "react";
import Select, { OptionProps } from "react-select";
import { FaCheck } from "react-icons/fa";

type Option = {
  value: string;
  label: string;
};
type toggleprop = {
  handletoggle: (newStatetoggle: string) => void;
  error: string;
  onChange: (event: Option | null) => void;
};

const Dropdown = ({ handletoggle, error, onChange }: toggleprop) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const options: Option[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
  ];

  const handleSelect = (value: Option | null) => {
    setSelectedOption(value);
    if (value !== null) {
      handletoggle(value.value ?? "");
    }
  };

  const CustomOption: React.FC<OptionProps<Option, false>> = (props) => {
    const { data, isSelected, innerProps } = props;
    const optionIndex = options.findIndex(
      (option) => option.value === data.value
    );
    const isOdd = optionIndex % 2 !== 0;

    return (
      <div
        className={`custom-option ${isSelected ? "selected" : ""}`}
        style={{
          backgroundColor: isOdd ? "var(--text-color3)" : "#ffffff",
          ...(innerProps.style || {}),
        }}
        {...innerProps}
      >
        {isSelected && (
          <>
            <span className="chosen-label">Choosed </span>
            <FaCheck className="tick-icon" />
          </>
        )}
        <span className="label">{data.label}</span>
      </div>
    );
  };

  return (
    <div>
      <div className="dropdown-container">
        <label className="input-label">Title</label>
        <div className="dropdown-container2">
          <Select
            value={selectedOption}
            onChange={(e) => {
              onChange(e);
              handleSelect(e);
            }}
            options={options}
            placeholder="Select Country"
            classNamePrefix="custom-select"
            components={{ Option: CustomOption }}
          />
        </div>
        <span className="text-danger small">{error ? error : ""}</span>
      </div>
    </div>
  );
};
export default Dropdown;
