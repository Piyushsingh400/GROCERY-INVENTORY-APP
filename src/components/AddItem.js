import React, { Component } from 'react';
import { ItemConsumer } from '../Context';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default class AddItem extends Component {

    state = {
        name: '',
        image: '',
        category: '',
        expiration: new Date(),
        qty: ''
    }

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
        console.log(this.state.name)
    }

    handleChangeImage = (e) => {
        this.setState({
            image: e.target.value
        })
    }

    handleChangeCategory = (e) => {
        this.setState({
            category: e.target.value
        })
    }

    handleChangeExpiration = (date) => {
        this.setState({
            expiration: date
        })
    }

    handleChangeQty = (e) => {
        this.setState({
            qty: e.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <ItemConsumer >
                    {(value) => {
                        //console.log(value)
                        //console.log(this.props)
                        this.handleSubmit = (e) => {
                            e.preventDefault();
                            value.addItem(this.state)
                            this.setState({
                                name: '',
                                image: '',
                                qty: '',
                                category: '',
                                expiration: new Date()
                            })
                            this.props.history.push('/')
                        }
                        // value.convertDate(1595886543865)
                        return <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="Name" >Name</label>
                                <input type="text"
                                    className="form-control"
                                    onChange={this.handleChangeName}
                                    value={this.state.name}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Image" >Image</label>
                                <input type="text"
                                    className="form-control"
                                    onChange={this.handleChangeImage}
                                    value={this.state.image}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <div className="form-control">
                                    <label htmlFor="Quantity" >Quantity</label>
                                    <input type="number"
                                        onChange={this.handleChangeQty}
                                        value={this.state.qty}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-control">
                                    <label htmlFor="ExpirationDate">Expiration</label>

                                    <DatePicker selected={this.state.expiration} required onChange={this.handleChangeExpiration} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Category" >Category</label>
                                <input type="text"
                                    className="form-control"
                                    onChange={this.handleChangeCategory}
                                    value={this.state.category}
                                    required
                                />
                            </div>
                            <div className="form-group center">
                                <button type="submit" className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    }}
                </ItemConsumer>
            </div>
        )
    }
}