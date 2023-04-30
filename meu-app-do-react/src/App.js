import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './views/Login';
import Register from './views/Register';
import User from './views/User';
import PrivateRoutes from "./utils/PrivateRoutes";


function App() {
  return (
    <Router>
    <Routes>
      <Route element={<PrivateRoutes/>}>
          <Route path='/user' element={<User/>} />
      </Route>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
</Router>
  );
}

export default App;
