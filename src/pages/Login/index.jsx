import {FaUser, FaLock} from "react-icons/fa";
import {Link} from 'react-router-dom';
import "./index.css";

const Login = () => {

  

  return (
    <div className="container">
        <form >
            <h1>Kognit</h1>

            <div className="input-field">
            <input 
            type="email"
            placeholder='E-mail'
            />
            <FaUser className="icon"/>
            </div>

            <div className="input-field">
            <input
            type="password"
            placeholder='Senha' 
            />
            <FaLock className="icon"/>
            </div>
            
            <div className="recall-forget">
              <label>
                <input type="checkbox" />
                Lembrar de mim
              </label>
              <a href="#">Esqueceu a senha?</a>
            </div>
            <Link to="/Home"><button>Entrar</button></Link>
            <div className="singup-link"></div>
            <p>Não tem uma conta? <a href="#">Resgistrar</a></p>
        </form>
    </div>
  )
}

export default Login