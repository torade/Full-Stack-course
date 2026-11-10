#### Name: Adelina Stan
#### Learning Diary: Learning Diary.docx
#### Link to a video of project running: https://youtu.be/4ZWEuziiNRE  

This repository contains all of the coursework. The project is located inside `Project_MERN` forlder.

A live demo of the project can be found at: https://mernappadelina-192da817d4ce.herokuapp.com/


# Instructions for running the project locally

1. clone the repository

2. in the terminal, change the location to the directory **"Project_MERN"**:

   ```bash
   cd Full-Stack-course/Project_MERN
   ```

3. install dependencies:

   ```bash
   npm install
   npm install --prefix frontend
   ```

4. Create a .env file in the Project_MERN folder:

   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_USERNAME="your_username"
   MONGODB_PASSWORD="your_password"
   MONGODB_URI="your_mongo_URI"
   JWT_SECRET=your_secret
   ```

5. start the application:

   ```bash
   npm run dev
   ```

This starts:

- Backend API: http://localhost:5000
- Frontend: usually http://localhost:5173
