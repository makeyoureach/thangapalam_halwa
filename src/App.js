import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
  return (
    <div className="App">
    <RouterProvider  router={router}/>
    </div>
  );
}

export default App;
