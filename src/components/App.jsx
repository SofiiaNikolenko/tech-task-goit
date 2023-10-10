import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';
import Favorite from 'pages/Favorites/Favorite';
import Layout from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorite />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
