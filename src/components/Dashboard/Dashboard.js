import React, { useState } from 'react';
import './Dashboard.css';
import { TiHomeOutline, TiDocument } from 'react-icons/ti';
import { FaShoppingBag } from 'react-icons/fa';
import { BsEye } from 'react-icons/bs';
import { MdReorder } from 'react-icons/md';
import { BsFillGridFill } from 'react-icons/bs';

import image1 from '../../Images/Image1.JPG';
import image2 from '../../Images/Image2.JPG';
import image3 from '../../Images/Image3.JPG';
import image4 from '../../Images/Image4.JPG';
import image5 from '../../Images/Image5.JPG';
import Product from '../Product/Product';

const Dashboard = () => {

    //Button Style depend on active
    const [dasboard, setDashboard] = useState(false);
    const [product, setProduct] = useState(true);
    const [users, setUsers] = useState(false);
    const [oreders, setOrders] = useState(false);
    const [stock, setStock] = useState(false);
    const [delivery, setDelivery] = useState(false);

    //Dashboard Button Action
    const handleDashboard = () => {
        setDashboard(true);
        setProduct(false);
        setUsers(false);
        setOrders(false);
        setStock(false);
        setDelivery(false);
    }
    const handleProduct = () => {
        setDashboard(false);
        setProduct(true);
        setUsers(false);
        setOrders(false);
        setStock(false);
        setDelivery(false);
    }

    const handleUser = () => {
        setDashboard(false);
        setProduct(false);
        setUsers(true);
        setOrders(false);
        setStock(false);
        setDelivery(false);
    }

    const handleOrders = () => {
        setDashboard(false);
        setProduct(false);
        setUsers(false);
        setOrders(true);
        setStock(false);
        setDelivery(false);
    }

    const handleStock = () => {
        setDashboard(false);
        setProduct(false);
        setUsers(false);
        setOrders(false);
        setStock(true);
        setDelivery(false);
    }

    const handleDelivery = () => {
        setDashboard(false);
        setProduct(false);
        setUsers(false);
        setOrders(false);
        setStock(false);
        setDelivery(true);
    }


    //Sub Catagory Design

    const [category, setCategory] = useState(false);
    const [productClass, setProductClass] = useState(false);
    const [manageProdcut, setManageProdcut] = useState(true);
    const [manageItem, setManageItem] = useState(false);


    const handleCategory = () => {
        setCategory(true);
        setProductClass(false);
        setManageProdcut(false);
        setManageItem(false);

        console.log("Category Clicked");
    }
    const handleProdcutClass = () => {
        setCategory(false);
        setProductClass(true);
        setManageProdcut(false);
        setManageItem(false);
    }
    const handleManageProduct = () => {
        setCategory(false);
        setProductClass(false);
        setManageProdcut(true);
        setManageItem(false);
    }
    const handleManageItem = () => {
        setCategory(false);
        setProductClass(false);
        setManageProdcut(false);
        setManageItem(true);
    }


    //Fake Data for Card Item

    const allProdcut = [
        {
            id: "1", title: "Himsagor", description: "Sourced from Rajshahi", source: "Scourced directly From the Gardens all around Bangladesh",
            stock: "800 Kg", visibility: true, available: true, image: image1
        },
        {
            id: "2", title: "GopalBhog", description: "Sourced from Rajshahi", source: "Scourced directly From the Gardens all around Bangladesh",
            stock: "400 Kg", visibility: true, available: true, image: image2
        },
        {
            id: "3", title: "Khirsha", description: "Sourced from Rajshahi", source: "Scourced directly From the Gardens all around Bangladesh",
            stock: "Out of stock", visibility: false, available: false, image: image3
        },
        {
            id: "4", title: "Fazli", description: "Sourced from Rajshahi", source: "Scourced directly From the Gardens all around Bangladesh",
            stock: "Out of stock", visibility: false, available: false, image: image4
        },
        {
            id: "5", title: "Amropolli", description: "Sourced from Rajshahi", source: "Scourced directly From the Gardens all around Bangladesh",
            stock: "Out of stock", visibility: false, available: false, image: image5
        }
    ];



    //List Button Style

    const [grid, setGrid] = useState(true)
    const [list, setList] = useState(false)

    const handleGrid = () => {
        setGrid(true);
        setList(false);
    }

    const handleList = () => {
        setGrid(false);
        setList(true);
    }

    return (
        <div>
            {/* Left Side bar 1 */}
            <div className="navbar-fixed-left d-flex justify-content-center">
                <div>
                    <button onClick={handleDashboard} className={dasboard ? "button-style-active" : "button-style"}>
                        <span className="leftIcon"><TiHomeOutline /></span>
                        <br />
                    General Dashboard
                </button>

                    <button onClick={handleProduct} className={product ? "button-style-active" : "button-style"}>
                        <span className="leftIcon"><FaShoppingBag /></span>
                        <br />
                    Manage Products
                </button>

                    <button onClick={handleUser} className={users ? "button-style-active" : "button-style"}>
                        <span className="leftIcon"><BsEye /></span>
                        <br />
                    Manage Users
                </button>

                    <button onClick={handleOrders} className={oreders ? "button-style-active" : "button-style"}>
                        <span className="leftIcon"><TiDocument /></span>
                        <br />
                    Manage Orders
                </button>

                    <button onClick={handleStock} className={stock ? "button-style-active" : "button-style"}>
                        <span className="leftIcon"><TiDocument /></span>
                        <br />
                    Manage Stocks
                </button>

                    <button onClick={handleDelivery} className={delivery ? "button-style-active" : "button-style"}>
                        <span className="leftIcon"><TiDocument /></span>
                        <br />
                    Manage Delivery
                </button>
                </div>
            </div>

            {/* Left Sub sidebar 2 */}

            <div className="navbar-fixed-left2">
                {
                    dasboard ? <div>
                        <h6 className="text-center">No Data!</h6>
                    </div>
                        : ""

                }
                {
                    product ? <div>
                        <h6 className={category ? "sidebar-font-color fontStyle" : "fontStyle"} onClick={handleCategory}>Manage Category</h6>
                        <h6 className={productClass ? "sidebar-font-color fontStyle" : "fontStyle"} onClick={handleProdcutClass}>Manage Product class</h6>
                        <h6 className={manageProdcut ? "sidebar-font-color fontStyle" : "fontStyle"} onClick={handleManageProduct}>Manage Product</h6>
                        <h6 className={manageItem ? "sidebar-font-color fontStyle" : "fontStyle"} onClick={handleManageItem}>Manage Item</h6>

                    </div>
                        : ""

                }
                {
                    users ? <div>
                        <h6 className="text-center">No Data!</h6>
                    </div>
                        : ""

                }
                {
                    oreders ? <div>
                        <h6 className="text-center">No Data!</h6>
                    </div>
                        : ""
                }
                {
                    stock ? <div>
                        <h6 className="text-center">No Data!</h6>
                    </div>
                        : ""
                }
                {
                    delivery ? <div>
                        <h6 className="text-center">No Data!</h6>
                    </div>
                        : ""
                }
            </div>

            {
                category ? <div className="container">
                    <h3 className="text-danger">No Data Found!</h3>
                </div> : ""
            }
            {
                productClass ? <div className="container">
                    <h3 className="text-danger">No Data Found!</h3>
                </div> : ""
            }
            {
                manageProdcut ? <div className="container">
                    <div className="btnDiv d-flex justify-content-center">
                        <button onClick={handleGrid} className={grid ? "btnStyle active" : "btnStyle inActive"}><BsFillGridFill /></button>
                        <button onClick={handleList} className={list ? "btnStyle active" : "btnStyle inActive"}><MdReorder /></button>
                    </div>
                    <div className="row">

                    </div>
                </div> : ""
            }
            {
                manageItem ? <div className="container">
                    <h3 className="text-danger">No Data Found!</h3>
                </div> : ""
            }
            <div className="container">
                <div className="row">
                    {
                        grid ? allProdcut.map(product => <Product key={product.id} prodcut={product}></Product>) : ""
                    }
                </div>
            </div>

        </div>
    );
};

export default Dashboard;