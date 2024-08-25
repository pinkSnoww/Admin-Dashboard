
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Login = () => {
  const { handleLogin } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState('');

  const login = (role: string) => {
    handleLogin({ name: username, role });
    router.push(role === 'admin' ? '/settings' : '/user');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <div className="flex flex-col items-center">
        
          <button  onClick={() => login('admin')}
                            className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                            <div className="bg-white p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

                            </div>
                            <span className="ml-4">
                               Admin LogIn
                            </span>
                        </button>
         
          <button
         onClick={() => login('user')}
                            className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                            <div className="bg-white p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

                            </div>
                            <span className="ml-4">
                              User LogIn 
                            </span>
                        </button>
        </div>
        
      </div>
    </div>
  );
};

export default Login;