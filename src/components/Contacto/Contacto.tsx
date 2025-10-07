
'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contacto = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Reemplazá estos valores con los tuyos de EmailJS
    const serviceID = 'service_87c2id6';    
    const templateID = 'template_zjbyujs';   
    const publicKey = 'T2dgesdMZksIk89L4';  

    emailjs
      .send(serviceID, templateID, formData, {
        publicKey: publicKey,
      })
      .then(() => {
        Swal.fire({
          title: '¡Mensaje enviado!',
          text: 'Gracias por contactarme. Te responderé pronto.',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
        setFormData({ from_name: '', reply_to: '', message: '' });
      })
      .catch((err) => {
        console.error('Error:', err);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo enviar el mensaje. Inténtalo de nuevo.',
          icon: 'error',
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="contacto-section">
      <h2 className="section-title">Contacto</h2>
      <p className="contacto-subtitle">
        ¿Querés trabajar juntos o tenés una pregunta? ¡Escribime!
      </p>
      <form className="contacto-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="from_name">Nombre</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reply_to">Email</label>
          <input
            type="email"
            id="reply_to"
            name="reply_to"
            value={formData.reply_to}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn-primary"
          disabled={isSending}
        >
          {isSending ? 'Enviando...' : 'Enviar mensaje'}
        </button>
      </form>
    </section>
  );
};

export default Contacto;
