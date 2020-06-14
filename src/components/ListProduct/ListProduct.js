import React from 'react';
import './ListProduct.css';
import {BsPencil } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';

const ListProduct = (props) => {
    const { id, title, source, stock, visibility, available, image,description } = props.prodcut;
    console.log(id, title, source, stock, visibility, available);

    return (
        <tr>
            <td className="imageList"><img src={image} alt={title}/></td>
            <td>{title}</td>
            <td>{description}</td>
            <td>{available?"In stock" :"Out of Stock"}</td>
            <td>{stock}</td>
            <td className="text-center">
                <button className="btnOptionStyle"><BsPencil/></button>
                <button className="btnOptionStyle"><AiOutlineDelete/></button>
            </td>            
        </tr>
    );
};

export default ListProduct;