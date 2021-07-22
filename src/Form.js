import { useState } from "react";
import StepTwo from "./StepTwo";


const Form = () => {

  const [name, setName] = useState("");    
  const [email, setEmail] = useState("");    
  const [pass, setPass] = useState("");    
  const [confPass, setConfPass] = useState("");   
  
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPass(e.target.value)
  }
  const handleConfPasswordChange = (e) => {
    setConfPass(e.target.value)
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      <StepTwo name={name} email={email} password={pass}/>
  }

    return (
        <div className="form">
            <h2>Création de compte</h2>
            <form onSubmit={handleSubmit}>
                <label for="name">Votre petit nom, pseudo ou autre diminutif</label>
                <input type="text" name="name" onChange= {handleNameChange} />
                <label for="email">Une adresse email valide, c'est toujours mieux</label>
                <input type="text" name="email" onChange= {handleEmailChange} />
                <label for="pass">Votre mot de passe</label>
                <input type="password" name="pass" onChange= {handlePasswordChange} />
                <label for="confpass">Votre mot de passe une deuxième fois pour être sûr</label>
                <input type="password" name="confpass" onChange= {handleConfPasswordChange} />
                <input type="submit" value="Balance la sauce !" />
            </form>
            
        </div>
    );
};

export default Form;