import { HeadingProps } from "../type";

const Heading = ({ title }: HeadingProps) => {
  return <h2 style={{ color: "var(--text-color1)" }}>{title}</h2>;
};

export default Heading;
