import {Routes, Route } from 'react-router'
import Layout from './layouts/Layout'
import Home from './components/Home'
import Product from './pages/Product'
import NotFound from './NotFound'

export const AppRoutes = () => {
  return (
        <Routes>
            <Route element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="product/:id" element={<Product/>} />
            <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
  )
}
