import React, { useState } from "react";
import Select, { OptionProps } from "react-select";
import { FaCheck } from "react-icons/fa";
import { CenterFormValues, dropdownproptype, showboxproptype } from "../type";

const Dropdown = ({ handletoggle, fik }: dropdownproptype) => {
  const [selectedOption, setSelectedOption] = useState<showboxproptype | null>(
    null
  );

  const options: showboxproptype[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
  ];

  const handleSelect = (value: showboxproptype | null) => {
    setSelectedOption(value);
    if (value !== null) {
      handletoggle(value.value ?? "");
    }
  };

  const CustomOption: React.FC<OptionProps<showboxproptype, false>> = (
    props
  ) => {
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
            onChange={handleSelect}
            options={options}
            placeholder="Select Country"
            classNamePrefix="custom-select"
            components={{ Option: CustomOption }}
          />
        </div>
        <span className="text-danger small">
          {fik.errors["toggle" as keyof CenterFormValues]
            ? fik.errors["toggle" as keyof CenterFormValues]
            : ""}
        </span>
      </div>
      "
    </div>
  );
};
export default Dropdown;
