import { useState } from "react";
import Home from './routes/home/home.component';
import { Routes, Route } from "react-router-dom";
import Navigation from './routes/navigation/Navigation.component';
import SignIn from './routes/sign-in/Sign-in.component';

const Shop = () => {
  return <h1>Shop</h1>;
}


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </ Route>
    </Routes>
  )

  

};

export default App;
