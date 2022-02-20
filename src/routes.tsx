import { Routes, Route } from 'react-router-dom';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Home } from './pages/Home';
import { Private } from './pages/Private';

export const MainRoute = () => {
    return (
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/private" element={ <RequireAuth><Private /></RequireAuth> } />
        </Routes>        
        
    )
}