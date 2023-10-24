import { CenterFormValues, inputcomponentProps } from "../type";

function InputComponent({ namevalue, fik }: inputcomponentProps) {
  return (
    <div className="form-group">
      <label htmlFor={namevalue} className="input-label">
        {namevalue}
      </label>
      <div className="input-container">
        <input
          type="text"
          id={namevalue}
          className="form-control input-block"
          name={namevalue}
          placeholder={`Input ${namevalue}`}
          onChange={fik.handleChange}
          onBlur={fik.handleBlur}
          value={fik.values[namevalue as keyof CenterFormValues]}
        />
        {fik.errors[namevalue as keyof CenterFormValues] && (
          <span className="exclamation-mark">!</span>
        )}
      </div>
      <span className="text-danger small">
        {fik.errors[namevalue as keyof CenterFormValues]
          ? fik.errors[namevalue as keyof CenterFormValues]
          : ""}
      </span>
    </div>
  );
}

export default InputComponent;
