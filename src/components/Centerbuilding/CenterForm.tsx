import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { ValidationError } from "yup";
import { CenterFormProps, FormErrors } from "../type";
import {
  emailSchema,
  usernameSchema,
  toggleSchema,
  passwordSchema,
  repeatPasswordSchema,
} from "../Validationschema";
import InputComponent from "../Units/InputComponent";
import Dropdown from "../Units/Dropdown";
import ContinueButton from "../Units/ContinueButton";
import Showbox from "../Units/Showbox";

const initialValues = {
  Username: "",
  Email: "",
  Password: "",
  "Repeat Password": "",
  toggle: "",
};

const titleEntries = ["Username", "Email", "Password", "Repeat Password"];

function CenterForm({ stage, onStageChange }: CenterFormProps) {
  const [statetoggle, setStatetoggle] = useState<string>("");
  const [hasError, sethasError] = useState<boolean>(true);

  const Formik = useFormik({
    initialValues: initialValues,
    validate: async (values) => {
      const errors: FormErrors = {};

      try {
        await usernameSchema.validate(values);
      } catch (error) {
        if (error instanceof ValidationError) {
          const validationError = error;
          errors.Username = validationError.message;
        }
      }

      try {
        await emailSchema.validate(values);
      } catch (error) {
        if (error instanceof ValidationError) {
          const validationError = error;
          errors.Email = validationError.message;
        }
      }

      try {
        await toggleSchema.validate(values);
      } catch (error) {
        if (error instanceof ValidationError) {
          const validationError = error;
          errors.toggle = validationError.message;
        }
      }

      try {
        await passwordSchema.validate(values);
      } catch (error) {
        if (error instanceof ValidationError) {
          const validationError = error;
          errors.Password = validationError.message;
        }
      }

      try {
        await repeatPasswordSchema.validate(values);
      } catch (error) {
        if (error instanceof ValidationError) {
          const validationError = error;
          errors["Repeat Password"] = validationError.message;
        }
      }

      return errors;
    },

    onSubmit: () => {},
  });

  const handleSubmit = () => {
    if (!hasError) {
      onStageChange();
    }
  };
  console.log(Formik);
  const handletoggle = (newStatetoggle: string) => {
    if (newStatetoggle !== null) {
      Formik.setFieldValue("toggle", newStatetoggle);
      setStatetoggle(newStatetoggle);
    }
  };

  useEffect(() => {
    if (
      !Formik.errors.Username &&
      !Formik.errors.Email &&
      !Formik.errors.toggle &&
      Object.values(Formik.values).some((val) => val !== "") &&
      stage === "1"
    ) {
      sethasError(false);
    } else if (
      !Formik.errors.Password &&
      !Formik.errors["Repeat Password"] &&
      Object.values(Formik.values).some((val) => val !== "") &&
      stage === "2"
    ) {
      sethasError(false);
    } else sethasError(true);
  }, [Formik.errors]);

  if (stage === "1") {
    return (
      <div className="container">
        <div className="centerform">
          <div className="centerinputbox d1">
            <InputComponent namevalue={titleEntries[0]} fik={Formik} />
            <InputComponent namevalue={titleEntries[1]} fik={Formik} />
            <Dropdown handletoggle={handletoggle} fik={Formik} />
            {!hasError ? (
              <ContinueButton handlestate={handleSubmit} color="2" />
            ) : (
              <ContinueButton handlestate={() => {}} color="6" />
            )}
          </div>
        </div>
      </div>
    );
  } else if (stage === "2") {
    return (
      <div className="container">
        <div className="centerform">
          <div className="centerinputbox d1">
            <InputComponent namevalue={titleEntries[2]} fik={Formik} />
            <InputComponent namevalue={titleEntries[3]} fik={Formik} />s
            {!hasError ? (
              <ContinueButton handlestate={handleSubmit} color="2" />
            ) : (
              <ContinueButton handlestate={() => {}} color="6" />
            )}
          </div>
        </div>
      </div>
    );
  } else if (stage === "3") {
    return (
      <div className="container">
        <div className="centerform">
          <div className="centerinputbox d1">
            <Showbox label="Username" value={Formik.values.Username} />
            <Showbox label="Email" value={Formik.values.Email} />
            <Showbox label="Country" value={statetoggle} />
            <ContinueButton handlestate={handleSubmit} color={"2"} />
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default CenterForm;
