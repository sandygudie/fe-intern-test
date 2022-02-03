import React, { useState } from "react";
import { Formik, Form } from "formik";
import InputField from "../components/InputField";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Spinner from "../components/Spinner";
import * as Yup from "yup";
import { useToast } from "@chakra-ui/react";
import "./styles.scss";

const Login = () => {
  const toast = useToast();

  const [passwordShown, setPasswordShown] = useState(false);
  const [checked, setChecked] = useState(true);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required.")
      .email("Email is invalid."),
    password: Yup.string()
      .required("Password is required.")
      .min(6, "Password must be at least 6 characters.")
      .max(40, "Password must not exceed 40 characters."),
  });

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
    return new Promise((resolve, reject) => {
      resolve(JSON.stringify(data, null, 2));
    });
  };

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <>
      <div className="login__container">
        <div className="login__form">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                handleSubmit(values)
                  .then(() => {
                    toast({
                      title: "Login Successful!",
                      status: "success",
                      position: "top",
                      duration: 3000,
                      isClosable: true,
                    });
                  })
                  .catch((error) => {
                    toast({
                      title: "Error.",
                      description: "Try Again.",
                      status: "error",
                      duration: 3000,
                      isClosable: true,
                    });
                  });
                setSubmitting(false);
              }, 2000);
            }}
          >
            {({ handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <div>
                  <h1>Sign in</h1>
                </div>
                <div className="form-group">
                  <InputField
                    type={"email"}
                    name="email"
                    className="form-control"
                    placeholder="Email address"
                  />
                </div>
                <div className="form-group">
                  <InputField
                    name="password"
                    type={passwordShown ? "text" : "password"}
                    className="form-control"
                    placeholder="Password"
                  />
                  <div onClick={togglePasswordVisiblity}>
                    {passwordShown ? (
                      <FiEye className="visibility" />
                    ) : (
                      <FiEyeOff className="visibility" />
                    )}
                  </div>
                </div>
                <div className="form-group ">
                  <div className="form_check">
                    <InputField
                      name="checkbox"
                      type="checkbox"
                      className="form-check-input"
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                    />
                    <label htmlFor="checkbox" className="form-check-label">
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  {isSubmitting ? (
                    <Spinner height={50} width={80} color="white" />
                  ) : (
                    <button type="submit" className="login__btn ">
                      SIGN IN
                    </button>
                  )}
                </div>
                <div className="form-group">
                  <a href="/">I forgot my password</a>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
