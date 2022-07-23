import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  chakra,
  VStack,
  Center,
  Flex,
} from "@chakra-ui/react";
import Layout1 from "../../layouts/layout1";

function FormikPage() {
  const chakraMik = chakra(Formik);
  return (
    <Flex w={"full"} h={"full"} justify={"center"}>
      <Formik
        initialValues={{ name: "jared" }}
        validationSchema={Yup.object().shape({
          name: Yup.string().max(5).required("Name can not be empty"),
        })}
        onSubmit={(values, actions) => {
          console.log(values);
          console.log(actions);
        }}
      >
        {(props) => (
          <Form>
            <VStack minW={"3xl"} gap={5}>
              <FormControl
                isInvalid={props.errors.name}
                sx={{ display: "flex", flexDirection: "column", gap: 4 }}
              >
                <FormLabel htmlFor="name">Email address</FormLabel>
                <Field as={Input} id="namek" name="name" type="text" />
                {props.errors.name ? (
                  <FormErrorMessage color={"red.300"}>
                    Email is required.
                  </FormErrorMessage>
                ) : (
                  <FormHelperText>
                    Enter the email you'd like to receive the newsletter on.
                  </FormHelperText>
                )}
              </FormControl>
              <Button type="submit">Submit</Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Flex>
  );
}

export default FormikPage;

FormikPage.getLayout = function getLayout(page) {
  return <Layout1>{page}</Layout1>;
};
