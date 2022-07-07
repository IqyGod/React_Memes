# React_Memes-Generator-App


## Table of contents
* [App Link](#app-link)
* [General info](#general-information)
* [Stretch Goals](#stretch-goals)
* [Technologies](#technologies)
* [Setup](#setup)

<br>

## App Link
https://memes-generator-ici.netlify.app/

<br>

## General information
<img src="https://user-images.githubusercontent.com/99662300/177687201-965568c3-1fa1-4b82-a089-37abdbdbe3c5.png" width=45% height=45%>


In this project, the project of a generator for memes creation. 
<br> I built a generator app based on React, with: 
- Component
- Props
- State


Alongwith hooks, 2 hooks are used here : useState, useEffect.
<br> __useState__: state will hook into the component
- [allMeme, setAllMeme] ==> manage meme image retrieved from API randomly
- [meme, setMeme] ==> manage state of meme image and text

<br>__useEffect__: the place to side effect code -> fetch data from API
<br>React.useEffect(()=>{}, [])

<br>And __events listeners__ :
- manage imput text 
- manage button click

<br>

## Technologies
- React
- HTML
- CSS
- JSX

<br>

## Stretch Goals
- As a user, they can retrieve any rendom meme image from API.
- As a user, they can type in the box and click button to generate a new meme.
- As a user, they can input any language in the input box.

<img src="https://user-images.githubusercontent.com/99662300/177688392-fbf2d24b-5863-470f-9cd5-ca6bfd2ba0e9.png" width=45% height=45%>

<br>


## Setup
To run this project, install npx locally after creating a new folder:

```
$ npx create-react-app ./
```

### API 
Meme API 
<br>http://i.imgflip.com/1bij.jpg
<br>
<br>


