// src/helpers/validateContactForm.ts
import { ContactFormData, ContactFormErrors } from "@/interfaces/contactForm";

export const validateContactForm = (data: ContactFormData): ContactFormErrors => {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) {
    errors.name = "El nombre es obligatorio.";
  } else if (data.name.trim().length < 4) {
    errors.name = "El nombre debe tener al menos 4 caracteres.";
  } else if (data.name.trim().length > 25) {
    errors.name = "El nombre no puede sobrepasar los 25 caracteres"
  }

  if (!data.company.trim()) {
    errors.company = "El nombre de la empresa es obligatorio.";
  } else if (data.name.trim().length < 2) {
    errors.name = "El nombre de la empresa debe tener al menos 2 caracteres.";
  }  else if (data.name.trim().length > 25) {
    errors.name = "El nombre de la empresa no puede sobrepasar los 25 caracteres"
  }

  if (!data.phone.trim()) {
    errors.phone = "El teléfono es obligatorio.";
  } else if (!/^[0-9+\-\s()]{6,20}$/.test(data.phone.trim())) {
    errors.phone = "Formato de teléfono inválido.";
  }

  if (!data.email.trim()) {
    errors.email = "El correo electrónico es obligatorio.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Correo electrónico inválido.";
  }

  if (!data.message.trim()) {
    errors.message = "La descripción es obligatoria.";
  } else if (data.message.trim().length < 10) {
    errors.message = "La descripción debe tener al menos 10 caracteres.";
  }

//   if (!data.privacyAccepted) {
//     errors.privacyAccepted = "Debés aceptar la política de privacidad.";
//   }

  return errors;
};
