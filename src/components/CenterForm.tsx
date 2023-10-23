import { useState } from "react";
import Namestage from "./Namestage";
import Passwordstage from "./Passwordstage";
import Showdata from "./Showdata";
import { useFormik } from "formik";

type Stage = "1" | "2" | "3";

type CenterFormProps = {
  stage: Stage;
  onStageChange: () => void;
};

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

  const Formik = useFormik({
    initialValues: initialValues,
    onSubmit: () => {},
  });

  const handleSubmit = () => {
    onStageChange();
  };

  const handletoggle = (newStatetoggle: string) => {
    if (newStatetoggle !== null) {
      Formik.setFieldValue("toggle", newStatetoggle);
      setStatetoggle(newStatetoggle);
    }
  };

  if (stage === "1") {
    return (
      <div className="container">
        <div className="centerform">
          <Namestage
            username={titleEntries[0]}
            email={titleEntries[1]}
            handlestate={handleSubmit}
            handletoggle={handletoggle}
            fik={Formik}
          />
        </div>
      </div>
    );
  } else if (stage === "2") {
    return (
      <div className="container">
        <div className="centerform">
          <Passwordstage
            password={titleEntries[2]}
            repass={titleEntries[3]}
            handlestate={handleSubmit}
            fik={Formik}
          />
        </div>
      </div>
    );
  } else if (stage === "3") {
    return (
      <div className="container">
        <div className="centerform">
          <Showdata
            handlestate={handleSubmit}
            fik={Formik}
            tooglestate={statetoggle}
          />
        </div>
      </div>
    );
  }

  return null;
}

export default CenterForm;
