import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function AddNewsModal(props) {
  const initialValues = {
    title: "",
    text: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    text: Yup.string().required("News text is required"),
  });

  function onSubmit({ title, text }, { setSubmitting }) {
    console.log(title, text);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter text-center">
          Add your news here
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
                    autocomplete="off"
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
                    rows="8"
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
                <div className="d-flex justify-content-end">
                  <button class="btn btn-link">Cancel</button>
                  <Button
                    disabled={isSubmitting}
                    className="btn btn-lg"
                    onClick={props.onHide}
                  >
                    {isSubmitting && (
                      <span className="spinner-border spinner-border-sm mr-1"></span>
                    )}
                    Save
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
}

export { AddNewsModal };
