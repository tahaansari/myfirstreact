import React from 'react';
import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import uuid from "uuid/v4";
class TodoContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            todoItems:[
                {
                    id:uuid(),
                    title:'learn react js basic',
                    completed:true
                },
                {
                    id:uuid(),
                    title:'react hooks',
                    completed:false
                },
                {
                    id:uuid(),
                    title:'redux',
                    completed:false
                },
                {
                    id:uuid(),
                    title:'apply react in real project',
                    completed:false
                },
                {
                    id:uuid(),
                    title:'learn react native',
                    completed:false
                }
            ]
        }
    }
    handleChange = id => {
        this.setState({
            todoItems: this.state.todoItems.map( todo => { 
                todo.id === id ? todo.completed = !todo.completed : todo.completed = todo.completed;
                return todo;
            })
        })
    }
    delTodo = id => {
        // console.log('del '+id)
        this.setState({
            todoItems: [...this.state.todoItems.filter(todo=>{
                    return todo.id !== id;
            })]
        })
    }
    addTodoItem = title => {
        // console.log(title);
        const newTodo = {
            id:uuid(),
            title:title,
            completed:false
        }
        this.setState({
            todoItems:[...this.state.todoItems,newTodo]
        })
    };
    render(){
        return (
            <>
                <div>
                    <Header/>
                    <InputTodo addTodoProps={this.addTodoItem} />
                    <TodoList 
                    todos={this.state.todoItems}  
                    handleChangeProps={this.handleChange} 
                    deleteTodoProps={this.delTodo} />
                </div>
            </>
        )
    }
}
export default TodoContainer;