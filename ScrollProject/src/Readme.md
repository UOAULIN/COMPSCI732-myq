Install React-route-dom
Install Three react-three-fiber
# Usage
## Install
1. Use npm install
	- Code 
	```shell
	npm install react-scroll-parallax
	```
    
2. Use yarn install 
	- Code
	```shell
	yarn add react-scroll-parallax
	```

## Example

1. Create effect with a hook 
```jsx
function Component() {  
	const parallax = useParallax({  
	speed: -10,  
	});  
	return <div ref={parallax.ref} />;  
}
```
2. Create effect with a component
```jsx
function Component() {  
	return (  
		<Parallax speed={-10}>  
		<div />  
		</Parallax>  
	);  
}
```

## Getting Started 

## Usage 

### First Step
1. Wrap with a ParallaxProvider -- Such as ```<BrowserRouter>``` in lab02
2. Hint: You need import ParallaxProvider First
3. Code:
```jsx
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
	return (
		<ParallaxProvider>
			<AppRoutes />
		</ParallaxProvider>
	);
}
```
	
### Next: Create effects

1. After wrapping the app with a provider you can start adding parallax effects.
2.  With useParallax()
	-  Hint: You need import useParallax
	-  After import you can use useParallax anywhere within the provider. Here's an example that uses the ```speed``` prop so simple speed up or slowdown the rate of scroll
	- Code:
	```jsx
	import { useParallax } from 'react-scroll-parallax';
	const Component_helloWorld = () => {
	    const { ref } = useParallax({ speed: 20 });
	    //The hook will apply the effect styles directly to the element that the `ref` is attached.
	    return <div ref={ref} className="my-thing" style={{color:'red'}}><h1>Hello World</h1></div> ;
	};
	```
	- Code Name: HelloWorld.jsx
3. Or with ```<Parallax>```
	- You can also use the ```<Parallax>``` component. Here's an example that will transform the element on the ```translateY``` axis starting at ```-20%``` and ending at ```20%``` (```[-150, 150]``` *percent is assumed with no provided unit). 
	- Code:
	```jsx
	import { Parallax } from 'react-scroll-parallax';
	const Component_helloWorld_Parallax = () => (
		<Parallax translateY={[-150, 150]}>
	    <div className="my-thing" style={{color:'blue'}}><h1>Hello World</h1></div>
		</Parallax>
	);
	```
	- Use the ```translateX``` transform staring at -100px and ending at 200px
	- Code:
	```jsx
	import { Parallax } from 'react-scroll-parallax';
	const Component_helloWorld_Parallax = () => (
		<Parallax translateX={['-100px', '200px']}>
	    <div className="my-thing" style={{color:'blue'}}><h1>Hello World</h1></div>
		</Parallax>
	);
	```
	- File Name: HelloWorld.jsx

## Updating the Cache

1. Performance relies on caching values that cause layout, but this cache needs to be updated if the page layout changes from an event other than a ```load```, ```resize```, ```focus``` or ```blur```.

## Route Changes

1. Depending on your app setup, you may need to update the ```Parallax Controller``` cache when the route changes since scroll and page height change. Here's a component and hook written for Gatsby that will update the controller via context whenever the location changes.
2. Code in App:
```jsx
import { useEffect } from 'react';  
import { useLocation } from 'react-router-dom';  
// In React old version 
// import useLocation from '@reach/router'
import { useParallaxController } from 'react-scroll-parallax';

function useUpdateControllerOnRouteChange() {
  const location = useLocation();
  const parallaxController = useParallaxController();
  useEffect(() => {parallaxController.update();}, [location.pathname]);
}
export const ParallaxRouteUpdate = () => {
  useUpdateControllerOnRouteChange();
  return null;
};
```
3. Code in component:
```jsx
import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import {ParallaxRouteUpdate} from './App';

export default function ParaRouteTest() {
  ParallaxRouteUpdate();
  return (
    <ParallaxProvider>
	    <Parallax translateY = {[-200,200]}>
	        <h1>Test1</h1>
	    </Parallax>
    </ParallaxProvider>
   );
}
```
4. File Name: App.jsx , ParaRouteTest.jsx

## Images Loading

1. Often times images impact the position of content on the page. This is another common scenario that will require updating the cache which can be done using an ```onLoad``` event.
2. Code:
```jsx
import { useParallaxController } from 'react-scroll-parallax';  
  
const Image = () => {  
	const parallaxController = useParallaxController();  
	return <img src="image.jpg" onLoad={() => parallaxController.update()} />;  
};
```
3. Example
```jsx
// ParaRouTest1
import { useParallaxController } from 'react-scroll-parallax';
import COM732 from './images/COM732.jpg'
export default function ParaRouteTest1(){
    const Image = () => {
        const parallaxController = useParallaxController();
        return <img src= {COM732} onLoad={() => parallaxController.update()} />;
    }
    return (
        <div>{Image()}</div>
    )
}
```

# Props
## Parallax Props

1. The following hooks and components accept the parallax prop configurations that setup scroll effects in the ```Parallax Controller```
2. Example1: ```useParallax()```
```jsx
useParallax({  
	speed: -10,  
	...props,  
});
```
3. Example2: ```<Parallax />```
```jsx
<Parallax speed={-10} {...props} />
```
4. Example3: ```<ParallaxBanner />```
```jsx
<Parallax layers={[{  speed: -10,  ...props,  },  ]}  />
```
5. Code Name: `PropTest.jsx`

## Configuration Props

1. Name: `Speed`   Type: `number`
	- Description: A value representing the elements scroll speed. If less than zero scroll will appear slower. If greater than zero scroll will appear faster.
	- Example:
	```jsx
	<Parallax speed={15}>
	```
2. Name: `easing`  Type: `string` or `number[]`
	- Description: String representing an `easing preset` or array of params to supply to a `cubic bezier easing function`.
	- Example: 
	```jsx
	<Parallax translateY={[-100, 100]} easing="easeOutQuad">
	```
3. Name: `rootMargin` Type: `object`
	-  Description: Margin to be applied as the bounds around an element. This will affect when an element is determined to be in the viewport. 
	-  Example: `{ top: 100, right: 100, bottom: 100, left: 100 }`
4. Name: `disabled`  Type: `boolean`  Default: `false`
	-  Description: Disables parallax effects on individual elements when  `true`.
	-  Explain: When set to `true`, the component will not respond to mouse or touch events
	-  Example: 
	```jsx
	// This Parallax not respond to mouse
	<Parallax speed={15} disabled>
	```
5. Name: `shouldAlwaysCompleteAnimation` Type: `boolean`  Default: `false`
	-  Description: Always start and end animations at the given effect values - if the element is positioned inside the view when scroll is at zero or ends in view at final scroll position, the initial and final positions are used to determine progress instead of the scroll view size.
	-  Example:
	```jsx
	<Parallax speed={15} shouldAlwaysCompleteAnimation>
	```
6. Name: `shouldDisableScalingTranslations` Type: `boolean` Default: false
	-  Description: Enable scaling translations - translate effects that cause the element to appear in the view longer must be scaled up so that animation doesn't end early.
	- Example:
	```jsx
	<Parallax speed={15} shouldDisableScalingTranslations>
	```
7. Name: `startScroll` Type: `number` 
	- Description: Scroll top value to begin the animation. When provided along with `endScroll` relative scroll values will be ignored.
	- Example: 
	```jsx
	<Parallax translateY={[-100, 100]} startScroll={0.3}>
	```
8. Name: `endScroll` Type: `number`
	- Description: Scroll top value to end the animation. When provided along with `startScroll` relative scroll values will be ignored.
9. Name: `targetElement` Type: `HTMLElement`
	- Description: Provides an element to track and determine the scroll progress. Use when scroll progress should be independent of parallax element's original position. 
10. Code Name:  `ConfigProps.jsx`
## CSS Effect Props

1. All props for creating CSS effects are defined by a **start** and **end** value represented by an `array`.
2. Code: 
```jsx
useParallax({  translateY: [-100, 100],  });
```

## How Effects Progress

1. The **start** of an effect begins when the top of the element enters the bottom of the view.
2. The **end** of an effect begins when the bottom of the element exits the top of the view.

## Available CSS Effects

1. Name: `translateX` Type: `string[]` or `number[]`
	- Description: Start and end translation on x-axis in `%`, `px`, `vw` or `vh`. If no unit is passed percent is assumed. Percent is based on the elements width.
2. Name: `translateY` Type: `string[]` or `number[]`
	- Description: Start and end translation on y-axis in `%`, `px`, `vw` or `vh`. If no unit is passed percent is assumed. Percent is based on the elements height.
3. Name: `rotate` Type: `string[]` or `number[]`
	- Description: Start and end rotation on z-axis in `deg`, `rad`, or `turn`. If no unit is passed `deg` is assumed.
4. Name: `rotateX` Type: `string[]` or `number[]`
	- Description: Start and end rotation on x-axis in `deg`, `rad`, or `turn`. If no unit is passed `deg` is assumed.
5. Name: `rotateY`  Type: `string[]` or `number[]`
	- Description: Start and end rotation on y-axis in `deg`, `rad`, or `turn`. If no unit is passed `deg` is assumed
6. Name: `rotateZ` Type: `string[]` or `number[]`
	- Description: Start and end rotation on z-axis in `deg`, `rad`, or `turn`. If no unit is passed `deg` is assumed.
7. Name: `scale`  Type: `number[]`
	- Start and end scale on x-axis and y-axis.
8. Name: `scaleX` Type: `number[]`
	- Start and end scale on x-axis.
9. Name: `scaleY` Type: `number[]`
	- Start and end scale on y-axis.
10. Name: `scaleZ` Type: `number[]`
	- Start and end scale on z-axis.
11. Name: `opacity` Type: `number[]`
	- Start and end opacity value.

## Callback Props

1. Example using `onChange` callback
```jsx
useParallax({ onChange: (element) => console.log(element),  });
```
2. All available callbacks:
	- Name: `onProgressChange`  Type: `function`
		- Description: Callback for when the progress of an element in the viewport changes.
	- Name: `onChange` Type: `function`
		- Description: Callback for when the progress of an element in the viewport changes and includes the Element as a parameter
	- Name: `onEnter` Type: `function`
		- Callback for when an element enters the viewport.
	- Name: `onExit` Type: `function`
		- Callback for when an element exits the viewport.
3. Code Name: `CallBack.jsx`

## Easing Presets

1. Example of setting easing:
```jsx
useParallax({ easing: 'easeInCubic',  });
```
2. The following easing values are preset and can be used as easing
	- `ease`: This is the default value, and it starts slow, speeds up, then slows down again towards the end of the animation.
	- `easeIn`: This function starts slow and gradually increases in speed.
	- `easeOut`: This function starts fast and gradually slows down towards the end of the animation.
	- `easeInOut`: This function starts slow, speeds up in the middle, then slows down again towards the end of the animation.
	- `easeInQuad`: This function starts slow and gradually increases in speed with a quadratic curve.
	- `easeInCubic`: This function starts slow and gradually increases in speed with a cubic curve.
	- `easeInQuart`: This function starts slow and gradually increases in speed with a quartic curve.
	- `easeInQuint`: This function starts slow and gradually increases in speed with a quintic curve.
	- `easeInSine`: This function starts slow and gradually increases in speed with a sinusoidal curve.
	- `easeInExpo`: This function starts slow and gradually increases in speed with an exponential curve.
	- `easeInCirc`: This function starts slow and gradually increases in speed with a circular curve.
	- `easeOutQuad`: This function starts fast and gradually slows down towards the end of the animation with a quadratic curve.
	- `easeOutCubic`: This function starts fast and gradually slows down towards the end of the animation with a cubic curve.
	- `easeOutQuart`: This function starts fast and gradually slows down towards the end of the animation with a quartic curve.
	- `easeOutQuint`: This function starts fast and gradually slows down towards the end of the animation with a quintic curve.
	- `easeOutSine`: This function starts fast and gradually slows down towards the end of the animation with a sinusoidal curve.
	- `easeOutExpo`: This function starts fast and gradually slows down towards the end of the animation with an exponential curve.
	- `easeOutCirc`: This function starts fast and gradually slows down towards the end of the animation with a circular curve.
	- `easeInOutQuad`: This function starts slow, speeds up in the middle, then slows down again towards the end of the animation with a quadratic curve.
	- `easeInOutCubic`: This function starts slow, speeds up in the middle, then slows down again towards the end of the animation with a cubic curve.
	- `easeInOutQuart`: This function starts slow, speeds up in the middle, then slows down again towards the end of the animation with a quartic curve.
	- `easeInOutQuint`: This function starts slow, speeds up in the middle, then slows down again towards the end of the animation with a quintic curve.
	- `easeInOutSine`: This function starts slow, speeds up in the middle, then slows down again towards the end of the animation with a sinusoidal curve.
	- `easeInOutExpo`: This function starts slow, speeds up in the middle, then slows down again towards the end of the animation with an exponential curve.
	- `easeInOutCirc`: This function starts slow, speeds up in the middle, then slows down again towards the end of the animation with a circular curve.
	- `easeInBack`: This function starts slow and bounces back slightly before moving forward with a quadratic curve.
	- `easeOutBack`: This function starts fast and moves forward before bouncing back slightly towards the end of the animation with a quadratic curve.
	- `easeInOutBack`: This function starts slow, speeds up in the middle, then bounces back slightly towards the end of the animation with a quadratic curve.

## Easing Individual Effects

1. You can provide various easing values to each effect by defining it as the third element in the array
2. Code: 
```jsx
useParallax({  
  translateY: [-100, 100, 'easeInOut'],  
  scale: [0, 1, 'easeOutBack'],  
});
```

## Cubic Bezier Easing Function

1. Just like with CSS `cubic-bezier(0.2,-0.67,1,-0.62);`, you can supply the 4 params to a custom `bezier` function.
2. Code: 
```jsx
useParallax({
  translateY: [-100, 100],
  easing: [0.2, -0.6, 1, -0.6],
});
```

# Hooks

1. All provided React hooks.
```jsx
import { useParallax } from 'react-scroll-parallax';  
import { useParallaxController } from 'react-scroll-parallax';
```

## useParallax
1. Main hook for applying parallax effects to a DOM element. 
2. import 
```jsx
import { useParallax } from 'react-scroll-parallax';
```

### Example
1. To use the hook assign the `ref` returned to the element that you would like to apply effects to. Then provide the hook with the prop configuration for the effects you need.
2. Code:
```jsx
function Component() {  
	const { ref } = useParallax<HTMLDivElement>({ speed: 10 });  
	return <div ref={ref} />;  
}
```

### Returned Values
1. The `useParallax()` hook returns the following:
2. Value:
	- `ref `Description: `ref` that must be assigned to a DOM element
	- `cotroller` Description: The `ParallaxController` instance.
	- `element` Description: The `Element` created by the `ParallaxController`.

### useParallaxController

1. Description: This hook provides you access to the `ParallaxController` via `React context`. The hook must be called in a component rendered within the `<ParallaxProvider>`. The most common usage of the controller is to update cache if the page layout has changed.
2. import:
```jsx
import { useParallaxController } from 'react-scroll-parallax';
```

### Usage For Images

1. Updating the `ParallaxController` cache once an image loads:
2. Code:
```jsx
function Image(props) {  
	const parallaxController = useParallaxController();  
	// updates cached values after image dimensions have loaded  
	const handleLoad = () => parallaxController.update();  
	return <img src={props.src} onLoad={handleLoad} />;  
}
```

### Example Route Change Hook

1. Another common use case is the need to update cache after a route changes. This custom hook updates the controller each time the location changes.
2. Code:
```jsx
function useUpdateControllerOnRouteChange() {  
	const location = useLocation();  
	const parallaxController = useParallaxController();  
	  
	useEffect(() => { parallaxController.update(); }, [location.pathname]);  
}
```

# Components
1. All Provided React components
2. Code: 
```jsx
import { Parallax } from 'react-scroll-parallax';  
import { ParallaxBanner } from 'react-scroll-parallax';  
import { ParallaxProvider } from 'react-scroll-parallax';
```

## Parallax
1. The main component for applying scroll effects based on an elements position within the viewport.
2. Code:
```jsx
import { Parallax } from 'react-scroll-parallax';
```

### Props
All props to configure the parallax element, like CSS effects, are documented and managed by the `parallax-controller`.

### Non Parallax Props
1. All other non-parallax props will be passed through to the `<div>`. Example with `style` and `className`:
2. Code:
```jsx
<Parallax style={{ background: 'blue' }} className="test" />
<div style="background: blue" className="test"></div>
```

### Children
1. Children are also accepted and rendered
2. Code:
```jsx
<Parallax>  
	<h1>Hello</h1>  
</Parallax>
```

### Speed Control
1. The `speed` prop that will make an element's scroll speed appear to speed up or slow down. This is the simplest way to achieve a parallax effect.
2. Code:
```jsx
const SlowAndFast = () => (  
	<>  
		<Parallax speed={-5}>  
			<div className="slow" />  
		</Parallax>  
		<Parallax speed={5}>  
			<div className="fast" />  
		</Parallax>  
	</>  
);
```
3. Hint: The `speed` prop simplifies the application of a `translateX` or `translateY` effect based on the `ParallaxController` scroll axis

### Translate Controls
1. If you need more fine tune control of the scroll position you can apply start and end transforms more directly. In this example the element begins with a `translateY(-20%)` and ends with `translateY(10%)`
2. Code:
```jsx
onst TranslateY = () => (  
	<Parallax translateY={[-20, 10]}>  
		<div className="my-thing" />  
	</Parallax>  
);
```
3. Explain: Translate values without units default to `%` so `-20` becomes `-20%`.


## ParallaxProvider

1. The `<ParallaxProvider />` component is meant to wrap a root level component in your application and is necessary to provide access through the React context API to the Parallax Controller.
2. Code:
```jsx
import { ParallaxProvider } from 'react-scroll-parallax';
```

### Examples
1. This component should only be used once in your app, for instance in an `<AppContainer />` component that won't be mounted/unmounted during route changes. Like so:
2. Code: 
```jsx
const AppContainer = () => (  
	<ParallaxProvider>  
		<Router>  
			<App />  
		</Router>  
	</ParallaxProvider>  
);
```
3. Explain: You can have multiple providers, however they will all be independent instances of a `ParallaxController`. It's recommended to only use one when possible.

### Props
1. The following props configure the `<ParallaxProvider>` component:
2. Name: `scrollAxis` Type: `string` Default: `vertical`
	- Optionally pass the scroll axis for setting horizontal/vertical scrolling. One of `vertical` or `horizontal`
3. Name: `scrollContainer` Type: `HTMLElement` Default: `<body>`
	- Optionally set the container that has overflow and will contain parallax elements. Defaults to the document scroll body.

### Horizontal Scrolling
1. If your app's overflow is horizontal, you'll need to change the `scrollAxis`:
2. Code:
```jsx
const AppContainer = () => (  
	<ParallaxProvider scrollAxis="horizontal">  
		<Router>  
			<App />  
		</Router>  
	</ParallaxProvider>  
);
```

### Scroll Container
1. By default the `<ParallaxProvider>` uses the document scrolling element. If your app's overflow is a unique element you need to provide the element as the `scrollContainer`.
2. Here's how you can do that using React hooks to set a `ref` to a DOM element. The `useEffect` will be called once after mounting then update state with the element to be passed to the provider.
3. Code:
```jsx
import * as React from 'react';  
import { ParallaxProvider } from 'react-scroll-parallax';  
const ScrollContainer = () => {  
	const [scrollEl, setScrollElement] = React.useState<HTMLDivElement>(null);  
	const ref = React.useRef<HTMLDivElement>();  
	React.useEffect(() => {  
		setScrollElement(ref.current);  
	});  
  
	return (  
		<div className="your-scroll-container" ref={ref}>  
			<ParallaxProvider scrollContainer={scrollEl}>  
				{props.children}  
			</ParallaxProvider>  
		</div>  
	);  
};
```

## ParallaxBanner

1. Component that sets up layers of `useParallax` elements to achieve a parallaxing banner. Enables the layering of images, or custom markup, with scroll effects in a container that hides overflow.
2. Code:
```jsx
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
```

### Examples
1. There are two ways to setup a banner:
	- You can use the `<ParallaxBanner>` `layers` prop.
	- You can define `ParallaxBannerLayer` as the `<ParallaxBanner>` children.

### Example with the `ParallaxBannerLayer`
1. Use the `ParallaxBannerLayer` component to define the `speed` and `image` for your banner. In this case, it will create a banner using a single image, that moves slower than the rate of scroll, and the edges of the image will never be visible.
2. Code:
```jsx
<ParallaxBanner style={{ aspectRatio: '2 / 1' }}>  
<ParallaxBannerLayer image="https://foo.com/foo.jpg" speed={-20} />  
</ParallaxBanner>
```

### Example with the layers prop
1. Use the `layers` to supply a `speed` and `image` to your banner. In this case, it will create a banner using a single image, that moves slower than the rate of scroll, and the edges of the image will never be visible.
2. Code:
```jsx
<ParallaxBanner layers={[  
	{ image: 'https://foo.com/foo.jpg',  speed: -20,  },  
	]}  
	style={{ aspectRatio: '2 / 1' }}  
/>
```
3. CAUTION: You **must** define a style that gives the root `<div>` a `height` value otherwise the banner will have no height and be hidden. This can be through a `style`, through a `className`, or other method of styling.

### Creating Multiple Layers
1. Define multiple Banner layer children with independent prop configurations.
2. Code:
```jsx
<ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
  <ParallaxBannerLayer image="https://foo.com/foo.jpg" speed={-20} />
  <ParallaxBannerLayer image="https://foo.com/bar.jpg" speed={-10} />
</ParallaxBanner>
```
3. Supply the `layers` prop with additional configuration for more images. Each layer can contain unique configurations.
4. Code:
```jsx
<ParallaxBanner  
	layers={[
	{image: 'https://foo.com/foo.jpg', speed: -20,  },  
	{image: 'https://foo.com/bar.png', speed: -10,  },  
	]}  
	style={{ aspectRatio: '2 / 1' }}  
/>
```
5. CAUTION: **Layer order matters.** First element in the the array or children will appear on the bottom of the stacking context; last layer of the array or children will appear on top.

### Custom Layer Markup
1. This example defines a headline in the second layer.
2. Code:
```jsx
<ParallaxBanner style={{ aspectRatio: '2 / 1' }}>  
	<ParallaxBannerLayer image="https://foo.com/foo.jpg" speed={-20} />  
	<ParallaxBannerLayer>  
	<h1>My Headline</h1>  
	</ParallaxBannerLayer>  
</ParallaxBanner>
```
3. You can also pass your own markup or components to the `children` property when using `layers`.
4. Code:
```jsx
<ParallaxBanner  
	layers={[  
		{image: 'https://foo.com/foo.jpg',  speed: -20,  },  
		{children: <h1>My Headline</h1>,  speed: -10,  },  
	]}  
	style={{ aspectRatio: '2 / 1' }}  
/>
```

### Using a Custom Image Element

1. You don't need to use the `image` prop and can instead pass your own `img`, `picture`, `video` or custom image component. Use this if you need to use accessible images, custom image components, or other `img` attributes like `srcSet` or `loading`
2. Code:
```jsx
<ParallaxBanner style={{ aspectRatio: '2 / 1' }}>  
	<ParallaxBannerLayer speed={-20}>  
		<img src="https://foo.com/sahara.jpg"  alt="Sahara Desert landscape" loading="lazy" />  
	</ParallaxBannerLayer>  
</ParallaxBanner>
```

### Props
1. The following are all props that can be passed to the `<ParallaxBanner>` component:
2. Name: `disabled` Type: `boolean `
	- Description: Disables _all_ parallax layers when enabled.
3. Name: `layers` Type: `array`
	- Optional `array` of layers
4. Name: `...rest` Type: `HTMLDivElement`
	- All other properties are spread to the `<div>`
5. All other props are defined on the root `div` element.
```jsx
<ParallaxBanner className="custom-class" id="hero-banner" />
```

### Banner Layer Props

1. The `ParallaxBannerLayer` the following configuration as props.
2. The `layers` prop takes an array of objects that represent each image (or custom children) of the parallax banner. The following properties describe a layer object:
3. Name: `children` Type: `ReactElement`
	- Description: Custom layer children provided as a React element, for example `<Video />`
4. Name: `expanded` Type: `boolean` Default: `true`
	- Description: Indicate if the layer should be expanded with negative top/bottom margins so the edges will never be visible.
5. Name: `image` Type: string 
	- Description: Image source that will be applied as a CSS `background-image` on the layer set to `cover`
6. Name: `...rest` Type: `ParallaxElementConfig`
	- Description: All known parallax props will be passed to `useParallax`. All other properties are spread to the `<div>` representing the layer.

### Example Using `ParallaxBannerLayer`
```jsx
<ParallaxBanner>  
	<ParallaxBannerLayer  
		expanded={false}  
		speed={-10}  
		scale={[1, 1.2]}  
		opacity={[0.9, 1]}  > 		 
		<img src="foo" />  
	</ParallaxBannerLayer>  
</ParallaxBanner>
```

### Example Using the Layers Prop
```jsx
<ParallaxBanner  
	layers={[  
		{  
		children: <img src="foo" />,  
		expanded: false,  
		speed: -10,  
		scale: [1, 1.2],  
		opacity: [0.9, 1],  
		},  
	]}  
/>
```