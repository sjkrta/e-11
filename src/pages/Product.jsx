import { useParams, Navigate } from "react-router";

const Product = () => {
    let { id } = useParams();

    if (isNaN(id)) return <Navigate to="/404" />
    return (
        <div>Product {id}</div>
    )
}

export default Product