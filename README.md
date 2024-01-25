# Personal project - Resume

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned-and-difficulties)
  - [Continue developing](#continue-developing)
  - [Run Project in your computer](#how-you-can-run-the-project-in-your-computer)
- [Author](#author)

## Overview
<br>

### The project

The purpose of this website is to demonstrate my programming skills and develop an application with React from scratch. I wrote json files to use aftwerwards to get information from those files to render on the webpage. There's a menu on the Home page where each item redirects to an internal page, using react router.
Clicking on the "Home" icon on the header, it should go back to home page, and you should be able to change theme from light to dark and vice versa by clickin on the moon/sun.
In the Curriculum route, you should click to open the PDF to see the resume file.
In the contact page, each icon/item has an action, either calling, opening whatsapp, email, etc.


### Screenshot
#### Home Page

<a href="#" target="_blank">
  <img src="./src/images/home-page.JPG">
</a>


### Links

- [Solution URL - Repository](https://github.com/julialimp/resume)
- [Online Page](https://julia-limp-resume.vercel.app/)


## My process

### Built with
- React.js: used to build the user interface and create components, avoiding repeating too much code and keeping the code cleaner;
- It was used a Single Page Application (SPA) for this project, this way it doesn’t have to refresh the page, leading to a faster response;
- Context API was used to create the style of the light and dark theme. This way it was easier to pass the style properties to each one of the components that should change on the click;
- I used styled-components library instead of CSS to be able to do it in a dynamic way, being able to write jsx code inside the styling properties;
- React-router-dom was used to direct the links of the SPA, switching from the home page to the internal page and vice-versa.
<br>

### What I learned

It was challenging to create the whole project from scratch by my self, but I really liked the results. 
Each project I build I end up learning new things, in this case was the use of React Chrono to build a timeline for my work experiences.


### Continue developing

There are probably better and easier ways of making the project work the way I wanted, and I will continue studying and researching about possibilities to keep improving my abilities and my problem solving skill, and will try my best to always keep the code as clean as possible.

## How you can run the project in your computer

1. Make sure you have Node.js installed in your computer;
2. [Download the project](https://github.com/julialimp/resume) using `git clone`.
3. Open the terminal and go to directory `cd resume`;
4. Execute `npm install` to install all dependencies;
5. `npm start` runs the app in the development mode;
6. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

*Make sure PokeAPI is accessible so that the application can obtain the data properly.*

## Author

- Linkedin - [Juia Limp](https://www.linkedin.com/in/julia-limp/)
- Instagram - [@julialimp](https://www.instagram.com/julialimp)
- GitHub - [@julialimp](https://github.com/julialimp)