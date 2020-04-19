import React, { Component } from 'react'
import "./Feed.css"
export class Feed extends Component {
    
    handlerOnClick = ()=>{
        this.props.setShowImage();
    }
    render() {
        const {title, url,author , thumbnail}  = this.props.data
        let defaultImage = "https://static.thenounproject.com/png/340719-200.png"
        return (
            <>
                <button className = "back-button" onClick={this.handlerOnClick}> back </button>
                <div className = "container">
                    <div className = "image-container-view">
                        <img className = "image-size-view"
                            src={(thumbnail !== "self" )? url : defaultImage}
                            alt = {""}
                        />
                        <h1 className = "image-title-view">{title}</h1>
                        <p className = "author-name"><b> Author :</b>  {author}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Feed
