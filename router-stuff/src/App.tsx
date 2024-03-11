import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './routes/Error';
import Root from './routes/Root';
import Rounds from './routes/Rounds';

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: Root,
      errorElement: (
        <>
          <Error />
        </>
      ),
      children: [
        {
          path: 'season/:season',
          Component: Rounds,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
