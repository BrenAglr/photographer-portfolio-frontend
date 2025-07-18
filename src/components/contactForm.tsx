'use client';

import { useState } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { validateContactForm } from '@/helpers/validateContactForm';
import { ContactFormData, ContactFormErrors } from '@/interfaces/contactForm';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
    // privacyAccepted: false,
  });

  const router = useRouter();

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { id, value, type } = e.target;

  const updatedValue =
    type === 'checkbox' && e.target instanceof HTMLInputElement
      ? e.target.checked
      : value;

  const newFormData = {
    ...formData,
    [id]: updatedValue,
  };

  setFormData(newFormData);
  const validationErrors = validateContactForm(newFormData);
  setErrors(validationErrors);
};

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const validationErrors = validateContactForm(formData);
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length === 0) {
    // enviar a formspree
    fetch("https://formspree.io/f/xwpqpllq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    })
      .then(() => {
        // Mostrar alerta de éxito
        Swal.fire({
          title: 'Ya recibi tu mensaje💌',
          text: 'Gracias por contactarte. Te respondere pronto.',
          icon: 'success',
          confirmButtonColor: '#111827',
          confirmButtonText: 'Volver al inicio',
        }).then(() => {
          // Redirigir al home
          router.push('/');
        });

        // Resetear formulario
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          message: '',
          // privacyAccepted: false,
        });
        setSubmitted(true);
      })
      .catch(() => {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al enviar el formulario. Intenta de nuevamente.',
          icon: 'error',
          confirmButtonColor: '#111827',
        });
      });
  }
};


  const isFormValid = Object.keys(validateContactForm(formData)).length === 0;

  return (
    <div className="w-full flex items-start justify-center px-0">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl rounded-2xl p-8 space-y-6 text-chocolate
           bg-white/10 backdrop-blur-md border border-white/20 
            shadow-xl shadow-black/30"
        >
          {/* NOMBRE */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-base font-semibold text-chocolate">
              Nombre completo <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-gray-600 py-2 text-base"
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>

          {/* EMPRESA */}
          <div className="flex flex-col">
            <label htmlFor="company" className="text-base font-semibold text-chocolate">
              Nombre de la empresa <span className="text-red-500">*</span>
            </label>
            <input
              id="company"
              value={formData.company}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-gray-600 py-2 text-base"
            />
            {errors.company && <p className="text-sm text-red-500">{errors.company}</p>}
          </div>

          {/* TELÉFONO */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-base font-semibold text-chocolate">
              Teléfono <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-gray-600 py-2 text-base"
            />
            {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
          </div>

          {/* EMAIL */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-base font-semibold text-chocolate">
              Correo electrónico <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-gray-600 py-2 text-base"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>

          {/* MENSAJE */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-base font-semibold text-chocolate">
              Descripción del proyecto o consulta <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-gray-600 py-2 text-base resize-none placeholder-gray-500"
              placeholder="Contanos sobre tu idea o en qué podemos ayudarte"
            />
            {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
          </div>

          {/* CHECK PRIVACIDAD */}
          {/* <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="privacityAccepted"
              checked={formData.privacyAccepted}
              onChange={handleChange}
              className="accent-black"
            />
            <label htmlFor="acceptedPolicy" className="text-sm text-gray-700">
              Acepto la política de privacidad <span className="text-red-500">*</span>
            </label>
            {errors.privacyAccepted && (
              <p className="text-sm text-red-500">{errors.privacyAccepted}</p>
            )}
          </div> */}

          {/* BOTÓN */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`text-sm px-6 py-2 rounded-md transition duration-300 ${
                isFormValid
                  ? 'bg-amber-500 text-graywhite hover:bg-opacity-80'
                  : 'bg-gray-500 text-graywhite cursor-not-allowed'
              }`}
            >
              Enviar
            </button>
          </div>
        </form>
    </div>
  );
}
