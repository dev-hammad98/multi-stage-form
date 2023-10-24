import { useEffect, useState } from "react";
import { SubheadingProps } from "../type";

function Subheading({ titleofheading }: SubheadingProps) {
  const [subheadingContent, setSubheadingContent] =
    useState<string>("Default content");

  useEffect(() => {
    setSubheadingContent(titleofheading);

    return () => {};
  }, [titleofheading]);

  return <h5 style={{ color: "var(--text-color5)" }}>{subheadingContent}</h5>;
}

export default Subheading;
