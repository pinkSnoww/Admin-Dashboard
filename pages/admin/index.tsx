import { withAuth } from '../../components/WithAuth';

const AdminPage = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* Add your admin page content here */}
    </div>
  );
};

export default withAuth(AdminPage, true);