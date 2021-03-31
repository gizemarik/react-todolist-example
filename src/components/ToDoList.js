import React, { Component } from "react";
import ToDoHeader from "./ToDoHeader";
import ToDoForm from "./ToDoForm";
import ToDoItems from "./ToDoItems";
import "../ToDoList.css";

class ToDoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addNewItem = this.addNewItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addNewItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

        }

        this._inputElement.value = "";

        console.log(this.state.items);

        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key)
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div className="listComponent">
                <ToDoHeader />
                <ToDoForm addItem={this.addNewItem} />
                <ToDoItems delete={this.deleteItem}/>
            </div>

        );
    }
}

export default ToDoList;