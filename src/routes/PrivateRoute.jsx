import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const authToken = localStorage.getItem('authToken');  // Recupera o token de autenticação

  return (
    <>
      {authToken ? children : <Navigate to='/' />}
    </>
  )
}
