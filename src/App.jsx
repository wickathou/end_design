import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
]);

function App() {
  return (
    <div className="flex flex-col items-center gap-8 p-12 bg-black">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
