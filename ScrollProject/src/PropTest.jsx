import { Parallax } from "react-scroll-parallax";
import { useParallax } from 'react-scroll-parallax';
import { ParallaxBanner } from "react-scroll-parallax";
import comp from './images/COM732.jpg';
import PropP1 from './images/PropTest1.png';
import PropP2 from './images/PropTest2.png';
import './index.css'

// Implement by hook
const Test_useParallax = () => {
    const { ref } = useParallax({translateY : [-100, 100],translateX : [-50,50] });
    return <div ref={ref}  style={{color:'red'}}><h1>PropTest PropTest</h1></div> 
};

// Implement by component
const Test_Parallax = () => (
  
    <Parallax translateY={[-100, 100]} translateX={[-50, 50]}>
      <div style={{color:'blue'}}><h1>PropTest PropTest</h1></div> 
    </Parallax>
);

const Test_ParallaxBanner = () =>(
    <ParallaxBanner layers={[{speed: -10,image: comp,amount: 3}]} style={{height: '50px',maxWidth: '500px',margin: '0 auto'}}>
    </ParallaxBanner>
    
);


export default function PropTest(){
    return (
        <div>
            <div className="container">
            <h1 >Explanation of the moving process</h1>
            <img src={PropP1} alt="Explain moved" style={{ maxWidth: '500px' }} />
            </div>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <Test_useParallax />
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <Test_Parallax />
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <div className="container">
            <h1 >Explanation of the moving picture</h1>
            <img src={PropP2} alt="Explain moved" style={{ maxWidth: '500px' }} />
            </div>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <Test_ParallaxBanner />
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            <h1>PropTest PropTest</h1>
            
        </div>
    )
}