import { useEffect, useState } from "react";
import ContinueButton from "./ContinueButton";
import InputComponent from "./InputComponent";
import { FormikProps } from "formik";
import { passwordSchema, repeatPasswordSchema } from "./Validationschema";
import { ValidationError } from "yup";
type CenterFormValues = {
  Username: string;
  Email: string;
  Password: string;
  "Repeat Password": string;
  toggle: string;
};
interface InputProps {
  password: string;
  repass: string;
  handlestate: () => void;
  fik: FormikProps<CenterFormValues>;
}

function Passwordstage({ password, repass, handlestate, fik }: InputProps) {
  // const [buttonstatepass, setButtonstatepass] = useState<boolean>(false);
  const [passwordError, setpasswordError] = useState<string>("1");
  const [repeatPasswordError, setrepeatPasswordError] = useState<string>("1");
  const [hasError, sethasError] = useState<boolean>(true);

  const handleSubmit = () => {
    if (!hasError) {
      handlestate();
    }
  };

  const handleValidation = async () => {
    try {
      await passwordSchema.validate(fik.values);
      setpasswordError("");
    } catch (error: unknown) {
      if (error instanceof ValidationError) {
        const validationError = error as ValidationError;
        setpasswordError(validationError.message);
        sethasError(true);
      }
    }

    try {
      await repeatPasswordSchema.validate(fik.values);
      setrepeatPasswordError("");
    } catch (error: unknown) {
      if (error instanceof ValidationError) {
        const validationError = error as ValidationError;
        setrepeatPasswordError(validationError.message);
        sethasError(true);
      }
    }
  };

  useEffect(() => {
    if (passwordError === "" && repeatPasswordError === "") {
      sethasError(false);

      sethasError(true);
    }
  }, [passwordError, repeatPasswordError]);

  return (
    <div className="centerinputbox d1">
      <InputComponent
        namevalue={password}
        fik={fik}
        error={passwordError}
        onChange={handleValidation}
      />
      <InputComponent
        namevalue={repass}
        fik={fik}
        error={repeatPasswordError}
        onChange={handleValidation}
      />
      s
      {!hasError ? (
        <ContinueButton handlestate={handleSubmit} color="2" />
      ) : (
        <ContinueButton handlestate={() => {}} color="6" />
      )}
    </div>
  );
}

export default Passwordstage;
