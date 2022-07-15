import React, { Component } from 'react';
import { ItemConsumer } from '../Context';
import ItemItem from './ItemItem'

export default class ItemList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Qty</th>
                                        <th scope="col">Exp</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <ItemConsumer>
                                        {(value) => {
                                            console.log(value)
                                            return value.items.map(item => {
                                                return <ItemItem key={item.id} item={item} />
                                            })
                                        }}
                                    </ItemConsumer>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )


    }
}