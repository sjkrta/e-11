import Products from "./Products";
import Posts from "./Posts";
import useHttp from "../hooks/useHttp";
import { formatURL } from "../utils";

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
    <div>
      <Products
        products={products}
        loading={productsLoading}
        error={productsError}
      />
      <Posts posts={posts} loading={postsLoading} error={postsError} />
    </div>
  );
};

export default Home;
