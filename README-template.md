# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![deskopt view](image-1.png)
![deskopt active view](image-2.png)
![mobile view](image.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

At start I wrote this function in long version with everythink as separeted variables, then i tried with doing foreach both INPUTS and LABELS at one time, but then I finnally thought I can do this with INPUTS as array (I saw this when I have been looking on some yours other project on Frontend mentor(there you could easily do it with foreach) I didn't take much care about that code but it was enough to think about somethink liked this when I met today my problem)
```js
for ( let i = 0; i < 4; i++ ) {
            if( INPUTS[i].value ) {
                LABELS[i].style.display = 'none'
            } else {
                LABELS[i].style.display = 'block'
            }
        }
```
Here I needed to check if event though email input has value this value is an valid email 
```js
else if( i == 2 &&  !EMAIL_VALIDATION.test( INPUTS[2].value ) ) {
```
it took me some time to realize I need a INPUT[2].value not only INPUT[2] and that i need negation (!statement)

### Useful resources

- [https://css-tricks.com/apply-a-filter-to-a-background-image/] - This helped me with color and image be together on the background.
- [https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript] - This helped mi with validating an email

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
*
