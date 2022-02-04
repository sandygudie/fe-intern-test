import { useState } from "react";
import { useToast } from "@chakra-ui/react";

const useForm = (validate) => {
  const toast = useToast();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && isSubmitting) {
  //     callback();
  //   }
  // }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    if (validate(values).email || validate(values).password) {
      setIsSubmitting(false);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Login Successful!",
          status: "success",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
      }, 5000);
    }

    setErrors(validate(values));
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
  };
};

export default useForm;
