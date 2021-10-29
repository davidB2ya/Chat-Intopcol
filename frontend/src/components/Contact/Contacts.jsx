import React, { useState} from "react";
import styles from "./Contacts.module.css"
import User from '../User/User.jsx';
import Chat from '../Chat/Chat.jsx';
import info from '../../data/data.json'
// import { Context } from "../Context/Context.js";
// import { Link } from 'react-router-dom';

const Contacts = ({username}) => {

    // const {users} = useContext(Context)

    const users = info
    // const [team, setTeam] = useState("")
    const [chats, setChats] = useState(false)


    onclick = () => {
        setChats(true)
    }
    // const initialState = () => {
        
    // }
    // const reducer = (state = initialState(), action) =>{
    //     return state
    // }

    // const [state, dispatch] = React.useReducer(reducer, reducer())
 

    // const [mensaje, setMensaje] = useState("");
    // const [mensajes, setMensajes] = useState([]);
  
    // useEffect(() => {
    //   socket.emit("conectado", username);
    // }, [username]);
  
    // useEffect(() => {
    //   socket.on("mensajes", (mensaje) => {
    //     setMensajes([...mensajes, mensaje]);
    //   });
  
    //   return () => {
    //     socket.off();
    //   };
    // }, [mensajes]);
  
    // const divRef = useRef(null);
    // useEffect(() => {
    //   divRef.current.scrollIntoView({ behavior: "smooth" });
    // });
  
    // const submit = (e) => {
    //   if(mensaje !== ""){
    //     e.preventDefault();
    //     socket.emit("mensaje", username, mensaje);
    //     setMensaje("");
    //   }else{
    //     e.preventDefault();
    //   }
    // };




    return (
        <div className={styles.contacts}>
            <div className={styles.header}>
                <img src="https://i.ibb.co/drMgcYF/logo-Intop-Col.png" alt="logo" />
                <span>{username}</span>
                <div className={styles.profile}>
                    <i class="far fa-user"></i>
                </div>          
            </div> 
            <input className={styles.seach} type="seach" placeholder="Seach contacts..."/>
            <div className={styles.myTeams}>
                <h2>My Teams</h2>
                <div className={styles.teams}>
                    <img onclick={onclick} src="https://i.ibb.co/mt4K9Mx/boss.png" alt="boss" />
                    <img onclick={onclick} src="https://i.ibb.co/KGt0W1d/sales.png" alt="sale" />
                    <img onclick={onclick} src="https://i.ibb.co/1Q4y93X/shop.png" alt="shop" />
                    <img onclick={onclick} src="https://i.ibb.co/QCLNwT3/Vector.png" alt="work" />
                </div> 
            </div>
            <div className={styles.allMenssages}>
                <h2>Menssages</h2>
                <div className={styles.menssages}>
                    {!chats && users.map(element =>(
                        <User key={element.id} data={element}/>
                    ))}
                </div> 
                    {chats && <Chat nombre={username} />}  
                </div>

                      

            {/* <i class="far fa-comment-dots"></i> */}
            
           
        </div>
    )
}

export default Contacts
