import React from 'react';
const Header = () => {

    const headerStyle = {
        fontSize:'60px', 
        color:'black'
    }
    return (
        <>
        <div className="header">
            <h1 style={headerStyle}>Simple Todo App</h1>
            <p>Please add to-dos item(s) through the input field</p>
        </div>
        </>
    )
}
export default Header;