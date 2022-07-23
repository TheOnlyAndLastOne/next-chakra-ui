// import { Box, Center, Flex, Img } from "@chakra-ui/react";
// import React from "react";
// import Layout1 from "../../layouts/layout1";

// function Dog(props) {
//   return (
//     <Flex w={"100%"} mt={"28"} justifyContent={"center"}>
//       <Img
//         src={props.message.message}
//         alt={"dog"}
//         w={"400px"}
//         h={"350px"}
//         objectFit={"cover"}
//       />
//     </Flex>
//   );
// }

// export default Dog;

// Dog.getLayout = function getLayout(page) {
//   return <Layout1>{page}</Layout1>;
// };

// export async function getServerSideProps(context) {
//   const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
//   const data = await res.json();
//   return {
//     props: { message: data }, // will be passed to the page component as props
//   };
// }

import React from 'react'

function dog() {
  return (
    <div>dog</div>
  )
}

export default dog
