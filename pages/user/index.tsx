import { withAuth } from '../../components/WithAuth';

const UserPage = () => {
  return (
    <div>
      <h2>User Dashboard</h2>
      <section className="grid h-screen place-items-center">
              <div >
                  <p>You do not have permission to view this page!</p>
              </div>
          </section>
    </div>
  );
};

export default withAuth(UserPage);