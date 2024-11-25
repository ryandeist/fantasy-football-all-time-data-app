# MDL Statraker App

![Show Page Screenshot](public/assets/coach-show.png)

This application is a MEN Stack application that tracks all time coach data for players in a fantasy leage that I have been running for 14+ years. Building this application allow me to showcase my understanding of RESTful routes and CRUD in a real-world setting. It presented unique challenges with authenication and session validation, data visualization and manipulation, and styling. 

## Overview:
- This app has authorization built in, where a logged in user with Administrator privileges would be able to manipulate the data for each coach. 
- Error handling and user data validation is programmed into the authorization. Errors will be shown to the user if they enter the wrong login information, or attempt to create a duplicate account. 
- The home page of this app contains a link to an All Coaches index, which a table. This table does not yet have sort functionality. 
- With in the `/coaches` page, you can click into each individual coach to see a more detailed "Profile" displaying if they are active in the league and all time Regular, Post-Season, and Super Bowl data. 
- Guests and normal users can see all data, but only users with admin privledges can update the data. This is to protect the data from just anyone being able to edit it. 
- This app has CRUD functionality, with new coaches able to added on the `/coaches` route, and updates and deleting of coaches happening on the `coaches/:coachID` route.
- This app was designed to be mobile responsive with Bulma. 

[**Deployed App**](https://mdl-statracker-c011c52bd590.herokuapp.com/)

[**Original Planning Materials**](https://trello.com/b/6OqlySIp/project-2-fantasy-football-all-time-coach-data-app)

## Assets Attribution:
- [Football PNG](https://www.pngegg.com/en/png-tlaye#goog_rewarded)
- [Profile Pic Placeholder](https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/)


## Built with:
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Bulma](https://img.shields.io/badge/bulma-%2300D1B2?style=for-the-badge&logo=bulma&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%2347A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-%23F04D35?style=for-the-badge&logo=mongoosedotws&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-%235FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23000000?style=for-the-badge)
![Heroku](https://img.shields.io/badge/heroku-%23430098?style=for-the-badge)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## Next Steps:
- Program sortable table
- Add embedded "Seasons" ERD to feed data to overall profile
- Add upload of pictures for non-admin users
- Live Data Tracking (connected to the Sleeper API)