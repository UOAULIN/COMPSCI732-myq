import { Parallax } from "react-scroll-parallax";
import { useParallax } from 'react-scroll-parallax';  
import { useEffect } from 'react';
import { useParallaxController ,ParallaxBanner} from 'react-scroll-parallax';
import styles from './ExampleApple.module.css'
import P0 from './images/ExampleA/P0.png'
import P1 from './images/ExampleA/P4.jpg'
import P2 from './images/ExampleA/P2.png'
import P5 from './images/ExampleA/P6.png'
import p7 from './images/ExampleA/P7.png'
import P8 from './images/ExampleA/P8.png'
import P9 from './images/ExampleA/P9.png'
import P10 from './images/ExampleA/P10.png'

const commonParallaxProps = {
    endScroll: 400,
    startScroll: 0,
    opacity:[0,1]
};

const commonParallaxProps1={
    opacity:[0,1],
    startScroll : 300,
     endScroll : 1000
}

export default function MainTest(){
    return (
        
        <div>a</div>
        
    )
}