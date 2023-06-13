//on créer notre premier composant (c'est une fonction).notre fonction va avoir le rôle de retourner une div, et notre div est envoyé dans root

import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        //path="*" fonctionne si l'url ne correspond à rien de déclaré au-dessus
        <Route path="*" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
