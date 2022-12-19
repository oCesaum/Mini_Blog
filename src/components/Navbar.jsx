import '../App.css';

import { useAuthentication } from '../hooks/useAuthentication';

import { useAuthValue } from '../context/AuthContext';

import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();
  
  return (
    <nav className="navbar">
      <NavLink to="/" className={(isActive) => isActive ? "brand" : "brand"}>
        Login <span>Page</span>
      </NavLink>

      <ul className="links_list">
        <li>
          <NavLink to="/" end>Home</NavLink>
        </li>
        {!user &&
          <>
            <li>
              <NavLink to="/login">Entrar</NavLink>
            </li>
            <li>
              <NavLink to="/register">Cadastrar</NavLink>
            </li>
          </>
        }
        {user && 
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        }
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
        {user && (
          <li>
          <button onClick={logout}>Sair</button>
        </li>
        )}
      </ul>
    </nav>
  )
}