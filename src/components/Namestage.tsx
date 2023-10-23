import { useEffect, useState } from "react";
import ContinueButton from "./ContinueButton";
import Dropdown from "./Dropdown";
import InputComponent from "./InputComponent";
import { FormikProps } from "formik";
import { emailSchema, usernameSchema, toggleSchema } from "./Validationschema";
import { ValidationError } from "yup";

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
  const [buttonstatename, setButtonstatename] = useState<boolean>(true);
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
    console.log(
      emailError === "" && toggleError === "" && usernameError === "",
      "BUTTON"
    );

    if (emailError === "" && toggleError === "" && usernameError === "") {
      sethasError(false);
      setButtonstatename(true);
    } else {
      setButtonstatename(false);
    }
  };

  const handletogglestate = (value: string) => {
    handletoggle(value);
  };

  useEffect(() => {
    console.log(
      emailError === "" && toggleError === "" && usernameError === "",
      "BUTTON"
    );

    console.log(toggleError, "toggle error");
    console.log(fik.values.toggle, "toggle fik");
    console.log(emailError, "email error");

    if (emailError === "" && toggleError === "" && usernameError === "") {
      sethasError(false);
      setButtonstatename(true);
    } else {
      setButtonstatename(false);
    }
  }, [usernameError, emailError, toggleError, fik.values.toggle]);

  return (
    <div className="d-flex flex-column align-items-center p-4 d1">
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
