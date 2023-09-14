import { useState } from "react";
import Home from './routes/home/home.component';
import { Routes, Route } from "react-router-dom";
import Navigation from './routes/navigation/Navigation.component';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
      </ Route>
    </Routes>
  )

  

};

export default App;
