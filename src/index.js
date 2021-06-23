import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './containers/NavBar'
const Main = () =>{
    return(
        <div>
            <NavBar />
        </div>
    )
}

ReactDOM.render(<Main />, document.querySelector('#root'))