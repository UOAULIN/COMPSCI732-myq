import { useParallax } from 'react-scroll-parallax';  
import { useParallaxController } from 'react-scroll-parallax';

function Component() {  
	const { ref } = useParallax<HTMLDivElement>({ speed: 10 });  
	return <div ref={ref}>helloWorld</div>;  
}

export default function HooksExample(){
    return (
        <div>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            
            <Component />
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
        </div>
    );
}