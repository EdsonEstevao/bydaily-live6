import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
export const Private = () => {
    const auth = useContext(AuthContext)

    return (
        <div>            
            <div>Página Privada</div>
            Olá {auth.user?.name}, tudo bem!
        </div>
        
    )
}