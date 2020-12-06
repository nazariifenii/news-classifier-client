import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { accountService, alertService } from "../_services";

function Login({ history, location }) {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  function onSubmit({ email, password }, { setSubmitting }) {
    alertService.clear();
    accountService
      .login(email, password)
      .then(() => {
        const { from } = location.state || { from: { pathname: "/" } };
        history.push(from);
      })
      .catch((error) => {
        setSubmitting(false);
        alertService.error(error);
      });
  }

  return (
    <section className="container-fluid">
      <div className="row vh-100">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <div className="row d-flex align-items-center justify-content-center">
            <img
              className="col-md-10 mb-5"
              src="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/58915/s960_newspapers-pile-960x640.jpg"
            ></img>
          </div>
          <div className="row d-flex flex-column align-items-center">
            <div className="col-md-10">
              <h1 className="mb-4">News classificator app</h1>
              <p>
                Tell the world how awesome your app is and why they should use
                it!!Tell the world how awesome your app is and why they should
                use it!!
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center bg-light">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <h1 className="display-4 m-0">Welcome back!</h1>
                <div className="d-flex align-items-baseline justify-content-center">
                  <p>Don't have an account? </p>
                  <Link to="register" className="btn btn-link p-0 pl-2">
                    Register
                  </Link>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <Field
                      placeholder="Email"
                      name="email"
                      type="text"
                      className={
                        "form-control" +
                        (errors.email && touched.email ? " is-invalid" : "")
                      }
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="invalid-feedback text-left"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      placeholder="Password"
                      name="password"
                      type="password"
                      className={
                        "form-control" +
                        (errors.password && touched.password
                          ? " is-invalid"
                          : "")
                      }
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="invalid-feedback text-left"
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group col d-flex justify-content-start">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary"
                      >
                        {isSubmitting && (
                          <span className="spinner-border spinner-border-sm mr-1"></span>
                        )}
                        Login
                      </button>
                    </div>
                    <div className="form-group col text-right">
                      <Link to="forgot-password" className="btn btn-link pr-0">
                        Forgot Password?
                      </Link>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}

export { Login };
