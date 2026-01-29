# 🎬 React Movie App

A modern, responsive React application that allows users to browse, search, and manage their favorite movies using The Movie Database (TMDb) API.

## ✨ Features

- 🎥 **Browse Popular Movies** - View a curated list of popular movies with pagination
- 🔍 **Search Functionality** - Search for movies by title in real-time
- ❤️ **Favorites System** - Add/remove favorite movies with persistent localStorage storage
- 📊 **Movie Details** - View comprehensive movie information including:
  - Plot summary and overview
  - Cast and crew information
  - Release date, runtime, and ratings
  - Genres and vote average
  - Backdrop and poster images
- 📱 **Responsive Design** - Fully responsive UI that works on desktop, tablet, and mobile
- 🎨 **Modern UI** - Sleek dark theme with cyan accent colors and smooth animations

## 🛠️ Tech Stack

- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Axios** - HTTP client for API requests
- **The Movie Database API (TMDb)** - Movie data source
- **CSS3** - Modern styling with gradients and animations

## 📋 Prerequisites

Before you begin, make sure you have:
- Node.js (v14 or higher)
- npm or yarn package manager
- A TMDb API key (get it free from [themoviedb.org](https://www.themoviedb.org/settings/api))

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd react-movie-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Get Your TMDb API Key
- Visit [themoviedb.org](https://www.themoviedb.org/settings/api)
- Sign up for a free account
- Request an API key
- Copy your API key

### 4. Update API Key
Edit `src/services/movieApi.js` and replace the API_KEY:
```javascript
const API_KEY = 'YOUR_API_KEY_HERE';
```

### 5. Start the Development Server
```bash
npm start
```

The app will open at `http://localhost:3000`

## 📁 Project Structure

```
react-movie-app/
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx        # Individual movie card with favorite button
│   │   ├── MovieDetail.jsx      # Detailed view of a single movie
│   │   ├── MovieList.jsx        # Grid display of multiple movies
│   │   ├── Navbar.jsx           # Navigation bar
│   │   └── SearchBar.jsx        # Movie search input
│   ├── context/
│   │   └── FavoritesContext.jsx # Global state for favorites (with localStorage)
│   ├── hooks/
│   │   └── useMovies.js         # Custom hook for movie data fetching
│   ├── pages/
│   │   ├── Favorites.jsx        # Favorites page
│   │   ├── Home.jsx             # Home page with search and pagination
│   │   └── MovieDetails.jsx     # Movie details page
│   ├── services/
│   │   └── movieApi.js          # TMDb API integration
│   ├── styles/
│   │   ├── App.css
│   │   ├── Favorites.css
│   │   ├── Home.css
│   │   ├── MovieCard.css
│   │   ├── MovieDetail.css
│   │   ├── MovieList.css
│   │   ├── MovieDetails.css
│   │   ├── Navbar.css
│   │   └── SearchBar.css
│   ├── App.jsx                  # Main app component with routing
│   └── index.js                 # React DOM entry point
├── public/
│   └── index.html
├── package.json
└── README.md
```

## 🧩 Component Details

### **Navbar**
- Navigation between Home and Favorites pages
- Sticky header with smooth animations
- Responsive design for mobile devices

### **SearchBar**
- Text input for searching movies
- Submit button to trigger search
- Integrated with form submission

### **MovieList**
- Grid layout displaying multiple movies
- Loading and error states
- Empty state message
- Responsive grid that adapts to screen size

### **MovieCard**
- Movie poster, title, release year, and rating
- Favorite button with heart icon
- Link to detailed movie view
- Hover effects with smooth animations

### **MovieDetail**
- Large backdrop image
- Poster image with shadow
- Full movie information (title, genres, runtime, ratings)
- Cast section showing top 5 actors
- Add/remove favorite button
- Responsive layout

### **FavoritesContext**
- Global state management for favorite movies
- Automatic localStorage persistence
- Methods: `addFavorite`, `removeFavorite`, `isFavorite`

### **useMovies Hook**
- Handles all movie fetching logic
- Manages loading, error, and pagination states
- Popular movies and search functionality
- Separate state for search queries

## 🎯 Pages

### **Home Page** (`/`)
- Displays popular movies with pagination
- Search functionality
- Browse through multiple pages of movies
- Click on any movie for details

### **Favorites Page** (`/favorites`)
- View all saved favorite movies
- Empty state when no favorites exist
- Same functionality as home page cards
- Persistent storage using localStorage

### **Movie Details Page** (`/movie/:id`)
- Complete movie information
- High-quality backdrop and poster images
- Cast and crew information
- Back navigation button
- Add/remove from favorites

## 🎨 Design Features

### Color Scheme
- **Primary Dark**: `#0f1419` - Background
- **Secondary Dark**: `#16213e` - Cards and containers
- **Accent Color**: `#00d4ff` - Cyan for highlights
- **Accent Secondary**: `#0099cc` - For hover states

### Responsive Breakpoints
- **Desktop**: Full 3-column grid layout
- **Tablet (768px)**: 2-column grid
- **Mobile (480px)**: 2-column grid with smaller spacing

## 📡 API Integration

### TMDb API Endpoints Used
- `/movie/popular` - Popular movies list
- `/search/movie` - Movie search
- `/movie/{id}` - Movie details with credits

### Image URLs
- Base URL: `https://image.tmdb.org/t/p/w500`
- Used for poster and backdrop images

## 💾 localStorage

The app uses browser localStorage to persist favorite movies:
- Key: `favorites`
- Data: JSON array of favorite movie objects
- Auto-saves whenever favorites are modified
- Auto-loads on app startup

## 🚀 Building for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` folder.

## 🔧 Environment Setup

### For Windows Users
```powershell
npm install
npm start
```

### For Mac/Linux Users
```bash
npm install
npm start
```

## 📚 Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App (irreversible)

## 🐛 Troubleshooting

### API Key Issues
- Make sure your API key is correctly copied and pasted
- Check that your TMDb account is verified
- Verify API key is enabled for v3 API requests

### Port Already in Use
If port 3000 is already in use:
```bash
npm start -- --port 3001
```

### Module Not Found
```bash
npm install
```

### Cache Issues
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## 📖 Usage Guide

1. **Browse Movies**: The home page loads popular movies automatically
2. **Search**: Use the search bar to find specific movies
3. **Pagination**: Use Previous/Next buttons to browse pages
4. **Add Favorites**: Click the heart icon on any movie card
5. **View Favorites**: Navigate to the Favorites page
6. **View Details**: Click on any movie poster to see full details

## 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements.

## 📄 License

This project is open source and available under the MIT License.

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [TMDb API Documentation](https://developer.themoviedb.org/docs)
- [CSS Tricks - Grid Layout](https://css-tricks.com/snippets/css/complete-guide-grid/)

## 🌟 Future Enhancements

- User authentication with Firebase
- Movie ratings and reviews
- Watchlist feature
- Personalized recommendations
- Dark/Light theme toggle
- Advanced filters (genre, year, rating)
- Movie trailers and videos
- Social sharing features

## 📞 Support

For issues or questions, please create an issue in the repository.

---

Made with ❤️ by the React Movie App Team
#   r e a c t - m o v i e - a p p  
 