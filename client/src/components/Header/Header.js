import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import '../Header/Header.css'

class Header extends Component {

    handlerReload = ()=>{
        window.location.reload();
    }
    
    render() {
        return (
            <div>
                <nav>
                    <ul>    
                        <li className = "title" onClick = {this.handlerReload}> vReddit</li>
                    </ul>
                </nav>
            </div>
        ) 
    }
}

export default withRouter(Header)