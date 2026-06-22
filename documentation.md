# MOJITOGSAP
 
this is choosen to strengthen my GSAP as well as REACT js
  
## App Setup

- first i setup the react environment

- now the most important library is GSAP

`npm install gsap @gsap/react react-responsive`

`react-responsve`- used to make your `UI` responsive based on screen size, device type, or media queries.

now in `App.jsx`
```js
import gsap from 'gsap'

import { ScrollTrigger , SplitText} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText)
```
`ScrollTrigger` - for scroll base animation or triggering
`SplitText` - for text animation or text manipulation

- now for the CSS we are going to use `tailwind css` for inline CSS

- now making a **utility class** 

```js
@utility flex-center {

@apply flex justify-center items-center;

}
```

