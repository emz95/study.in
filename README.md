# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

### Tasks  
- Work on router
- Split up pages

# React Router Implementation Notes

## Project Structure
Our project has several pages, each as a React component:
- GetStarted.jsx - Landing page (at URL: "/")
- Home.jsx - Home page (at URL: "/home")
- Search.jsx - Search page (at URL: "/search")
- Explore.jsx - Explore page (at URL: "/explore")
- Review.jsx - Review page (at URL: "/review")
- SignUp.jsx - Sign up page (at URL: "/signup")
- Survey.jsx - Survey page (at URL: "/survey")
- Login.jsx - Login page (at URL: "/login")

## What is React Router?
Think of React Router like a traffic controller for our app:
- It watches the URL in the browser
- Based on the URL, it shows the correct page
- For example: when someone goes to "/home", Router shows the Home page

## How Routing Works in Our App
1. In App.jsx, we define all possible routes:
```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<GetStarted />} />
    <Route path="/home" element={<Home />} />
    {/* etc... */}
  </Routes>
</BrowserRouter>
```

## How to Add Navigation Between Pages
There are two ways to add navigation:

1. Using the `useNavigate` hook (for button clicks):
```jsx
import { useNavigate } from 'react-router-dom';

const YourComponent = () => {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate('/home')}>
      Go to Home
    </button>
  );
};
```

2. Using Link component (for links):
```jsx
import { Link } from 'react-router-dom';

const YourComponent = () => {
  return (
    <Link to="/home">Go to Home</Link>
  );
};
```

## Example: How to Connect Pages
Let's say you want to add a button in your page that takes users to the Search page:

```jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const YourPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Your Page</h1>
      <button onClick={() => navigate('/search')}>
        Go to Search
      </button>
    </div>
  );
};
```

## Tips for Implementation
1. Always import `useNavigate` when you need navigation buttons
2. Make sure your route paths in App.jsx match exactly with your navigation paths
3. Test your navigation by clicking through all possible paths
4. Remember that each page component should be exported (export default YourComponent)

## Current Status
- ✅ Basic routing structure is set up in App.jsx
- ✅ All page components are created
- ✅ Currently, to access the different pages, you have to type http://localhost:5173/search to get to the search page for example
- ❌ Navigation between pages needs to be implemented
- ❌ Layout component needs to be connected with navigation

## Next Steps for Team
1. Implement the Layout component with working navigation
2. Add navigation buttons/links in each page as needed
3. Test all navigation paths
4. Start adding actual content to each page component