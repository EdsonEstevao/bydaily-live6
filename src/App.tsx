import { Link, useNavigate } from 'react-router-dom';
import { MainRoute } from './routes';

import './App.css';
import { useContext } from 'react';
import { AuthContext } from './contexts/Auth/AuthContext';

function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();
    navigate('/');


  }
  
  return (
    <div className="App">
      <header>
        <h1>Header do site</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private" >Página Privada</Link>
          {auth.user && <a href='javascript;' onClick={handleLogout}>Sair</a>}
        </nav>
      </header>
      <hr />
      <MainRoute />
    </div>
  );
}

export default App;
