import React, { Component } from 'react';
import "./todo.css"
export default class ToDoApp extends Component {

    constructor() {
        super();
        this.state = {
            todos: [],
            value: "",
            editing: false,
            currentid: "",
            currentValue: "",
        };
    }

    //Sync state.value to Add button 
    onChange = (e) => {
        this.setState({ value: e.target.value });
    };

    //Get The Id of task to delete
    //create new array by filtering all tasks except tasl with itemId 
    onDeleteTask = (itemId) => {
        this.setState({
            todos: [...this.state.todos].filter((task) => task.id !== itemId),
        });
    };

    //Change State To Edit
    //- currentid : id edited task
    //- currentValue: value
    onToggleEdit = (todo) => {
        this.setState({ editing: true });
        this.setState({ currentid: todo.id });
        this.setState({ currentValue: todo.name });
    };

    //Add new to do task
    onAddTask = (e) => {
        e.preventDefault();

        const obj = {
            name: this.state.value,
            id: Date.now(),
        };
        if (this.state.value !== "") {
            this.setState({ todos: this.state.todos.concat(obj) });
            this.setState({ value: "" });//Clean Text BOX
        }
    };

    //Search id in list and update the item name in list
    onEditTodo = (id, newValue) => {
        this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.name = newValue;
            }
        });
    };

    onSubmitEditTodo = (e) => {
        e.preventDefault();

        this.onEditTodo(this.state.currentid, this.state.currentValue);
        this.setState({ editing: false });
    };

    onEditInputChange = (e) => {
        this.setState({ currentValue: e.target.value });
    };


    render() {

        const mylist = this.state.todos.map((todo) => (
            <li className="todo_item">
                {todo.name}
                <button onClick={() => this.onToggleEdit(todo)}>Edit</button>
                <button onClick={() => this.onDeleteTask(todo.id)}>Remove</button>
            </li>
        ));


        return (
            <>
                <div className="App">
                    {this.state.editing === false ? (
                        <form onSubmit={this.onAddTask}>
                            <input
                                placeholder="insert task"
                                value={this.state.value}
                                onChange={this.onChange}
                            />
                            <button onClick={this.onAddTask}>Add Item</button>
                        </form>
                    ) : (
                        <form onSubmit={this.onSubmitEditTodo}>
                            <input
                                placeholder="edit your task"
                                value={this.state.currentValue}
                                name={this.state.currentValue}
                                onChange={this.onEditInputChange}
                            />
                            <button onClick={this.onSubmitEditTodo}>Update Item</button>
                        </form>
                    )}

                    <ul className="todo_wrapper">{mylist}</ul>
                </div>
            </>
        );
    }




}
