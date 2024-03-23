import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
        const response = await axios.post("https://localhost:3000/signup", {name, email, password});
        const token = response.data.token;

        localStorage.setItem('token', token);
        
        navigate('/dashboard');
        console.log(token);
    } catch(error: any) { 
        console.error(error.response.data.message);
    }
}

  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-2xl tracking-tight leading-tight">
          Sign In to FiManage
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Name"
          />
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
