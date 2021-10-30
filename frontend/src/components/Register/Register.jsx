import React, { useState } from 'react'
import Contacts from '../Contact/Contacts';
import styles from './Register.module.css'
import info from '../../data/data.json'
// import { Context } from "../Context/Context.js";

const Register = () => {


    // const {users} = useContext(Context)
    const users = info
    const [nombre, setNombre] = useState("");
    const [pass, setPass] = useState("");
    const [registrado, setRegistrado] = useState(false);
  
    const registrar = (e) => {
        e.preventDefault();
        if (nombre !== "" && pass !== "") {
            for (let index = 0; index < users.length; index++) {
                if(nombre == users[index].user && pass == users[index].password) {
                    setRegistrado(true);
                    console.log("Hizo mach con index: " + index);
                    setNombre(users[index].name);
                    console.log(nombre);
                    break;
                }else{
                   console.log("No hizo mach con el index: " , index);
                   alert("Usuario o contraseña incorrecto")
                   setNombre("")
                   setPass("")
                   break;
                }
            };
        }else{
            alert("Complete ambos campos")
            setNombre("")
            setPass("")
        }
    };

    return (
        <div>
            <div className={styles.register}>
                 
                {!registrado && (
                <form onSubmit={registrar}>
                    <h1>INTOPCOL</h1>
                    <h3>communication</h3>
                    <input className={styles.validate} placeholder="User..." name={nombre} type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    <input className={styles.validate} placeholder="Password..." name={pass} type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
                    <button>Join</button>
                </form>
                )}
                </div>
                {registrado && <Contacts username={nombre}/>}
        </div>
    );
}

export default Register
