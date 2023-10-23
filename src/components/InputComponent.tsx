import { FormikProps } from "formik";

type CenterFormValues = {
  Username: string;
  Email: string;
  Password: string;
  "Repeat Password": string;
  toggle: string;
};
interface InputProps {
  namevalue: string;
  fik: FormikProps<CenterFormValues>;
  error: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputComponent({ namevalue, fik, error, onChange }: InputProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    fik.handleChange(event);
    onChange(event);
  };
  return (
    <div className="form-group">
      <label htmlFor={namevalue} className="input-label">
        {namevalue}
      </label>
      <input
        type="text"
        id={namevalue}
        className="form-control input-block"
        name={namevalue}
        placeholder={`Input ${namevalue}`}
        onChange={handleInputChange}
        onBlur={fik.handleBlur}
      />
      <span className="text-danger small">{error ? error : ""}</span>
    </div>
  );
}

export default InputComponent;
