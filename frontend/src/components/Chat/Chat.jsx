import React, { useState, useEffect, useRef } from "react";
import socket from "../Socket.js";
import styles from "./Chat.module.css";
// import { Link } from 'react-router-dom';
// import { Context } from "../Context/Context.js";

const Chat = ({nombre}) => {

  // const {users} = useContext(Context)

  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    socket.emit("conectado", nombre);
  }, [nombre]);

  useEffect(() => {
    socket.on("mensajes", (mensaje) => {
      setMensajes([...mensajes, mensaje]);
    });

    return () => {
      socket.off();
    };
  }, [mensajes]);

  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const submit = (e) => {
    if(mensaje !== ""){
      e.preventDefault();
      socket.emit("mensaje", nombre, mensaje);
      setMensaje("");
    }else{
      e.preventDefault();
    }
  };

  return (
    <div className={styles.containerChat}>
      <h3>Hola {nombre} Bienvenido </h3> 
      {/* <i class="fas fa-window-close"></i> */}
      {/* <Link to={"/contacts"}><i class="far fa-window-close"></i></Link> */}
      <form onSubmit={submit}>
        <div className={styles.chat}>
          {mensajes.map((e, i) => (
            <div key={i}>
              <div>{e.nombre}</div>
              <div>{e.mensaje}</div>
            </div>
          ))}
          <div ref={divRef}></div>
        </div>
        <div className={styles.containerMessageChat}>
          <input 
              className={styles.messageChat}
              placeholder="Escriba un mensaje" 
              name=""
              id=""
              cols="30"
              rows="10"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
          ></input>
        </div>
        
      </form>
          {/* <label htmlFor="">Escriba su mensaje</label> */}
          {/* <button className={styles.send}>Enviar</button> */}
    </div>
  );
};

export default Chat;
