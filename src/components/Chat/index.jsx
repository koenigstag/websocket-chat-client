import React from "react";
import { Field, Form, Formik } from "formik";
import { sendMessage } from "../../api/chat";

export default function Chat() {
  return (
    <Formik
      onSubmit={(values, formikBag) => {
        sendMessage(values.text);

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
