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
    <div className="flex flex-col items-center p-12">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
