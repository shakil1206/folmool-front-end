import React from 'react';
import './Product.css';

const Product = (props) => {

    const { id, title, source, stock, visibility, available, image } = props.prodcut;

    console.log(id, title, source, stock, visibility, available);
    return (
        <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={image} alt="title" />
                <div className="card-body">
                    <p className="card-text">{title}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;