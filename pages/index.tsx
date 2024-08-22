import Link from 'next/link';
import "../styles/global.css"
const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <button className="btn btn-blue">
  Button
</button>
      <Link href="/settings">
        Go to Settings
      </Link>
    </div>
  );
};

export default HomePage;