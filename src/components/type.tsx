import { FormikProps } from "formik";

export type Stage = "1" | "2" | "3";

export type HeadingProps = {
  title: string;
};

export type SubheadingProps = {
  titleofheading: string;
};

export type SideNavigationProps = {
  subheadingValues: string[];
  stage: string;
};

export type NavProps = {
  navtitle: string;
  color: "1" | "5";
};

export type CenterFormProps = {
  stage: Stage;
  onStageChange: () => void;
};

export type CenterFormValues = {
  Username: string;
  Email: string;
  Password: string;
  "Repeat Password": string;
  toggle: string;
};

export interface NamestageProps {
  username: string;
  email: string;
  handlestate: () => void;
  handletoggle: (newStatetoggle: string) => void;
  fik: FormikProps<CenterFormValues>;
}

export interface PassstageProps {
  password: string;
  repass: string;
  handlestate: () => void;
  fik: FormikProps<CenterFormValues>;
}

export interface ShowstageProps {
  tooglestate: string;
  handlestate: () => void;
  fik: FormikProps<CenterFormValues>;
}

export type showboxproptype = {
  label: string;
  value: string;
};

export interface continuebuttonprop {
  color: string;
  handlestate: () => void;
}

export interface inputcomponentProps {
  namevalue: string;
  fik: FormikProps<CenterFormValues>;
}

export interface FormErrors {
  Username?: string;
  Email?: string;
  Password?: string;
  "Repeat Password"?: string;
  toggle?: string;
}

export type dropdownproptype = {
  handletoggle: (newStatetoggle: string) => void;
  fik: FormikProps<CenterFormValues>;
};
