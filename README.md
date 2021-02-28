![Screenshot](assets/thumbnail.png?raw=true)

>A custom element Lottie player

Lottie-player provides a Lottie player as a custom web element using the lottie-web library, adding a control toolbar, render graph and other handy
configs for viewing Lottie animations.

Under the hood, we used [Microsoft FAST](https://www.fast.design/) for the creation of this custom element. 

## Features

- Configuration of lottie-web via attributes
- Control toolbar with play, pause, stop, progress track with seeker, looping

## Table of Contents

- [Installation](#installation)
- [Examples](#examples)
- [Usage](#usage)

## Examples

```shell
npm i
npm start
```

## Installation

Download the minified package found at dist/lottie-player.js and place inside your project.

Then in the header of your HTML:

```HTML
<script type="module" src="dist/lottie-player.js"></script>
```

## Usage

Basic steps for use in a web project:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My website</title>
    <script type="module" src="../dist/lottie-player.js"></script>
</head>

<lottie-player path='https://assets2.lottiefiles.com/packages/lf20_wxUJzo.json'
               loop
               autoplay
               background="#8db2e5"
               controls>
</lottie-player>
```

### Current available attributes

##### loop
Makes the animation loop
```HTML
<lottie-player path="button.json" loop></lottie-player>
```

##### autoplay
Makes the animation play automatically on load
```HTML
<lottie-player path="button.json" autoplay></lottie-player>
```

##### controls
Displays a control bar underneath the animation
```HTML
<lottie-player path="button.json" controls></lottie-player>
```

##### background
Defines the background color of the animation
```HTML
<lottie-player path="button.json" background="#8db2e5"></lottie-player>
```

### Youtube guides

https://www.youtube.com/channel/UCPPNxV39UlVo3emNQSNNTug

### Lottie animations

https://svgenius.co

https://lottiefiles.com/svgenius
