# Intro

This is a wine blog web app ...about wine.

The blog homepage is made of three sections (Featured Posts, Recent Posts and Trending Now).

The sections are made from re-usable components where I pass in CSS Grid properties as react props to build different grid shapes.

## Demo

Heroku deployment:
[https://pacific-sea-04685.herokuapp.com/](https://pacific-sea-04685.herokuapp.com/)

## Tech Stack

1. **React** - using create-react-app
2. **Ant Design** UI Library. A design system for enterprise-level products.
3. **Koa.js**. Next generation web framework for node.js.
4. **GraphQl**. Using the Apollo implementation.

### How to run locally

1. Download Zip folder (or git clone)
2. cd into backend folder: `cd graphql`
3. Run: `npm install`
4. `node app`

note: the react app is served from the backend's public folder.

### Future enhancement

1. Design and build a database to replace file-based persistence.
2. Implement CRUD and auth. The app is currently read-only.
