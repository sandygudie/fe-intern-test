import React from "react";
import { useField } from "formik";

const InputField = (props) => {
  
  const [field, { error, touched }] = useField(props);

  return (
    <>
      <input
        {...field}
        {...props}
        name={field.name}
        placeholder={props.placeholder}
        className={`form-control  ${
          error && touched ? "text-input-error" : ""
        } `}
      />
      {error && touched && <div className="input-feedback">{error}</div>}
    </>
  );
};

export default InputField;
