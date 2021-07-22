

const StepTwo = ({name, email, password}) => {
    return (
      <div className="step_two">
        <h2>Faisons le point</h2>
        <div className="infos">
          <span>Votre nom: {name}</span>
          <span>Votre email: {email}</span>
          <span>Votre mot de passe: {password}</span>
        </div>
        <button>Confirmez vos infos</button>
      </div>
    );
};

export default StepTwo;