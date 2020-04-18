import React, { Component } from 'react'
import "./Feed.css"
export class Feed extends Component {
    
    render() {
        console.log("Feed feed component")
        const {title, url,author , thumbnail}  = this.props.data
        let defaultImage = "https://static.thenounproject.com/png/340719-200.png"
        return (
            <div className = "container">
                <div className = "image-container-view">
                    <img className = "image-size-view"
                        src={(thumbnail !== "self" )? url : defaultImage}
                    />
                    <h1 className = "image-title-view">{title}</h1>
                    <p className = "author-name"><b> Author :</b>  {author}</p>
                </div>
            </div>
        )
    }
}

export default Feed
