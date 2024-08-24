import { useAuth } from '../contexts/AuthContext';
// import { mockLogin } from '../utils/mockAuth';
import { useRouter } from 'next/router';

 const Login = () => {
    const { handleLogin } = useAuth();

   

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => handleLogin("Admin User")}>Login as Admin</button>
      <br/>
      <button onClick={() => handleLogin("Regular User")}>Login as Regular User</button>
    </div>
  );
};

export default Login