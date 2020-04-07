import React from 'react';
class TodoItem extends React.Component{
    render(){
        const orangeCancle ={
            textDecoration: "line-through",
            color: "orange"
        }
        const {id,title,completed} = this.props.todo;
        return(
            <>
                <div className="todo-item">
                    <input  type="checkbox" 
                    checked={completed} 
                    onChange={ () => this.props.handleChangeProps(id)} />
                    <span style={ completed ? orangeCancle :  null }>{title}</span>
                    <input type="submit"  value="Delete" 
                    onClick={ () => this.props.deleteTodoProps(id) } />
                </div>
            </>
        )
    }
}
export default TodoItem;