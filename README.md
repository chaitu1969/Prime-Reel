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
  - Fetch and display recommended movies in a reusable movie list component

---

## 🚀 **Project Setup & Deployment**

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

6. **OpenAI GPT Setup:**
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

4. **YouTube Embedding:**
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
- **Routing:** React Router

---

## 📈 **Future Plans**

- Enhance the **Main Container** for better movie organization.
- Add **user preferences** to personalize movie recommendations.
- Implement **offline caching** for better performance.
- Add **dark mode** support for improved user experience.

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

Contributions are welcome! Feel free to submit a pull request or open an issue to improve the app.

---

## 📄 **License**

This project is licensed under the MIT License. See the [LICENSE](https://github.com/chaitu1969/Prime-Reel/blob/main/LICENSE) file for more details.

---

## 💡 **Contact**

Developed by **Chaitanya Karle**. Feel free to connect for collaboration opportunities!  
LinkedIn: [Chaitanya Karle](#)  
Email: [chaitanya.karle@gmail.com](#)

---

Enjoy exploring movies with **Prime Reel**! 🍿
