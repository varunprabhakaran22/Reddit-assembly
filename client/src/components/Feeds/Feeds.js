import React, { Component } from 'react'
import './Feeds.css'
export class Feeds extends Component {
    
    //Method to handel the on click event
    handlerOnClick = ()=>{
        this.props.setShowSingleImage(this.props.data)
    }


    render() {
        const {title, thumbnail} = this.props.data
        let defaultImage = "https://static.thenounproject.com/png/340719-200.png"
        return (
            <div className = "image-container">
                <img className = "image-size"
                    src={(thumbnail !== "self" )? thumbnail : defaultImage}
                    alt={""}
                    onClick = {this.handlerOnClick}
                />
                <h1 className = "image-title">{title}</h1>
            </div>
        )
    }
}

export default Feeds
