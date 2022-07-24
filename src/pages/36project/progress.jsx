import { Center, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

function progress() {
  return (
    <div>
      {pageData.map((item, index) => {
        return <MyLink key={index} path={item.path} desc={item.desc} />;
      })}
    </div>
  );
}

export default progress;

function MyLink({ path, desc }) {
  return (
    <Center h={"10"}>
      <NextLink href={path} passHref>
        <Link>{desc}</Link>
      </NextLink>
    </Center>
  );
}

const pageData = [
  { path: "/36project/project1", desc: "project1" },
  { path: "/36project/project2", desc: "project2" },
  { path: "/36project/project4", desc: "project4" },
  { path: "/36project/project5", desc: "project5" },
];
