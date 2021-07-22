import { useState } from "react";
import StepTwo from "./StepTwo";
import "./Form.scss"


const Form = () => {

  const [name, setName] = useState("");    
  const [email, setEmail] = useState("");    
  const [pass, setPass] = useState("");    
  const [confPass, setConfPass] = useState(""); 
  const [result, setResult] = useState(false);
  const [borderColor, setBorderColor] = useState("black");
  
  
  
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
      if (pass === confPass) {
          setResult(true);
        } else {
        setBorderColor("red");
        console.log("enculé");
          }
      
  }



    return !result ? (
      <div className="form">
        <h2>Création de compte</h2>
        <form onSubmit={handleSubmit}>
          <label for="name">Votre petit nom, pseudo ou autre diminutif</label>
          <input type="text" name="name" onChange={handleNameChange} />
          <label for="email">
            Une adresse email valide, c'est toujours mieux
          </label>
          <input
            type="text"
            name="email"
            onChange={handleEmailChange}
            style={{ border: "none" }}
          />
          <label for="pass">Votre mot de passe</label>
          <div
            className="div_pass"
            style={{
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: { borderColor },
            }}
          >
            <input
              type="password"
              name="pass"
              onChange={handlePasswordChange}
            />
          </div>
          <label for="confpass">
            Votre mot de passe une deuxième fois pour être sûr
          </label>
          <div
            className="div_pass"
            style={{
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: { borderColor },
            }}
          >
            <input
              type="password"
              name="confpass"
              onChange={handleConfPasswordChange}
            />
          </div>
          <input type="submit" value="Balance la sauce !" />
        </form>
      </div>
    ) : (
      <StepTwo name={name} email={email} password={pass} />
    );
};

export default Form;