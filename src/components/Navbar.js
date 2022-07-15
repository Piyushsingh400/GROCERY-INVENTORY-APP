import React from 'react';
import { ItemConsumer } from '../Context';
import { useLocation, Link } from 'react-router-dom';


function Navbar() {
    let location = useLocation();
    //console.log(location.pathname)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-lg-8" id="banner">
                    <ItemConsumer>
                        {(value) => {
                            return (
                                <img src={value.headerObj.img} alt="groceries" />
                            )
                        }}

                    </ItemConsumer>
                </div>
                <div className="col-md-4 col-lg-4">

                    <ItemConsumer>
                        {(value) => {
                            return (

                                <div>
                                    <h1 className="mt-3">
                                        {value.headerObj.title}
                                    </h1>
                                    <h5><i>{value.headerObj.text} - {value.groceries.length}</i></h5>
                                    <button className="btn btn-lg btn-success mt-5">
                                        {location.pathname === '/' ? <Link to="/add">Add Item</Link> : <Link to="/">Home</Link>}
                                    </button>
                                </div>
                            )
                        }}

                    </ItemConsumer>
                </div>
            </div>
        </div>
    )
}

export default Navbar