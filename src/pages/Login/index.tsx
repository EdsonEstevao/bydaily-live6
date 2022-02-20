import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();


    const [email, setEmail] =  useState('');
    const [password, setPassword] = useState('');    

    const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    const handleLogin = async () => {
        if(email && password){
            const isLogged = await auth.signin(email, password);
            if(isLogged){
                navigate('/')
            }else {
                alert("Não deu certo!");
            }
        }

    }
    return (
        <div className="">
            <h2>Página Fechada</h2>
            <input                 
                type="email" 
                value={email} 
                placeholder="Digite seu e-mail"
                required
                onChange={handleEmailInput}
            />
            <input 
                type="password" 
                value={password} 
                placeholder="Digite sua senha"
                onChange={handlePasswordInput}
            />
            <button onClick={handleLogin}>Logar</button>
        </div>
    )
}