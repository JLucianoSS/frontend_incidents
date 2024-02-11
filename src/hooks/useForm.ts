import { useEffect, useState } from "react";

interface FormState {
  [key: string]: any;
}

interface ValidationErrors {
  [key: string]: string;
}

type FormValidation = (formState: FormState) => ValidationErrors;

export const useForm = (initialForm: FormState = {}, validate?: FormValidation) => {
  const [formState, setFormState] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    if (validate) {
      setErrors(validate(formState));
    }
  }, [formState]);

  return {
    formState,
    setFormState,
    onInputChange,
    errors,
  };
};




