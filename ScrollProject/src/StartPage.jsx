import { Route, Routes, useLocation, Link } from 'react-router-dom';
import styles from './StartPage.module.css';
import { Parallax } from 'react-scroll-parallax';

export default function StartPage(){
    return (
        <div style={{backgroundColor:'black',position:"absolute",top:'0',left:'0',right:'0'}}>
            <div>
                <h2 style={{color:'white'}}>First Part: Tutorial-style simple examples</h2>
                <div>
                    <Link to='/helloworld' className={styles.Link}>Helloworld</Link>
                    <span className={styles.span} style={{paddingRight:'90px',paddingLeft:'90px'}}>It's an easy start.</span>
                </div>
                <div>
                    <Link to='/ParaRouteTest' className={styles.Link}>ParaRouteTest</Link>
                    <span className={styles.span} style={{paddingRight:'23px',paddingLeft:'22px'}}>Parallax Props implementations.</span>
                </div>
                {/* <div>
                    <Link to='/ParaRouteTest/1' className={styles.Link}>Hook</Link>
                    <span className={styles.span} style={{paddingRight:'96px',paddingLeft:'96px'}}>Hook implement Img.</span>
                </div> */}
                <div>
                    <Link to='/PropTest' className={styles.Link}>Prop</Link>
                    <span className={styles.span} style={{paddingRight:'97px',paddingLeft:'97px'}}>Many different Props.</span>
                </div>
                <div>
                    <Link to='/ConfigProps' className={styles.Link}>Prop1</Link> 
                    <span className={styles.span} style={{paddingRight:'123px',paddingLeft:'124px'}}>Config Props</span>   
                </div>
                <div>
                    <Link to='/CssEffects' className={styles.Link}>CssEffects</Link>
                    <span className={styles.span} style={{paddingRight:'59px',paddingLeft:'59px'}}>Many Parallax css Effects </span>
                </div>
            </div>

            <div>
                <h2 style={{color:'white'}}>Second part: Example implemented using parallax </h2>
                <div>
                    <Link to='/ExampleEasing' className={styles.Link}>Example1</Link>
                    <span className={styles.span} style={{paddingRight:'54px',paddingLeft:'54px'}}>Example about Easing effect</span>
                </div>
                <div>
                    <Link to='/ExampleTree' className={styles.Link}>Example2</Link>
                    <span className={styles.span} style={{paddingRight:'52px',paddingLeft:'51px'}}>Example about dynamic Tree </span>
                </div>
                <div>
                    <Link to='/ExampleApple' className={styles.Link}>Example3</Link>
                    <span className={styles.span} style={{paddingRight:'49px',paddingLeft:'49px'}}>Example about Apple website </span>
                </div>
            </div>
            <div style={{padding:'200px'}}>

            </div>
        </div>
        
    )
}