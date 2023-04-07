import { useParallax } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import styles from './helloworld.module.css';

const Component_helloWorld = () => {
    const { ref } = useParallax({ speed: 20 });
    return <div ref={ref} className="my-thing" style={{color:'red'}}><h1>Hello World</h1></div> 
};

const Component_helloWorld_Parallax_y = () => (
  
  <Parallax translateY={[-150, 150]}>
    <div className="my-thing" style={{color:'blue'}}><h1>Hello World</h1></div> 
  </Parallax>
);

const Component_helloWorld_Parallax_x = () => (
  
  <Parallax translateX={['-100px', '100px']}>
    <div className="my-thing" style={{color:'yellow'}}><h1>Hello World</h1></div> 
  </Parallax>
);


export default function HelloWorld(){

    

    return (
      <div>
        <div className={styles.container}>
        <h1>Simple move effect</h1>
        <h2><span style={{color:'red'}}>Red HelloWorld</span>: Use hook implement simply speed up (or slowdown)</h2>
        <h2><span style={{color:'blue'}}>Blue HelloWorld</span>: Use component transform the element on Y axis</h2>
        <h2><span style={{color:'yellow'}}>Blue HelloWorld</span>: Use component transform the element on X axis </h2>
        </div>
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
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <Component_helloWorld />
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
        <h1>Hello World</h1>
        <Component_helloWorld_Parallax_y />
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
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <Component_helloWorld_Parallax_x />
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
        <h1>Hello World</h1>
        <h1>Hello World</h1>
      </div>
    )
}