import React from 'react'
class InputTodo extends React.Component{
    constructor(){
        super();
        this.state = {
            title:""
        }
    }    
    todoToAddChanged = e => {
        // console.log('changed called')
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state.title);
        this.props.addTodoProps(this.state.title)
        this.setState({
            title:""
        })
    }
    render(){
        return(
            <>
                <form className="input-todo" onSubmit={this.handleSubmit}>
                    <input type="text" name="title" placeholder="Add todo.." onChange={this.todoToAddChanged} value={this.state.title}/>
                    <input type="submit" value="Add"/>
                </form>
            </>
        )
    }
}
export default InputTodo;