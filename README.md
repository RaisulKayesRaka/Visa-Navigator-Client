# Visa Navigator

This project is a Visa Navigator Portal. It allows users to check visa requirements, apply for visas and track their application status.

## Live Site

https://visa-navigator-79ea7.web.app/

## Key Features

- Check visa requirements for different countries.
- Add, update and delete visas.
- Apply for visas.
- Cancel application for visas.
- Filter visas by visa type.
- Search visa applications by country name.
- Toggle light and dark mode.


## Technologies Used

`HTML`, `Tailwind CSS`, `React`, `Firebase`, `Node.js`, `Express.js`, `MongoDB`


## Dependencies
- @emotion/react
- dotenv
- firebase
- react
- react-awesome-reveal
- react-dom
- react-helmet-async
- react-icons
- react-router-dom
- react-simple-typewriter
- react-tooltip
- sweetalert2
- swiper


## Installation

Here is a step-by-step guide on how to run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/RaisulKayesRaka/Visa-Navigator-Client.git
   cd Visa-Navigator-Client
   ```

2. **Install dependencies:**
   Ensure you have Node.js and npm installed. Then run:

   ```bash
   npm install
   ```

3. **Set up Firebase Authentication**

   - Go to the Firebase Console. https://console.firebase.google.com
   - Create a new project or use an existing one.
   - Navigate to Project Settings > General and add a new Web App.
   - Copy the Firebase configuration object.
   - In the Firebase console, go to Authentication > Sign-in method, and enable:
     - Google Sign-in
     - Email/Password Sign-in

4. **Set up environment variables:**
   Create a `.env.local` file in the root directory and Add the following variables to it:

   ```
   VITE_apiKey=your_api_key
   VITE_authDomain=your_auth_domain
   VITE_projectId=your_project_id
   VITE_storageBucket=your_storage_bucket
   VITE_messagingSenderId=your_messaging_sender_id
   VITE_appId=your_app_id
   ```

5. **Run the development server:**

   ```bash
   npm run dev
   ```

## Screenshot

![image](https://github.com/user-attachments/assets/eee06ca1-4b86-469f-9b4b-c0f7a5d0155a)

