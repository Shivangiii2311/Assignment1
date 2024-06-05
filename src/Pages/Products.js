import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css"

function ProductList({ productData, addItemToCart }) {
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    {productData.map((product, index) => (
                        <div className="col-md-3 mb-3" key={index}>
                            <div className="card h-100">
                                <img src={product.image} className="card-img-top" alt={product.name} style={{ height: 200, objectFit: 'contain' }} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="mr-2">Price: ${product.price}</p>
                                    <div className="d-flex align-items-center">
                                        <button className="btn btn-primary mr-2 custom-button-spacing" onClick={() => addItemToCart(product)}>
                                            Add to Cart
                                        </button>
                                        <Link to={`/product/${product.id}`} className="btn btn-outline-secondary">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProductList;
