import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ productData, addItemToCart }) => {
    const { id } = useParams();
    const product = productData[id-1];
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addItemToCart({ ...product, quantity });
    };

    return (
        <div className="container mt-4">
            <div className="card mb-4">
                <img src={product.image} className="card-img-top" alt={product.name} style={{ height: 400, objectFit: 'contain' }} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="mr-2">Price: ${product.price}</p>
                    <div className="d-flex align-items-center">

                        <div className="form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input
                                type="number"
                                id="quantity"
                                className="form-control"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                min="1"
                            />
                            <button className="btn btn-primary mt-2" onClick={handleAddToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
