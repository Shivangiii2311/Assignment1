import React from 'react';

function Cart({ cartItems, updateQuantity, removeItemFromCart }) {
    const handleQuantityChange = (index, quantity) => {
        updateQuantity(index, quantity);
    };
    console.log(cartItems);
    return (
        <div>
            <h2>Cart</h2>
            {
                cartItems.length === 0 ? (
                    <p>There is no any Items</p>
                ) : (

                    <div className="container mt-2">
                        <div className="row">
                            {cartItems.map((item, index) => (
                                <div className="col-md-12 mb-2" key={index}>
                                    <div className="card mb-2">
                                        <div className="row no-gutters">
                                            <div className="col-md-2">
                                                <img src={item.image} className="card-img" alt={item.name} style={{ height: 140, objectFit: 'contain' }} />
                                            </div>
                                            <div className="col-md-6 pt-10">
                                                <br />
                                                <h5 className="card-title">{item.name}</h5>
                                                <p className="card-text">{item.description}</p>
                                            </div>
                                            <div className="col-md-2">
                                            <br />
                                                <div className="form-group">
                                                    <label htmlFor={`quantity-${index}`}>Quantity</label>
                                                    <input
                                                        type="number"
                                                        id={`quantity-${index}`}
                                                        className="form-control"
                                                        value={item.quantity}
                                                        onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                                                        min="1"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-2 mt-3">
                                            <br />
                                                <button className="btn btn-danger mt-2" onClick={() => removeItemFromCart(index)}>
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                )}
        </div>
    );
};

export default Cart;
