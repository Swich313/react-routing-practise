import {Link} from "react-router-dom";

const PRODUCTS =[
    {id: 'p1', title: 'product-1'},
    {id: 'p2', title: 'product-2'},
    {id: 'p3', title: 'product-3'},
    {id: 'p4', title: 'product-4'},
    {id: 'p5', title: 'product-5'},
];

const ProductsPage = () => {
    return (
        <>
            <h1>Products Page</h1>
            <ul>
                {PRODUCTS.map(item => {
                    return <li key={item.id}><Link to={`/products/${item.id}`}>{item.title}</Link></li>
                })}
                {/*<li><Link to='/products/product-1'>Product1</Link></li>*/}
                {/*<li><Link to='/products/product-2'>Product2</Link></li>*/}
                {/*<li><Link to='/products/product-3'>Product3</Link></li>*/}
                {/*<li><Link to='/products/product-4'>Product4</Link></li>*/}
                {/*<li><Link to='/products/product-5'>Product5</Link></li>*/}
            </ul>
        </>
    );
};

export default ProductsPage;