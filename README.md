<h1 align="center">
  <br>
  <a href="https://blizypin.netlify.app/"><img src="https://i.imgur.com/CXxaXu4.png" alt="blizypin" width="200"></a>
  <br>
  blizyPin
  <br>
</h1>

<h4 align="center">A social media app (pinterest clone) built using <a href="https://reactjs.org/" target="_blank">React.js</a>, <a href="https://www.sanity.io/">Sanity CMS </a>  and <a href="https://tailwindcss.com/">Tailwind css. </a></h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> 
</p>

![screenshot](https://media.giphy.com/media/RaOzpeoEbKzCkuYL9x/giphy.gif)

## Key Features

> **Note**
> You need to enable THIRD PARTY COOKIES TO BE ABLE TO LOG IN.

This project was created as practice for tailwind css and sanity. It is not meant to be used for production and is a work in progress. 

A user can:
- Use google authentication to securely sign in (currently the only way, email registration to come).
- Create new "pins" by uploading an image, adding a title, description and a destination link.
- Scroll through all the pins submitted by other users.
- Filter pins by category.
- Save pins to view later in user's profile.
- View own pins in user's profile.
- Delete own pins through the feed.
- Leave a comment on a pin. (cannot delete comments currently)

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.
It is suggested to create a project on [sanity](https://www.sanity.io) first. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/donblizy/blizypin.git

# Go into the repository
$ cd backend_blizypin
$ sanity start #to connect backend to your sanity project. Link a sanity.json with your project basically.

$ cd ..
$ cd frontend_blizypin
# Install dependencies
$ npm install

# Run the app
$ npm start
```
