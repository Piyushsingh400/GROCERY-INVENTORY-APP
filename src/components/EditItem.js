import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ItemConsumer } from '../Context';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default class EditItem extends Component {

    render() {

        return (

            <div className="container">
                <ItemConsumer >
                    {(value) => {
                        return <form >
                            <div className="form-group">
                                <label htmlFor="Name" >Name</label>
                                <input type="text"
                                    className="form-control"
                                    onChange={(e) => { value.changeValue(e, 'name') }}
                                    value={value.name}
                                    required
                                />

                            </div>
                            <div className="form-group">
                                <label htmlFor="Image" >Image</label>
                                <input type="text"
                                    className="form-control"
                                    onChange={(e) => { value.changeValue(e, 'image') }}
                                    value={value.image}
                                    required
                                />

                            </div>
                            <div className="form-group">
                                <div className="form-control">
                                    <label htmlFor="Quantity" >Quantity</label>
                                    <input type="text"
                                        onChange={(e) => { value.changeValue(e, 'qty') }}
                                        value={value.qty}
                                        required
                                    />
                                </div>
                            </div>


                            <div className="form-group">
                                <div className="form-control">
                                    <label htmlFor="ExpirationDate">Expiration</label>
                                    <DatePicker selected={value.convertDate(value.expiration).selected}

                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="ChemicalName" >Category</label>
                                <input type="text"
                                    className="form-control"
                                    onChange={(e) => { value.changeValue(e, 'category') }}
                                    value={value.category}
                                    required
                                />

                            </div>

                            <div className="form-group center">
                                <button onClick={() => { value.onSaveEdit(value.id) }} type="submit" className="btn btn-primary"><Link to="/">Save</Link></button>
                            </div>
                        </form>
                    }}

                </ItemConsumer>
            </div>
        )

    }
}