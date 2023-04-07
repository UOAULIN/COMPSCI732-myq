import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import { useParallax, useParallaxController } from 'react-scroll-parallax';
import { Route, Routes, useLocation, Link } from 'react-router-dom';
import HelloWorld from './HelloWorld';
import ParaRouteTest from './ParaRouteTest';
import ParaRouteTest1 from './ParaRouteTest1';
import PropTest from './PropTest';
import ConfigProps from './ConfigProps';
import CssEffects from './CssEffects';
import ExampleTree from './ExampleTree';
import ExampleApple from './ExampleApple';
import ExampleEasing from './ExampleEasing';
import MainTest from './MainTest';
import StartPage from './StartPage';



function useUpdateControllerOnRouteChange() {
  const location = useLocation();
  const parallaxController = useParallaxController();

  useEffect(() => {parallaxController.update();}, [location.pathname]);
}

export const ParallaxRouteUpdate = () => {
  useUpdateControllerOnRouteChange();
  return null;
};

function App() {
  return (
    <div>
      <ParallaxProvider>
        <Routes>
          <Route path = "/" element = {<StartPage />}/>
          <Route path = "/helloworld" element = {<HelloWorld />} />
          <Route path = "/ParaRouteTest" element = {<ParaRouteTest />} />
          <Route path = "/ParaRouteTest/1" element = {<ParaRouteTest1 />} />
          <Route path = "/PropTest" element = {<PropTest />} />
          <Route path = "/ConfigProps" element = {<ConfigProps />} />
          <Route path = "/CssEffects" element = {<CssEffects />} />
          <Route path = "/ExampleTree" element = {<ExampleTree />} />
          <Route path = '/ExampleApple' element = {<ExampleApple />} />
          <Route path = '/ExampleEasing' element={<ExampleEasing />} />
          
          <Route path = '/MainTest' element = {<MainTest />} />
        </Routes>
      </ParallaxProvider>
    </div>
  );
}


export default App
