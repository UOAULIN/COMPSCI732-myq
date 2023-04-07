import { Parallax } from "react-scroll-parallax";
import { useParallax } from 'react-scroll-parallax';  
import { useEffect } from 'react';
import { useParallaxController ,ParallaxBanner} from 'react-scroll-parallax';
import styles from './ExampleTree.module.css';
import P0 from './images/ExampleT/P0.png';
import P1 from './images/ExampleT/P1.png';
import P2 from './images/ExampleT/P2.png';
import P3 from './images/ExampleT/P3.png';
import P4 from './images/ExampleT/P4.png';
import P5 from './images/ExampleT/P5.png';
import P6 from './images/ExampleT/P6.png';
import P7 from './images/ExampleT/P7.png';
import P8 from './images/ExampleT/P8.png';
import PTree from './images/ExampleT/ExampleTree.png';
import './ExampleTree.module.css';

const Test_ParallaxBanner = () =>(
    <ParallaxBanner 
        layers={[
            {speed: 2,image: P0,   style:{position: "fixed",backgroundPosition: "bottom center",width:"100%"}},
            {speed: 5,image: P1,   style:{position: "fixed",backgroundPosition: "bottom center",width:"100%"}},
            {speed: 11,image: P2,  style:{position: "fixed",backgroundPosition: "bottom center",width:"100%"}},
            {speed: 16,image: P3,  style:{position: "fixed",backgroundPosition: "bottom center",width:"100%"}},
            {speed: 26,image: P4,  style:{position: "fixed",backgroundPosition: "bottom center",width:"100%"}},
            {speed: 36,image: P5,  style:{position: "fixed",backgroundPosition: "bottom center",width:"100%"}},
            {speed: 49,image: P6,  style:{position: "fixed",backgroundPosition: "bottom center",width:"100%"}},
            {speed: 69,image: P7,  style:{position: "fixed",backgroundPosition: "bottom center",width:"100%"}},
            {speed: 100,image: P8, style:{position: "fixed",backgroundPosition: "bottom center",width:"100%"}}
        ]} 
        style={{height: '100vh', zIndex: '-1'}}>
    </ParallaxBanner>
    
);


export default function ExampleTree(){

    return (
        <div className={styles.container}>
            <Test_ParallaxBanner />
            <div style={{height: '100vh'}}></div>
            <h1 style={{color: "white"}}>Implement it!!!</h1>
            <img src={PTree} className={styles.image} />
            <div style={{height: '30vh'}}></div>
        </div>
    )
}