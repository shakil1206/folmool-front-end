import React from 'react';
import './Product.css';
import { BsEye, BsPencil } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';


const Product = (props) => {

    const { id, title, source, stock, visibility, available, image } = props.prodcut;

    console.log(id, title, source, stock, visibility, available);
    return (
        <div className="col-md-4">
            <div className="card" style={{ width: "15rem", marginTop: "20px", marginBottom: "35px" }}>
                <img className="card-img-top" src={image} alt="title" />
                <div className="card-body text-center">
                    <p className="card-text">{title}</p>
                    <small>{source}</small>
                    <h5>{stock}</h5>

                    <div className="d-flex justify-content-between">
                        <div>
                            <small>Visibility</small>
                            <br/>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>

                        <div>
                            <small>Stock</small>
                            <br/>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between">
                            <button className="btnIcon"><BsEye/></button>
                            <button className="btnIcon"><BsPencil/></button>
                            <button className="btnIcon"><AiOutlineDelete/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;