// /pages/list.tsx
import { useQuery } from '@tanstack/react-query';
import { Menu } from '../components/Menu';

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const list: React.FC = () => {
  const { data: posts, isLoading, error } = useQuery<Post[], Error>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <Menu isSettingAllowed={false} />
      <h1 className="text-2xl font-bold mb-4">Posts List</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.id} className="mb-2">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default list;