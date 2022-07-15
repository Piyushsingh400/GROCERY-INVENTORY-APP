import React, { Component } from 'react';
import { ItemConsumer } from '../Context';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class ItemItem extends Component {

//convert date string
    convertDate = (str) => {
        let date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        let covertedDate = [date.getFullYear(), mnth, day].join("-");
        return moment(covertedDate, 'YYYYMMDD').fromNow();
    };
    render() {
        const { id, name, image, qty, expiration, category } = this.props.item;
        console.log(this.props.item)

        return (
            <ItemConsumer>
                {(value) => (
                    <tr>
                        <th scope="row"><img src={image} className="img-fluid rounded" id="tomato" alt={name} /></th>
                        <td>{name}</td>
                        <td>{qty}</td>
                        {/* <td>{item.expiration}</td> */}
                        <td>{this.convertDate(expiration)}</td>
                        <td>{category}</td>
                        <td><Link to={"/edit/" + id}><span onClick={() => { value.editItem(id) }} ><i className="fas fa-pen"  ></i></span></Link></td>
                        <td ><span onClick={() => { value.removeItem(id) }} ><i

                            className="fas fa-trash"></i></span></td>
                    </tr>
                )}

            </ItemConsumer>
        )
    }
}
