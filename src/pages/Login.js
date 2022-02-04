import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import useForm from "./useForm";
import Spinner from "../components/Spinner";
import validate from "./validate";
import "./styles.scss";

const Form = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [checked, setChecked] = useState(true);

  const { values, errors, handleChange, handleSubmit, isSubmitting } = useForm(
    login,
    validate
  );

  function login() {
    console.log("No errors, submit callback called!");
  }

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className="login__container">
      <div className="login__form">
        <div>
          <h1>Sign in</h1>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <input
              className={`form-control  ${
                errors.email ? "text-input-error" : ""
              } `}
              placeholder="Email address"
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email || ""}
              required
            />
            {errors.email && <p className="help is-danger">{errors.email}</p>}
          </div>

          <div className="form-group">
            <input
              className={`form-control  ${
                errors.password ? "text-input-error" : ""
              } `}
              placeholder="Password"
              type={passwordShown ? "text" : "password"}
              name="password"
              onChange={handleChange}
              value={values.password || ""}
              required
            />
            <div onClick={togglePasswordVisiblity}>
              {passwordShown ? (
                <FiEye className="visibility" />
              ) : (
                <FiEyeOff className="visibility" />
              )}
            </div>
            {errors.password && (
              <p className="help is-danger">{errors.password}</p>
            )}
          </div>

          <div className="form-group ">
            <div className="form_check">
              <input
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
                {" "}
                SIGN IN
              </button>
            )}
          </div>
          <div className="form-group">
            <a href="/">I forgot my password</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
