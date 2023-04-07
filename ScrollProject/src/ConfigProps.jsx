import { Parallax } from "react-scroll-parallax";
import { useParallax } from 'react-scroll-parallax';

// speed
const Configure_speed = () => (
    <Parallax speed={15}>
      <div style={{color:'blue'}}><h1>PropTest PropTest</h1></div> 
    </Parallax>
);

// easing
const Configure_easing = () => (
    <Parallax translateY={[-100, 100]} easing="easeOutQuad">
      <div style={{color:'blue'}}><h1>PropTest PropTest</h1></div> 
    </Parallax>
);

// Disabled speed
const Configure_Dis_speed = () => (
    <Parallax speed={15} disabled>
      <div style={{color:'blue'}}><h1>PropTest PropTest</h1></div> 
    </Parallax>
);

const Configure_startScroll = () => (
    <Parallax translateY={[-100, 100]} startScroll={0.7}>
      <div style={{color:'blue'}}><h1>PropTest PropTest</h1></div> 
    </Parallax>
);


export default function ConfigProps(){
    return (
        <div>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <Configure_speed />
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <Configure_easing />
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <Configure_Dis_speed />
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <Configure_startScroll />
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
        </div>
    )
}