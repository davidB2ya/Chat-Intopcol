import React from "react";
import { Switch , Route} from 'react-router-dom';
import Chat from "./components/Chat/Chat.jsx";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register.jsx";
import Contacts from "./components/Contact/Contacts.jsx";
import User from "./components/User/User.jsx";
// import { ContextProvider } from "./components/Context/Context.js";

function App() {
  
  return (
    // <ContextProvider>
      <div className="App">
        <Switch>
            <Route exact path="/"><Login/></Route>
            <Route exact path="/login"><Login/></Route>
            <Route path='/chat'><Chat/></Route>
            <Route path='/register'><Register/></Route>
            <Route path='/contacts'><Contacts/></Route>
            <Route path='/user'><User/></Route>
        </Switch>
      </div>
    // </ContextProvider>
  );
}

export default App;
