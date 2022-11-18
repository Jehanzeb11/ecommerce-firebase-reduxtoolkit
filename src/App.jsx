import CardCmp from "./components/materialUiComponents/CardCmp"
import Cart from './components/Cart';
import Login from './screens/Login';
import {Routes , Route} from "react-router-dom"
import ProtectedRoutes from "./ProtectedRoutes"
import Signup from "./screens/Signup"

function App() {
  return (
    <>
    <Routes>

  <Route path='/' element={<Login/>}/>  
  <Route path='/signup' element={<Signup/>}/>  

<Route element={<ProtectedRoutes/>}>

  <Route path='/card' element={<CardCmp />}/> 
   
   <Route path='/cart' element={<Cart/>} />
   
   </Route>
   </Routes>
    </>
  );
}

export default App;
