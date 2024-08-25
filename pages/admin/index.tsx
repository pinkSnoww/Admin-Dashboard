import { withAuth } from '../../components/WithAuth';

const AdminPage = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      
    </div>
  );
};

export default withAuth(AdminPage, true);