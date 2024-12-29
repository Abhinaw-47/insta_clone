import Auth from "./component/Auth/Auth";

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./component/Home/Home";

import Imgform from "./component/CreatePost/Imgform";
import SignUp from "./component/SignUp/SignUp";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/auth"  element={<Auth />}/>
      <Route path="/auth/signup" element={<SignUp />}/>
      <Route path="/"  element={ <Home />}/>
      <Route path="/posts/create" element={<Imgform />} />
      
     
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
