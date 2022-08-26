import React from "react";
import ContactForm from "../forms/ContactForm";
import ContactComponent from "../pure/ContactComponent";
import { useState } from "react";

export const ContactContainer = () => {
  
    const defaultContact = [
      { nombre: 'Gokú', email: 'songoku@gmail.com', conectado: true },
      { nombre: 'Krilin', email: 'krilin@gmail.com', conectado: true },
    ];
  
    const [nuevoContacto, setNuevoContacto] = useState(defaultContact);
  
    function changeState(contacto) {
      const index = nuevoContacto.indexOf(contacto);
      const tempContact = [...nuevoContacto];
  
      tempContact[index].estado = !tempContact[index].estado;
      setNuevoContacto(tempContact);
    }
  
    function remove(contacto) {
      const index = nuevoContacto.indexOf(contacto);
      const tempContact = [...nuevoContacto];
      tempContact.splice(index, 1);
      setNuevoContacto(tempContact);
    }
  
    function addContact(contacto) {
      const tempContact = [...nuevoContacto];
      tempContact.push(contacto);
      setNuevoContacto(tempContact);
    }
  
    return (
      <div className="App">
        <h1>Contactos</h1>
  
        <div className="card-container">
          {nuevoContacto.map((contacto, index) => {
            return (
              <ContactComponent 
                key={index}  
                contacto={contacto} 
                changeState={changeState} 
                remove={remove} />
            );
          })}
        </div>
  
        <ContactForm onAddContact={addContact}></ContactForm>
      </div>
  );
};