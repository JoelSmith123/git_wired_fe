## Git Wired

**Git Wired** is a tool for Developers and Managers to visualize the current state of completeness of a project by individually recognizing the state of each wireframe element. It serves as a simple wireframe visualization of [GitHub Project Cards](https://help.github.com/articles/about-project-boards/) for *features* in relation to one another. It also provides visuals for quickly conveying the completeness of a project, as well as other custom states of features based on the card column. The intention is merely a tool for organization, especially on smaller and simpler projects where communication is less formal and features may be forgotten or overlooked. This app will not allow you to add special and specific characteristics to the elements, such as sizes, fonts, or colors, but expects that this type of information is stored in a project card. This is not intended to be a comprehensive wireframe, but rather a quick visual of the basic structure and the state of completeness.


#### Check it in action!
* [Git Wired](https://git-wired.herokuapp.com/)
* [Git Wired API](https://git-wired-be.herokuapp.com/) (and [Repo](https://github.com/hbellows/git_wired_be))

## Setup
1. Fork or clone this repo: `git clone git@github.com:JoelSmith123/git_wired_fe.git <name of your choice>`
  * Note: This app was created with [Create React App](https://github.com/facebook/create-react-app).
1. Install Dependencies: `npm install`
1. Build Application: `npm run build`
1. To see the app in action locally: `npm start` then go to: `http://localhost:8080/`
Note this app uses [Fabric.js](https://github.com/fabricjs/fabric.js), which uses a system dependency - [Cairo](https://www.cairographics.org/download/)


## APIs, Data, Services
This app obtains data through:
* [Git Wired API](https://git-wired-be.herokuapp.com/)
* [Login With Github](https://developer.github.com/v3/guides/basics-of-authentication/)
* [GitHub Project API](https://developer.github.com/v3/projects/).
* [GitHub Project Cards API](https://developer.github.com/v3/projects/cards/).


## How to Use

## Known Issues

## Running Tests
`npm test` - Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Screenshots
<!-- ![title](img_url) -->

## How to Contribute
To contribute, see the setup instructions.
* [Open Issues](https://github.com/JoelSmith123/git_wired_fe/projects/1)
* Create a new branch describing the feature. If you close an issue, include it's number in the branch name.
* Please describe all changes in the Pull Request (to `Master`), and all relative issue cards/actions.
* Please use the Pull Request Template as the baseline for communication - feel free to add more!
* Please update the `README` if anything is affected.


#### Core Unfinished Features
[FE Project Board](https://github.com/JoelSmith123/git_wired_fe/projects/1)
[BE Project Board](https://github.com/hbellows/git_wired_be/projects/1)
FE Core Features:
- [ ]

## Core Contributors
Git Wired [FrontEnd](https://github.com/JoelSmith123/git_wired_fe):
* [Joel](https://github.com/JoelSmith123)
* [Kate](https://github.com/Kate-v2)
Git Wired [BackEnd](https://github.com/hbellows/git_wired_be):
* [Jordan](https://github.com/jordanwa1947)
* [Harper](https://github.com/hbellows)

## Technical
* Facebook's [Create React App](https://github.com/facebook/create-react-app)
* [JavaScript](https://www.javascript.com/)
* [Mocha](https://mochajs.org/)
* [Chai](https://chaijs.com/)
* [Fabric.js](https://github.com/fabricjs/fabric.js)
  * Fabric is dependent on [Cairo](https://www.cairographics.org/download/) installed to your local system.

## [Turing](https://www.turing.io/) Project Details:
* [Assignment](http://backend.turing.io/module4/projects/cross_pollination/cross_pollination_spec)
* [Rubric](http://backend.turing.io/module4/projects/cross_pollination/cross_pollination_rubric)
