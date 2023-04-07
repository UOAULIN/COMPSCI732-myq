import { Parallax } from "react-scroll-parallax";
import { useParallax, ParallaxBanner, ParallaxProvider} from 'react-scroll-parallax';
import styles from "./CssEffects.module.css";
import COM732 from "./images/COM732.jpg";
import ImgTranslateX from "./images/CssEffects1.png";
import ImgTranslateY from "./images/CssEffects2.png";
import ImgRotate from "./images/CssEffects3.png";
import ImgScale from "./images/CssEffects4.png";
import ImgScaleX from "./images/CssEffects5.png";
import ImgScaleY from "./images/CssEffects6.png";
import ImgOpacity from "./images/CssEffects7.png";

export default function CssEffects(){
    return (
        <ParallaxProvider>
            <div className={"Translate"}>
                <div className={styles.container}>
                    <h1>TranslateX</h1>
                    <img src = {ImgTranslateX} alt="TranslateX" className={styles.image}/>
                </div>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <Parallax translateX={[-100, 100]} >
                    <div style={{color:'blue'}}><h1>EffectTest EffectTest</h1></div> 
                </Parallax>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <div className={styles.container}>
                    <h1>TranslateY</h1>
                    <img src = {ImgTranslateY} alt="TranslateY" className={styles.image}/>
                </div>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <Parallax translateY={[-100, 100]} >
                    <div style={{color:'blue'}}><h1>EffectTest EffectTest</h1></div> 
                </Parallax>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
            </div>
            <div className={"Rotate"}>
                <div className={styles.container}>
                    <h1>Rotate</h1>
                    <img src = {ImgRotate} alt="Rotate" className={styles.image}/>
                </div>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <Parallax rotate={[-360,360]}>
                    <div style={{color:'blue'}}><h1>rotate rotate rotate rotate</h1></div> 
                </Parallax>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <Parallax rotateX={[-720,720]}>
                    <div style={{color:'blue'}}><h1>rotateX rotateX rotateX</h1></div> 
                </Parallax>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <Parallax rotateY={[-720,720]}>
                    <div style={{color:'blue'}}><h1>rotateY rotateY rotateY</h1></div> 
                </Parallax>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <Parallax rotateZ={[-720,720]}>
                    <div style={{color:'blue'}}><h1>rotateZ rotateZ rotateZ</h1></div> 
                </Parallax>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
            </div>
            <div className={"Scale"}>
                <div className={styles.container}>
                    <h1>Scale</h1>
                    <img src = {ImgScale} alt="Scale" className={styles.image}/>
                </div>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <Parallax scale={[0.5,1.5]}>
                    <div style={{color:'blue'}}><h1>scale scale scale</h1></div> 
                </Parallax>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <div className={styles.container}>
                    <h1>ScaleX</h1>
                    <img src = {ImgScaleX} alt="ScaleX" className={styles.image}/>
                </div>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <Parallax scaleX={[0.5,1.5]}>
                    <div style={{color:'blue'}}><h1>scaleX scaleX scaleX</h1></div> 
                </Parallax>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <div className={styles.container}>
                    <h1>ScaleY</h1>
                    <img src = {ImgScaleY} alt="ScaleY" className={styles.image}/>
                </div>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <Parallax scaleY={[0.5,4]}>
                    <div style={{color:'blue'}}><h1>scaleY scaleY scaleY</h1></div> 
                </Parallax>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>

                <Parallax scaleZ={20}>
                    <div style={{color:'blue'}}><h1>scaleZ scaleZ scaleZ</h1></div> 
                </Parallax>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
            </div>
            <div className={"opacity"}>
                <div className={styles.container}>
                    <h1>Opacity</h1>
                    <img src = {ImgOpacity} alt="Opacity" className={styles.image}/>
                </div>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <Parallax speed={5} opacity={[0.1,1]}>
                    <div style={{color:'blue'}}><h1>opacity opacity opacity</h1></div> 
                </Parallax>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
                <h1>EffectTest EffectTest</h1>
            </div>
        </ParallaxProvider>
    )
}