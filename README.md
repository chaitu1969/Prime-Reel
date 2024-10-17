# 🎥 **Prime Reel**

Welcome to **Prime Reel** — a sleek, responsive movie app built with **React**, leveraging **TMDB API** for movie data and **OpenAI GPT API** for AI-powered search recommendations. Whether you’re here to browse trending movies, play trailers, or explore AI-powered suggestions, Prime Reel offers it all with a smooth user experience!

Check it out live: [Prime Reel](https://primereel-743c7.web.app/)  
GitHub Repository: [Prime Reel GitHub](https://github.com/chaitu1969/Prime-Reel)

---

# 🎥 **Prime Reel**

Welcome to **Prime Reel** — a sleek, responsive movie app built with **React**, leveraging **TMDB API** for movie data and **OpenAI GPT API** for AI-powered search recommendations. Whether you’re here to browse trending movies, play trailers, or explore AI-powered suggestions, Prime Reel offers it all with a smooth user experience!

Check it out live: [Prime Reel](https://primereel-743c7.web.app/)  
GitHub Repository: [Prime Reel GitHub](https://github.com/chaitu1969/Prime-Reel)

---

## ⚠️ **Note**

- **Prime Reel may not work on the Jio network** in India due to certain network restrictions. Please try accessing the site using a different network if you encounter issues.

---

## 🌟 **Features**



- **User Authentication**


  - Login & Signup Forms with **Form Validation**
  - User authentication powered by **Firebase**
  - Redux store integration for managing user sessions
  - Update user profile with **display name and profile picture**
  - Auto-redirect: If not logged in, users are sent to the login page

- **Movie Browsing**

  - Displays **Now Playing, Popular, and Trending Movies** using custom React hooks
  - Embedded **YouTube trailers** with autoplay and mute for a cinematic experience
  - TailwindCSS-based design for a clean, responsive UI

- **AI Search Recommendations**

  - **AI-powered Search Page** using **OpenAI GPT API**
  - Get movie suggestions based on your input
  - # Fetch and display recommended movies in a reusable movie list component
  - Auto-redirect: If not logged in, users are sent to the login page

- **Movie Browsing**

  - Displays **Now Playing, Popular, and Trending Movies** using custom React hooks
  - Embedded **YouTube trailers** with autoplay and mute for a cinematic experience
  - TailwindCSS-based design for a clean, responsive UI

- **AI Search Recommendations**
  - **AI-powered Search Page** using **OpenAI GPT API**
  - Get movie suggestions based on your input
  - Fetch and display recommended movies in a reusable movie list component

---

## 🚀 **Project Setup & Deployment**



1. **Clone the Repository:**

=======

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/chaitu1969/Prime-Reel.git
   cd Prime-Reel
   ```

2. **Install Dependencies:**


```bash
npm install
```

3. **Configure TailwindCSS:**  
   Set up Tailwind using `postcss.config.js` and `tailwind.config.js`.

4. **Firebase Setup:**

- Create a Firebase project.
- Add Firebase configuration to `.env` file.
- Deploy with:
  ```bash
  npm run build
  firebase deploy
  ```

5. **TMDB API Setup:**

- Register at [TMDB](https://www.themoviedb.org/) and get an API key.
- Add the API key to **`constant.js`**.

6. # **OpenAI GPT Setup:**
7. **TMDB API Setup:**

   - Register at [TMDB](https://www.themoviedb.org/) and get an API key.
   - Add the API key to **`constant.js`**.

8. **OpenAI GPT Setup:**
   - Get your **OpenAI API key** and configure it in the `.env` file.
   - Use it to fetch AI-powered movie recommendations.

---

## 📂 **Project Structure**

```
/src
 ├── components/
 │   ├── Header.js
 │   ├── LoginForm.js
 │   ├── MovieCard.js
 │   ├── MovieList.js
 │   ├── AIRecommendation.js
 ├── hooks/
 │   ├── useNowPlayingMovies.js
 │   ├── usePopularMovies.js
 │   ├── useTrendingMovies.js
 ├── redux/
 │   ├── userSlice.js
 │   ├── movieSlice.js
 │   ├── gptSlice.js
 ├── constants/
 │   └── constant.js
=======
Prime-Reel/
│
├── src/
│   ├── components/                 # UI components of the application
│   │   ├── Body.js                 # Main body of the homepage
│   │   ├── Browse.js               # Browse page to explore movies
│   │   ├── gptMovieSuggestion.js   # GPT-based movie suggestion logic
│   │   ├── GptSearch.js            # Search component powered by GPT
│   │   ├── gptSearchBar.js         # Input bar for GPT movie search
│   │   ├── Header.js               # Header component with navigation links
│   │   ├── Login.js                # Login page
│   │   ├── MainContainer.js        # Primary container for the app layout
│   │   ├── MovieCard.js            # Component displaying a movie card
│   │   ├── MovieList.js            # Component rendering a list of movies
│   │   ├── SecondaryContainer.js   # Secondary section container
│   │   ├── VideoBackground.js      # Component for video background
│   │   └── VideoTitle.js           # Component for video title display
│   │
│   ├── hooks/                      # Custom hooks for stateful logic
│   │   ├── useMovieTrailer.js      # Hook to fetch movie trailers
│   │   ├── useNowPlayingMovies.js  # Hook to fetch now-playing movies
│   │   ├── usePopularMovies.js     # Hook to fetch popular movies
│   │   └── useTopRatingMovies.js   # Hook to fetch top-rated movies
│   │
│   ├── utils/                      # Utility functions and configs
│   │   ├── appStore.js             # Redux store configuration
│   │   ├── auth.js                 # Firebase authentication logic
│   │   ├── constants.js            # Application-wide constants
│   │   ├── firebase.js             # Firebase initialization
│   │   ├── gptSlice.js             # Redux slice for GPT data
│   │   ├── movieSlice.js           # Redux slice for movie data
│   │   ├── openai.js               # OpenAI API configuration
│   │   ├── userSlice.js            # Redux slice for user data
│   │   └── validate.js             # Validation utilities
│   │
│   ├── App.css                     # Global CSS for the app
│   ├── App.js                      # Root component of the React app
│   ├── index.css                   # Base styles for the app
│   └── index.js                    # Entry point of the React app
│
├── .env                            # Environment variables
├── .firebaserc                     # Firebase project configuration
├── .gitignore                      # Ignored files for Git
├── firebase.json                   # Firebase hosting configuration
├── package-lock.json               # Dependencies lock file
├── package.json                    # Project dependencies and scripts
├── tailwind.config.js              # TailwindCSS configuration
└── README.md                       # Project documentation

>>>>>>> f85647b2090ed0a79757b770e1fc91e6da934bb7
```

---

## 🎯 **Key Implementations**

1. **Redux Store:**

   - Manage user sessions using **userSlice**.
   - Store movie and trailer data efficiently using Redux slices.

2. **Routing and State Management:**

   - Use **`react-router-dom`** for seamless routing.
   - Implemented **memoization** to optimize component re-renders.

3. **Custom Hooks:**

   - `useNowPlayingMovies`, `usePopularMovies`, and `useTrendingMovies` for fetching movie data.
   - Subscriptions handled properly with `unsubscribe` on component unmount (in `Header.js`).

4. # **YouTube Embedding:**
5. **Redux Store:**

   - Manage user sessions using **userSlice**.
   - Store movie and trailer data efficiently using Redux slices.

6. **Routing and State Management:**

   - Use **`react-router-dom`** for seamless routing.
   - Implemented **memoization** to optimize component re-renders.

7. **Custom Hooks:**

   - `useNowPlayingMovies`, `usePopularMovies`, and `useTrendingMovies` for fetching movie data.
   - Subscriptions handled properly with `unsubscribe` on component unmount (in `Header.js`).

8. **YouTube Embedding:**
   - Fetch trailer data from **TMDB**.
   - Play trailers seamlessly with embedded YouTube players.

---

## 🛠 **Tech Stack**

- **Frontend:** React, Redux, TailwindCSS
- **Authentication & Hosting:** Firebase
- **API Integrations:**
  - **TMDB API** for movie data
  - **OpenAI GPT API** for AI-based recommendations
- **State Management:** Redux Toolkit
- # **Routing:** React Router
- **Frontend:** React, Redux, TailwindCSS
- **Authentication & Hosting:** Firebase
- **API Integrations:**
  - **TMDB API** for movie data
  - **OpenAI GPT API** for AI-based recommendations
- **State Management:** Redux Toolkit
- **Routing:** React Router

---

## 📈 **Future Plans**

- Enhance the **Main Container** for better movie organization.
- Add **user preferences** to personalize movie recommendations.
- Implement **offline caching** for better performance.
- # Add **dark mode** support for improved user experience.
- Enhance the **Main Container** for better movie organization.
- Add **user preferences** to personalize movie recommendations.
- Implement **offline caching** for better performance.

---

## 📋 **Installation Notes**

- Don't forget to create a **`.env` file** with the following keys:

  ```
  REACT_APP_FIREBASE_API_KEY=<your-firebase-api-key>
  REACT_APP_TMDB_API_KEY=<your-tmdb-api-key>
  REACT_APP_OPENAI_API_KEY=<your-openai-api-key>
  ```

- Add `.env` to **`.gitignore`** to avoid exposing sensitive information.

---

## 🎬 **Screenshots**

> Add relevant screenshots or GIFs here to visually represent the app!

---

## 📝 **Contributing**

=======

```
REACT_APP_FIREBASE_API_KEY=<your-firebase-api-key>
REACT_APP_TMDB_API_KEY=<your-tmdb-api-key>
REACT_APP_OPENAI_API_KEY=<your-openai-api-key>
```

- Add `.env` to **`.gitignore`** to avoid exposing sensitive information.

---

## 📝 **Contributing**


Contributions are welcome! Feel free to submit a pull request or open an issue to improve the app.

---


## 📄 **License**


This project is licensed under the MIT License. See the [LICENSE](https://github.com/chaitu1969/Prime-Reel/blob/main/LICENSE) file for more details.

---


## 💡 **Contact**

> > > > > > > Developed by **Chaitanya Karle**. Feel free to connect for collaboration opportunities!  
> > > > > > > LinkedIn: [Chaitanya Karle](#)  
> > > > > > > Email: [chaitanya.karle@gmail.com](#)

---

Enjoy exploring movies with **Prime Reel**! 🍿
