import { useEffect, useState } from "react";
import { FormikProps } from "formik";
import { ValidationError } from "yup";
import ContinueButton from "./ContinueButton";
import Dropdown from "./Dropdown";
import InputComponent from "./InputComponent";
import { emailSchema, usernameSchema, toggleSchema } from "./Validationschema";

type CenterFormValues = {
  Username: string;
  Email: string;
  Password: string;
  "Repeat Password": string;
  toggle: string;
};

interface InputProps {
  username: string;
  email: string;
  handlestate: () => void;
  fik: FormikProps<CenterFormValues>;
}
type toggleprop = { handletoggle: (newStatetoggle: string) => void };

interface NamestageProps extends InputProps, toggleprop {}

function Namestage({
  username,
  email,
  handlestate,
  fik,
  handletoggle,
}: NamestageProps) {
  const [buttonstatename, setButtonstatename] = useState<boolean>(false);
  const [usernameError, setusernameError] = useState<string>("");
  const [emailError, setemailError] = useState<string>("");
  const [toggleError, settoggleError] = useState<string>("");
  const [hasError, sethasError] = useState<boolean>(true);

  const handleSubmit = () => {
    if (!hasError) {
      handlestate();
    }
  };

  const handleValidation = async () => {
    try {
      await usernameSchema.validate(fik.values);
      setusernameError("");
    } catch (error: unknown) {
      if (error instanceof ValidationError) {
        const validationError = error as ValidationError;
        setusernameError(validationError.message);
        sethasError(true);
      }
    }

    try {
      await emailSchema.validate(fik.values);
      setemailError("");
    } catch (error: unknown) {
      if (error instanceof ValidationError) {
        const validationError = error as ValidationError;
        setemailError(validationError.message);
        sethasError(true);
      }
    }
    try {
      await toggleSchema.validate(fik.values);
      settoggleError("");
    } catch (error: unknown) {
      if (error instanceof ValidationError) {
        const validationError = error as ValidationError;
        settoggleError(validationError.message);
        sethasError(true);
      }
    }
  };

  const handletogglestate = (value: string) => {
    handletoggle(value);
  };

  useEffect(() => {
    console.log(toggleError, "toggle error");
    console.log(fik.values.toggle, "toggle fik");
    console.log(emailError, "email error");

    if (emailError === "" || toggleError === "" || usernameError === "") {
      setButtonstatename(false);
    } else {
      sethasError(false);
      setButtonstatename(true);
    }
  }, [usernameError, emailError, toggleError]);

  return (
    <div className="centerinputbox d1">
      <InputComponent
        namevalue={username}
        fik={fik}
        error={usernameError}
        onChange={handleValidation}
      />
      <InputComponent
        namevalue={email}
        fik={fik}
        error={emailError}
        onChange={handleValidation}
      />
      <Dropdown
        handletoggle={handletogglestate}
        error={toggleError}
        onChange={handleValidation}
      />
      {buttonstatename ? (
        <ContinueButton handlestate={handleSubmit} color="2" />
      ) : (
        <ContinueButton handlestate={() => {}} color="6" />
      )}
    </div>
  );
}

export default Namestage;
