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
    endScroll : 700
}

export default function ExampleApple(){
    return (
        
        <div  style={{backgroundColor:'black',position:"absolute",top:'0',left:'0',right:'0'}}>
            
            <div style={{backgroundColor:'black',padding:'100px',margin:'50px'}} />
            
            <div>
            
                <Parallax scale={[3,5]} translateY={[10,-20]}  {...commonParallaxProps} opacity={[0.5,1]}>
                    <h2 className={styles.gradientText}>IPHONE 14</h2>
                </Parallax>

                <div style={{backgroundColor:'black',padding:'5px',margin:'25px'}}></div>

                <Parallax {...commonParallaxProps} >
                    <img src={P5} style={{width:'800px'}} />
                </Parallax>
                
            </div>
            <div style={{backgroundColor:'black',padding:'10px',margin:'10px'}} />

            <div className={styles.flex} style={{justifyContent: 'center', alignItems: 'center',backgroundColor:'#161617'}}>
                <div style={{backgroundColor:'#161617',padding:'5px',margin:'10px'}} />
                <div style={{backgroundColor:'#161617',padding:'5px',margin:'10px'}} />
            </div>

            <div className={styles.flex} style={{justifyContent: 'center', alignItems: 'center',backgroundColor:'#161617'}}>
                {/* Dynamic Island. */}
                <Parallax {...commonParallaxProps}>
                    <div className={styles.background} >
                        <Parallax {...commonParallaxProps}>
                            <h3 className={styles.gradientText} >Dynamic Island.</h3>
                        </Parallax>
                        <Parallax translateY={[20,5]} {...commonParallaxProps} startScroll={250}>
                            <img src={P0} alt="iphone14" className={styles.image} style={{width:'300px'}}/>
                        </Parallax>
                    </div>
                </Parallax>

                {/* Dynamic Island right. */}
                <Parallax {...commonParallaxProps}>
                <div >
                    {/* Iphone14 Core */}
                    <Parallax translateX={[40,0]} {...commonParallaxProps}>
                        <div className={styles.background} style={{padding: '15px',margin:'10px'}}>
                            <Parallax {...commonParallaxProps}>
                                <h3 className={styles.gradientText} style={{textAlign: 'left'}}>The mastermind </h3>
                                <h5 className={styles.gradientText} style={{textAlign: 'left'}}>behind it all.</h5>
                            </Parallax>
                            <Parallax translateY={[-40,-40]} translateX={[35,25]} scale = {[2,2]} {...commonParallaxProps}>
                                <img src={P1} alt="iphone14Core" className={styles.image} style={{width:'60px'}}/>
                            </Parallax>
                        </div>
                    </Parallax>

                    {/* Iphone14 Screen Size */}
                    <Parallax translateX={[40,0]} translateY={[40,0]}{...commonParallaxProps}>
                        <div className={styles.background} style={{padding: '15px',margin:'10px'}}>
                            <Parallax {...commonParallaxProps}>
                                <h3 className={styles.gradientText} style={{textAlign: 'left',margin:'10px'}}>You Like we all have</h3>

                            </Parallax>
                            <Parallax {...commonParallaxProps}>
                                <img src={P2} alt="iphone14P2" className={styles.image} style={{width:'300px'}}/>
                            </Parallax>
                        </div>
                    </Parallax>
                </div>
                </Parallax>
                
            </div>
            
            <div className={styles.flex} style={{justifyContent: 'center', alignItems: 'center',backgroundColor:'#161617'}}>

                    <Parallax translateX={[-30,0]} translateY={[30,0]} {...commonParallaxProps1}>
                        <div className={styles.background} style={{paddingTop:'60px',paddingBottom:'60px',paddingLeft:'25px'}}> 
                            <Parallax {...commonParallaxProps1}>
                            <h3 className={styles.gradientText} style={{textAlign: 'left', margin:'10px',fontSize:'24px'}}>A battery that's</h3>
                            <h1 className={styles.gradientText} style={{textAlign: 'left', margin:'10px',fontSize:'48px'}}>all in,</h1>
                            <h1 className={styles.gradientText} style={{textAlign: 'left', margin:'10px',textAlign:'right',fontSize:'48px'}}>  all day</h1>
                            </Parallax>
                        </div>
                    </Parallax>
                    <Parallax translateX={[30,0]} translateY={[30,0]} {...commonParallaxProps1}>
                        
                        <div className={styles.background}> 
                            <Parallax {...commonParallaxProps1}>
                                <h3 className={styles.gradientText} style={{textAlign: 'left', margin:'10px',fontSize:'24px'}}>A camera in a class by itself.</h3>
                            </Parallax>
                            <Parallax translateY={[20,5]} {...commonParallaxProps1}>
                                <img src={p7} alt="iphone14camera" className={styles.image} style={{width:'390px'}}/>
                            </Parallax>
                        </div>
                    </Parallax>
            </div>
            <div style={{backgroundColor:'#161617',padding:'50px',margin:'0'}} />
            <div style={{backgroundColor:'#161617'}}>
                <Parallax opacity={[0,1]} startScroll={800} endScroll={1100}>
                    <span style={{backgroundColor:'#161617', color:'white',fontSize:'50px',fontWeight:'700'}}>Ways to save on iPhone.</span>
                </Parallax>
            </div>
            <div className={styles.flex} style={{justifyContent: 'center', alignItems: 'center',backgroundColor:'#161617'}}>
                <Parallax translateY={[20,0]}>
                    <div className={styles.background} style={{paddingTop:'30px',paddingBottom:'90px',paddingLeft:'25px',width:'175px',height:'100px'}}> 
                        <Parallax {...commonParallaxProps1}>
                        <img src={P8} style={{float:'left',maxWidth:'40px'}}/>
                        <br />
                        <br />
                        <h3 className={styles.gradientText1}>Trade in your</h3>
                        <h3 className={styles.gradientText1}>current phone for</h3>
                        <h3 className={styles.gradientText1}>credit toward</h3>
                        <h3 className={styles.gradientText1}>iPhone 14 Pro.</h3>
                        <p className={styles.gradientText1} style={{fontSize:'10px',marginTop:'7px'}}>Get $200–$600 in credit when </p>
                        <p className={styles.gradientText1} style={{fontSize:'10px'}}>you trade in iPhone 11 or higher.1</p>
                        
                        </Parallax>
                    </div>
                </Parallax>
                <Parallax translateY={[20,0]}>
                    <div className={styles.background} style={{paddingTop:'30px',paddingBottom:'90px',paddingLeft:'25px',width:'180px',height:'100px'}}> 
                        <Parallax {...commonParallaxProps1}>
                        <img src={P9} style={{float:'left',maxWidth:'40px'}}/>
                        <br />
                        <br />
                        <h3 className={styles.gradientText1}>Save up to $800</h3>
                        <h3 className={styles.gradientText1}>on iPhone 14 Pro</h3>
                        <h3 className={styles.gradientText1}>with carrier deals</h3>
                        <h3 className={styles.gradientText1}>at Apple.</h3>
                        <p className={styles.gradientText1} style={{fontSize:'10px'}}>Get the latest iPhone for less.8 </p>
                        
                        
                        </Parallax>
                    </div>
                </Parallax>
                <Parallax translateY={[20,0]}>
                    <div className={styles.background} style={{paddingTop:'30px',paddingBottom:'90px',paddingLeft:'25px',width:'175px',height:'100px'}}> 
                        <Parallax {...commonParallaxProps1}>
                        <img src={P10} style={{float:'left',maxWidth:'40px'}}/>
                        <br />
                        <br />
                        <h3 className={styles.gradientText1}>Pay 0% APR over</h3>
                        <h3 className={styles.gradientText1}>24 months with</h3>
                        <h3 className={styles.gradientText1}>Apple Card.</h3>
                        <p className={styles.gradientText1} style={{fontSize:'10px'}}>Choose Apple Card </p>
                        <p className={styles.gradientText1} style={{fontSize:'10px'}}>Monthly Installments </p>
                        <p className={styles.gradientText1} style={{fontSize:'10px'}}>when you check out. </p>
                        
                        </Parallax>
                    </div>
                </Parallax>
            </div>
            <div style={{backgroundColor:'#161617',padding:'100px',margin:'0'}} />
        </div>
        
    )
}