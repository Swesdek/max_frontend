import RegisterPage from "./registerPage";
import LoginPage from "./loginPage";
import {Routes, Route} from 'react-router-dom'
import ky from 'ky'

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
    </>
  );
}

export default App;
