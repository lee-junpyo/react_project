import { useState } from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import Productpage from './page/Productpage';
import ProductDetailpage from './page/ProductDetailpage';
import LoginPage from './page/LoginPage';
import UserPage from "./page/UserPage";

//Navigate - 컴포넌트 useNavigate - react hook
function App() {
  const [authenticate, setAuthenticatte] = useState(true); //false 미로그인, true 로그인
  const PrivateRoute = () => {//컴포넌트임
    return authenticate == true ? <UserPage /> : <Navigate to={"/login"} />;
  };
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/products' element={<Productpage />} />
        <Route path='/products/:id' element={<ProductDetailpage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/user' element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
