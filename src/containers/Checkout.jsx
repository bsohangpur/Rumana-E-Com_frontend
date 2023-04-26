import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { SendCheckoutData } from "../Redux/Reducers/checkoutSlice";

const Checkout = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    address: Yup.object().shape({
      street: Yup.string().required("Street address is required"),
      lane: Yup.string().required("Lane address is required"),
      pinCode: Yup.string().required("Pin code is required"),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
      country: Yup.string().required("Country is required"),
    }),
    note: Yup.string(),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: {
      street: "",
      lane: "",
      pinCode: "",
      city: "",
      state: "",
      country: "",
    },
    note: "",
  };

  const handleSubmit = (values) => {
    dispatch(SendCheckoutData(values));
  };

  return (
    <Box w="full" maxW="xl" mx="auto" mb={12}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Checkout
      </Heading>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Stack spacing={4}>
            {["firstName", "lastName", "email", "phone"].map((fieldName) => (
              <Field key={fieldName} name={fieldName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors[fieldName] && form.touched[fieldName]
                    }
                  >
                    <FormLabel htmlFor={fieldName}>
                      {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                    </FormLabel>
                    <Input
                      {...field}
                      id={fieldName}
                      type={fieldName === "email" ? "email" : "tel"}
                    />
                    <FormErrorMessage>
                      {form.errors[fieldName]}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            ))}
            <Heading as="h2" size="lg" mt={8} mb={4}>
              Address
            </Heading>
            {["street", "lane", "pinCode", "city", "state", "country"].map(
              (fieldName) => (
                <Field key={fieldName} name={`address.${fieldName}`}>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={
                        form.errors.address?.[fieldName] &&
                        form.touched.address?.[fieldName]
                      }
                    >
                      <FormLabel htmlFor={`address.${fieldName}`}>
                        {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                      </FormLabel>
                      <Input
                        {...field}
                        id={`address.${fieldName}`}
                        type="text"
                      />
                      <FormErrorMessage>
                        {form.errors.address?.[fieldName]}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              )
            )}
            <Field name="note">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.note && form.touched.note}>
                  <FormLabel htmlFor="note">Note</FormLabel>
                  <Textarea
                    {...field}
                    id="note"
                    placeholder="Write a note (optional)"
                  />
                  <FormErrorMessage>{form.errors.note}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button colorScheme="blue" type="submit">
              Place Order
            </Button>
          </Stack>
        </Form>
      </Formik>
    </Box>
  );
};

export default Checkout