import Products from "../pages/Products";
import Posts from "../pages/Posts";
import useHttp from "../hooks/useHttp";
import { formatURL } from "../utils";
import Cart from "../pages/Cart";

const Home = () => {
  const {
    loading: productsLoading,
    data: products,
    error: productsError,
  } = useHttp(formatURL("products"));
  const {
    loading: postsLoading,
    data: posts,
    error: postsError,
  } = useHttp(formatURL("posts"));

  return (
    <div className="p-4 bg-light">
      <Cart data={products} />
      <Products
        data={products}
        loading={productsLoading}
        error={productsError}
      />
      <Posts data={posts} loading={postsLoading} error={postsError} />
    </div>
  );
};

export default Home;
