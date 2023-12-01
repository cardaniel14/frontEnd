import React from "react";
import "../../src/styles/components/pages/Contact.css";
import { useState } from "react";
import axios from "axios";

export default function Contact(props) {
  const initialForm = {
    name: "",
    email: "",    
    message: "",
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true);
    const response = await axios.post('http://localhost:3000/api/contacto', formData);
    setMsg(response.data.message);
    setSending(false);
    if(response.data.error === false){
    setFormData(initialForm);
    }
  }

  return (
    <main className="contacto">
      <div className="contactForm">
        <h2>Contacto rapido</h2>
        <form
          action="/contacto"
          method="post"
          onSubmit={handleSubmit}
          className="formulario"
        >
          <p>
            <label for="name">Nombre</label>

            <input
              type="text"
              name="name"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Your Name Here"
            />
          </p>
          <p>
            <label for="email">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail Here"
            />
          </p>
          <p>
            <label for="message">Mensaje</label>
            <br />
            <textarea
              name="message"
              value={formData.mensaje}
              onChange={handleChange}
              cols="30"
              rows="10"
              placeholder="Your Message Here"
            ></textarea>
            <br />
            
          </p>
          <p className="acciones"><input type="submit" value="Enviar" /></p>
        </form>
        {sending ? <p>Enviando...</p> : null}
        {msg ? <p>{msg}</p> : null}
      </div>
    </main>
  );
}
