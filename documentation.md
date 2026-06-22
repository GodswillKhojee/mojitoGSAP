# MojitoGSAP

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

# Navigation Bar

Before creating the navigation bar, I created a `components` folder and added a `Navbar.jsx` file.

I also downloaded the required assets, including:

* Logo image for the navigation bar
* Hero section animations
* Custom fonts

## Constants Folder

Next, I created a `constants` folder to store reusable data used throughout the application.

This folder contains:

* Navigation links
* Cocktail list
* Mocktail list
* Profile data
* Other static content

## Navbar Structure

The navigation links are rendered dynamically using data imported from the `constants` folder.

```jsx
return (
  <nav>
    <div>
      <a href="#home" className="flex items-center gap-2">
        <img src="/images/logo.png" alt="logo" />
        <p>Velvet Pour</p>
      </a>

      <ul>
        {/* Import navLinks from constants */}
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);
```

### Why use a Constants File?

Instead of hardcoding navigation items directly inside the component, storing them in a constants file makes the code:

* More organized
* Easier to maintain
* Reusable across multiple components

---

## Navbar Scroll Animation

To enhance the user experience, GSAP's `ScrollTrigger` plugin is used to apply a glassmorphism effect to the navigation bar when the user scrolls down the page.

Initially, the navigation bar is transparent. As the page scrolls, a semi-transparent background and blur effect are applied, creating a modern glass-like appearance.

```jsx
useGSAP(() => {
  const navTween = gsap.timeline({
    scrollTrigger: {
      trigger: "nav",
      start: "bottom top",
    },
  });

  navTween.fromTo(
    "nav",
    {
      backgroundColor: "transparent",
    },
    {
      backgroundColor: "#00000050",
      backdropFilter: "blur(10px)",
      duration: 1,
      ease: "power1.inOut",
    }
  );
});
```

### Explanation

* `ScrollTrigger` monitors the scroll position of the page.
* The animation begins when the bottom of the navigation bar reaches the top of the viewport.
* The background smoothly transitions from transparent to a semi-transparent black color.
* `backdropFilter: blur(10px)` creates the glassmorphism effect.
* GSAP handles the transition smoothly using the `power1.inOut` easing function.

This creates a clean and modern navigation experience while keeping the navigation bar readable as users scroll through the page.
