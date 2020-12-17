import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { alertService, classificatorService } from "../_services";

function Classificator({ history, location }) {
  const initialValues = {
    title: "",
    text: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    text: Yup.string().required("News text is required"),
  });

  function onSubmit({ title, text }, { setSubmitting }) {
    alertService.clear();
    classificatorService
      .processText(title, text)
      .then((resp) => {
        console.log("------", resp);
        setSubmitting(false);
      })
      .catch((error) => {
        setSubmitting(false);
        alertService.error(error);
      });
  }

  return (
    <section className="vh-100">
      <div className="container">
        <h1 className="display-4 pt-5">News classificator</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <div className="card-body">
                <div className="form-group">
                  <Field
                    placeholder="Title"
                    name="title"
                    type="text"
                    className={
                      "form-control" +
                      (errors.title && touched.title ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="invalid-feedback text-left"
                  />
                </div>
                <div className="form-group">
                  <Field
                    as="textarea"
                    rows="16"
                    maxlength="2000"
                    placeholder="Text"
                    name="text"
                    type="text"
                    className={
                      "form-control" +
                      (errors.text && touched.text ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="text"
                    component="div"
                    className="invalid-feedback text-left"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col d-flex justify-content-start">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-outline-primary btn-lg"
                    >
                      {isSubmitting && (
                        <span className="spinner-border spinner-border-sm mr-1"></span>
                      )}
                      Classify text
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export { Classificator };
