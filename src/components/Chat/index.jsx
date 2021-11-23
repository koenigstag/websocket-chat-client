import React from "react";
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from "formik";
import { sendMessageRequest } from "../../app/actions/creators"

export default function Chat() {
  const dispatch = useDispatch()

  return (
    <Formik
      onSubmit={(values, formikBag) => {
        dispatch(sendMessageRequest(values));

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
