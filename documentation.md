# Project Setup

This project was chosen to strengthen my skills in both **GSAP** and **React.js**.

## App Setup

* First, I set up the React environment.
* The primary animation library used in this project is **GSAP**.

### Install Dependencies

```bash
npm install gsap @gsap/react react-responsive
```

## Libraries Used

### GSAP

GSAP (GreenSock Animation Platform) is a powerful JavaScript animation library used to create high-performance animations.

In `App.jsx`:

```js
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);
```

#### ScrollTrigger

Used to trigger animations based on scroll position and create scroll-driven animations.

#### SplitText

Used to split text into characters, words, or lines, making advanced text animations easier to create.

---

### react-responsive

Used to make the UI responsive based on screen size, device type, or media queries. It allows components to be conditionally rendered according to the user's device or viewport size.

---

## Styling

This project uses **Tailwind CSS**, a utility-first CSS framework that enables rapid UI development by applying utility classes directly within JSX.

---

## Custom Utility Class

To avoid repeating commonly used Flexbox styles, a custom utility class is created:

```css
@utility flex-center {
  @apply flex justify-center items-center;
}
```

### flex-center

This utility class centers content both horizontally and vertically using Flexbox.

* `flex` → Enables Flexbox layout.
* `justify-center` → Centers items horizontally.
* `items-center` → Centers items vertically.

This helps keep the code clean and improves reusability throughout the project.
