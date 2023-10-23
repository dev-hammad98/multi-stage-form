type HeadingProps = {
  content: string;
};

const Heading = ({ content }: HeadingProps) => {
  return <h2 style={{ color: "var(--text-color1)" }}>{content}</h2>;
};

export default Heading;
