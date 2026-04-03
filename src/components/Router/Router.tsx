import { Layout } from '../Layout';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../../modules/HomePage';
import { FavoritesPage } from '../../modules/FavoritesPage';
import { CatalogPage } from '../../modules/CatalogPage';
import { CartPage } from '../../modules/CartPage';
import { ItemCardPage } from '../../modules/ItemCardPage';

export const Router = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="phones" element={<CatalogPage />}>
          <Route path=":itemId" element={<ItemCardPage />} />
        </Route>
        <Route path="tablets" element={<CatalogPage />}>
          <Route path=":itemId" element={<ItemCardPage />} />
        </Route>
        <Route path="accessories" element={<CatalogPage />}>
          <Route path=":itemId" element={<ItemCardPage />} />
        </Route>
        <Route path="cart" element={<CartPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
