import React, { Component, createContext } from 'react';
import { itemsDB } from './Data';
import { v4 } from 'uuid';


const ItemContext = createContext();
class ItemProvider extends Component {
    state = {
        items: itemsDB,
        id: '',
        name: '',
        qty: '',
        expiration: new Date(),
        category: '',
        image: '',
        updateEdit: [],
        searchCategory: ''
    }

   //dynamically displays values for the header of the application
      headerObj = {
        title: 'Items Inventory | Tracker',
        text: 'Total number of item items',
        img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
    }

      convertDate = (str) => {
        console.log('from convertDate')
    };

    addItem = (item) => {
        console.log('add item function')
    }


    removeItem = (id) => {
        console.log('remove item function')
    }

    editItem = (id) => {
        console.log('edit item function')
    }


    onSaveEdit = (id) => {

        console.log('on save edit function')
    }


render() {
        console.log(this.state.items)
        return (
            <ItemContext.Provider value={{
                ...this.state,
                headerObj: this.headerObj,
                addItem: this.addItem,
                removeItem: this.removeItem,
                editItem: this.editItem,
                onSaveEdit: this.onSaveEdit
            }}>
                {this.props.children}
            </ItemContext.Provider>
        )
    }
}
const ItemConsumer = ItemContext.Consumer;

export { ItemProvider, ItemConsumer }


addItem = (item) => {
        //let tempItems = [...this.state.items];
        item.id = v4();
        let items = [...this.state.items, item]
        this.setState(() => {
            return { items: items }
        })
    }

    //returns item with id that is clicked
    getItem = (id) => {
        const item = this.state.items.find(item => item.id === id)
        return item;
    }

    removeItem = (id) => {
        let tempItems = [...this.state.items];
        tempItems = tempItems.filter(item => item.id !== id);
        //const index = itemsDB.indexOf(this.getItem(id))
        this.setState(() => {
            return {
                items: [...tempItems]
            }
        })
    }

    changeValue = (e, value1) => {
        if (value1 === 'name') {
            this.state.name = e.target.value;
        }
        if (value1 === 'image') {
            this.state.image = e.target.value;
        }
        if (value1 === 'expiration') {
            this.state.expiration = e.target.value;
        }
        if (value1 === 'category') {
            this.state.category = e.target.value;
        }
        if (value1 === 'qty') {
            this.state.qty = e.target.value;
        }
        if (value1 === 'searchCategory') {
            this.state.searchCategory = e.target.value;
        }

        const tempArr = [
            this.state.id,
            this.state.name,
            this.state.image,
            this.state.expiration,
            this.state.qty,
            this.state.category
        ]
        console.log(tempArr)
        this.setState({
            updateEdit: tempArr
        })
        console.log(this.state)
    }

    editItem = (id) => {
        let tempItems = this.state.items;
        const index = tempItems.indexOf(this.getItem(id));
        const selectedItem = tempItems[index];
        this.setState({
            id: selectedItem['id'],
            name: selectedItem['name'],
            qty: selectedItem['qty'],
            expiration: selectedItem['expiration'],
            image: selectedItem['image'],
            category: selectedItem['category']
        })
    }

    onSaveEdit = (id) => {

        if (id !== null) {
            const itemsArr = this.state.items; 
            const index = itemsArr.indexOf(this.getItem(id));
            const record = itemsArr[index];
            //update selected property name
            record['name'] = this.state.updateEdit[1];
            record['image'] = this.state.updateEdit[2];
            record['expiration'] = this.state.updateEdit[3];
            record['qty'] = this.state.updateEdit[4];
            record['category'] = this.state.updateEdit[5];
            this.setState({
                items: [...this.state.items],
                id: '', name: '', image: '', expiration: '', qty: '', category: ''
            })

            console.log(this.state)
            console.log(this.state.updateEdit)

        }
    }



 