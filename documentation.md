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


# Hero Section

Created the `Hero.jsx` component for the landing page hero section.

## Features

### Animated Title and Subtitle

Added the hero title and subtitle with animations to create an engaging introduction for the website.

### Parallax Leaf Animation

Added decorative green leaves on both sides of the hero section. These leaves move while scrolling, creating a subtle parallax effect.

```jsx
<h1 className="title">Mojito</h1>

<img
  src="/images/hero-left-leaf.png"
  alt="left-leaf"
  className="left-leaf"
/>

<img
  src="/images/hero-right-leaf.png"
  alt="right-leaf"
  className="right-leaf"
/>
```

### Leaf Utility Classes

The positioning and responsiveness of the leaves are handled using utility classes.

```scss
.left-leaf {
  @apply absolute left-0 md:top-20 xl:top-36 2xl:top-52 md:bottom-auto -bottom-20 md:w-fit w-1/3;
}

.right-leaf {
  @apply absolute right-0 md:bottom-0 xl:top-0 2xl:top-12 top-1/2 md:w-fit w-24;
}
```

## Utility Classes

Most of the layout and styling are handled using reusable utility classes, making the component easier to maintain.

### Noise Background

The `noisy` utility class adds a subtle texture overlay to the hero section.

```scss
.noisy {
  @apply absolute inset-0 size-full bg-[url("/images/noise.png")];
}
```

### Hero Content Layout

```scss
.body {
  @apply container mx-auto absolute left-1/2 -translate-x-1/2 lg:bottom-20 top-auto md:top-[30vh] flex justify-between items-end px-5;

  .content {
    @apply flex lg:flex-row flex-col w-full gap-10 justify-between items-center lg:items-end mx-auto;

    p:nth-of-type(2) {
      @apply font-modern-negra text-6xl text-yellow max-w-xl;
    }

    p:last-of-type {
      @apply 2xl:text-start text-center;
    }

    .view-cocktails {
      @apply space-y-5 text-lg lg:max-w-2xs md:max-w-xs w-full;

      p {
        @apply text-left;
      }

      a {
        @apply font-semibold opacity-80 2xl:text-start text-center hover:text-yellow;
      }
    }
  }
}
```

## Hero Component Structure

```jsx
<section id="hero" className="noisy">
  <h1 className="title">Mojito</h1>

  <img
    src="/images/hero-left-leaf.png"
    alt="left-leaf"
    className="left-leaf"
  />

  <img
    src="/images/hero-right-leaf.png"
    alt="right-leaf"
    className="right-leaf"
  />

  <div className="body">
    <div className="content">
      <div className="space-y-5 hidden md:block">
        <p>cool. crisp. classic</p>

        <p className="subtitle">
          sip the spirit
          <br />
          of summer
        </p>
      </div>

      <div className="view-cocktails">
        <p className="subtitle">
          Every cocktail on our menu is a blend of premium ingredients,
          creative flair, and timeless recipes — designed to delight your
          senses.
        </p>

        <a href="#cocktails">view cocktails</a>
      </div>
    </div>
  </div>
</section>
```

A temporary blank section was added below the hero section to make it easier to test and visualize the scroll-triggered animations during development.


# GSAP Mojito Animation

### Mobile Support

To make the animation work smoothly on both desktop and mobile devices, adjust the `ScrollTrigger` start and end positions based on the screen size.

```jsx
const isMobile = useMediaQuery({ maxWidth: 767 });

const startValue = isMobile ? "top 50%" : "center 60%";
const endValue = isMobile ? "120% top" : "bottom top";
```

---

### Adding the Background Video

In `Hero.jsx`, add the following below the hero section:

```jsx
<div className="video absolute inset-0">
  <video
    ref={videoRef}
    src="/videos/input.mp4"
    muted
    playsInline
    preload="auto"
  />
</div>
```

This places the video behind the hero content but above the background image, allowing it to blend seamlessly with the hero section.

The `video` utility class contains:

```css
.video {
  @apply w-full md:h-[80%] h-1/2 absolute bottom-0 left-0 md:object-contain object-bottom object-cover;
}
```

---

### Animating the Video on Scroll

Create a GSAP timeline with `ScrollTrigger` and animate the video's `currentTime` property instead of using a traditional play animation.

```jsx
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "video",
    start: startValue,
    end: endValue,
    scrub: true,
    pin: true,
  },
});

videoRef.current.onloadedmetadata = () => {
  tl.to(videoRef.current, {
    currentTime: videoRef.current.duration,
  });
};
```

The `loadedmetadata` event ensures that the video's metadata (such as its duration) has been loaded before creating the animation. Without waiting for this event, `video.duration` may not be available, causing the animation to fail.

---

### Making Scroll Animation Smooth

Using a normal MP4 often results in choppy scrolling because videos are typically encoded with keyframes placed several frames apart. When GSAP scrubs through the video by changing `currentTime`, the browser has to decode intermediate frames, which can cause stuttering.

To improve smoothness, re-encode the video using FFmpeg with a keyframe on every frame.

First, install **FFmpeg**, then navigate to the folder containing your video and run:

```bash
ffmpeg -i input.mp4 -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output.mp4
```

#### What these options do

* `scale=960:-1` — Resizes the video to a width of 960px while maintaining its aspect ratio.
* `-movflags faststart` — Moves metadata to the beginning of the file for faster loading.
* `-vcodec libx264` — Encodes the video using the H.264 codec.
* `-crf 20` — Maintains high visual quality with reasonable file size.
* `-g 1` — Creates a keyframe for every frame, making scroll scrubbing much smoother.
* `-pix_fmt yuv420p` — Ensures broad browser compatibility.

Finally, replace the original video with the newly generated `output.mp4` for a much smoother scroll-driven animation.
