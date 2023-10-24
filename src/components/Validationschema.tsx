import * as Yup from "yup";

export const usernameSchema = Yup.object().shape({
  Username: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 15 characters")
    .required("Name is required"),
});

export const emailSchema = Yup.object().shape({
  Email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      "Invalid email format"
    ),
});

export const passwordSchema = Yup.object().shape({
  Password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const repeatPasswordSchema = Yup.object().shape({
  "Repeat Password": Yup.string()
    .oneOf([Yup.ref("Password"), ""], "Passwords must match")
    .required("Retype Password is required"),
});

export const toggleSchema = Yup.object().shape({
  toggle: Yup.string().required("Toggle value is required"),
});
