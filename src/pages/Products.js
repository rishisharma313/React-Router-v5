import { Link } from "react-router-dom";

const Products = () => {
    return (<section><h2>Products Page</h2>
    <ul>
        <li><Link to="/products/p1">A Book</Link></li>
        <li><Link to="/products/p2">Tea Mug</Link></li>
    </ul>
    </section>)
}

export default Products;
