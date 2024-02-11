interface FormState {
  [key: string]: any;
}

interface ValidationErrors {
  [key: string]: string;
}

type FormValidation = (formState: FormState) => ValidationErrors;

export const validate: FormValidation = (inputForm) => {
  const errors: ValidationErrors = {};

  if ("contraseña" in inputForm) {
    const usernamePattern = /^[a-zA-Z0-9]{5,}$/;
    if (inputForm.contraseña.trim() === "") {
      errors.contraseña = "Campor requerido";
    } else if (!usernamePattern.test(inputForm.contraseña)) {
      errors.contraseña = "Mínimo 5 caracteres";
    }
  }

  if ("correo" in inputForm) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputForm.correo.trim() === "") {
      errors.correo = "Campo requerido";
    } else if (!emailPattern.test(inputForm.correo)) {
      errors.correo = "Email no válido";
    }
  }
  return errors;
};
