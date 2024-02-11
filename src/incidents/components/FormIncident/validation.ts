interface FormState {
    [key: string]: any;
  }
  
  interface ValidationErrors {
    [key: string]: string;
  }
  
  type FormValidation = (formState: FormState) => ValidationErrors;
  
  export const validate: FormValidation = (inputForm) => {
    const errors: ValidationErrors = {};
  
    if ("asunto" in inputForm) {
      if (inputForm.asunto.trim() === "") {
        errors.asunto = "Campo requerido";
      } 
    }
  
    if ("detalle" in inputForm) {
      if (inputForm.detalle.trim() === "") {
        errors.detalle = "Campo requerido";
      }
    }
    return errors;
  };
  