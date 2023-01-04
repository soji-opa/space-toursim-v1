# Solo Project II - space-toursim-v1

This project was an assignment from my accountability partner [Smug](https://github.com/theadusamuel) to further my understanding of props & mapping over an array. The project was modified from [frontend mentors space toursim challenge] (https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What i learned](#what-i-learned)
  - [Available scripts](#available-scripts)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Student should be able to use props, and implement the concept of mapping

### Screenshot

![](./src/images/screenshot.png)

### Links

- [space-toursim](https://space-toursim-v1.vercel.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- React

### What I learned

This particular project helped me go back the basics of setting up a react app, using props, & staying consistent with the mobile first work flow, as well as using semantic HTML.

In this particular exercise I paid focused my attention on the thinking process involved in how I wrote my code and how I wanted it to be visually presented.

I also learned how to use require property with an img tag, when calling the image from your local computer, into a data file

With this practice assignment I learned about ordering items on the screen using flexbox's custom property such as order & row-reverse or column/reverse, which i used in the course of my code.

```css
body {
		background-image: url('../src/images/background-destination-tablet.jpg');
	},

<img
    src={require(`../images/${props.destination.imageUrl}`)}
    alt='country'
    className='card-img'
/>
```

### Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Useful resources

- [Scrimba](https://scrimba.com/learn/learnreact) - This platform provided me with an opportunity to learn react for free

## Author

- Github - [@soji](https://github.com/soji-opa)

## Acknowledgments

I am very grateful to [Smug](https://github.com/theadusamuel) & [Openwell](https://github.com/openwell) for always making time out of their busy schedules to see to my coding challenges and providing me with extra motivation.
