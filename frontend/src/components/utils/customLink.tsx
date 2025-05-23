import React from "react";
import { useRoute, Link } from "wouter";

interface CustomLinkI {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const CustomLink = (props: CustomLinkI) => {
  const [isActive] = useRoute(props.href);
  const activeObject = {
    color: "#3f51b5",
  };
  return (
    <Link {...props}>
      <span style={isActive ? activeObject : {}}>{props.children}</span>
    </Link>
  );
};

export default CustomLink;
