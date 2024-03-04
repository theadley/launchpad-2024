import { useEffect, useState } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const EffectDemo = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    console.log('Component mounted');

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json: Post[]) => setPosts(json));

    return () => {
      console.log('Component unmounted');
    };
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default EffectDemo;
