import { withAuth } from '../../components/WithAuth';

const UserPage = () => {
  return (
    <div>
      <h1>User Dashboard</h1>
      {/* Add your user page content here */}
    </div>
  );
};

export default withAuth(UserPage, true);