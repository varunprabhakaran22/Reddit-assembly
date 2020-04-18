import React, { Component } from 'react'
import Feed from '../Feed/Feed'
import './Feeds.css'
export class Feeds extends Component {
    
    //Method to handel the on click event
    handlerOnClick = ()=>{
        this.props.setShowSingleImage(this.props.data)
    }


    render() {
        console.log("Feeds component")
        console.log(this.props.showImageDetails)
        const {title, thumbnail} = this.props.data
        let defaultImage = "https://static.thenounproject.com/png/340719-200.png"
        return (
            <div className = "image-container">
                <img className = "image-size"
                    src={(thumbnail !== "self" )? thumbnail : defaultImage}
                    onClick = {this.handlerOnClick}
                />
                <h1 className = "image-title">{title}</h1>
            </div>
        )
    }
}

export default Feeds
