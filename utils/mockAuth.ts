import { useAuth, User } from '../contexts/AuthContext';


const { handleLogin } = useAuth();
const onSubmit = async (formData: { username: string; password: string }) => {
  // Perform login API call or validation here
  const userData = loginAPI(formData);

if (userData !== null) {
    handleLogin(userData);
    // Redirect or perform other actions after successful login
  }
};

const mockLogin = (username: string) => {
  const users = [
    { name: 'user1' },
    { name: 'user2' },
    // Add more users as needed
  ];
  const user = users.find((u: { name: string; }) => u.name === username);
  return user || null;
};


function loginAPI(formData: { username: string; password: string; }) {
    throw new Error('Function not implemented.');
}

export default mockLogin