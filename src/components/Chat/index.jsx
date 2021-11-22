import React from "react";
import { Field, Form, Formik } from "formik";

export default function Chat() {
  return (
    <Formik
      onSubmit={(values, formikBag) => {
        console.log(values);
        formikBag.resetForm();
      }}
      initialValues={{
        text: "",
      }}
    >
      {() => {
        return (
          <Form>
            <Field name="text" placeholder="Enter message..." />
            <button type="submit">Send message</button>
          </Form>
        );
      }}
    </Formik>
  );
}
