import React, { Component } from 'react'
import axios from 'axios'
import Header from '../Header/Header';
import Feeds from '../Feeds/Feeds'
import Feed from '../Feed/Feed'
import Search from '../Search/Search'
import './Homepage.css'

export default class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageData : [],
            filterImageData :[],
            showSingleImage:{},
            singleImage:false
        }
    }

    // Api call to fetch data then doing Object Destructuring !
    componentDidMount = async()=>{
        try{
            const imageData = await axios.get('https://www.reddit.com/r/pics/.json');
            const { 
                data:{
                    data:{
                        children
                    }
                } 
            } = imageData;
    
            this.setState({
                imageData: children
            });
        }
        catch(error){
            console.log(error)
        }
    }

    //Method to update the state value
    setfilterImageData = (filterImageData) => {
        this.setState({
            filterImageData
        }) 
    }

    setShowSingleImage = (data)=>{
        this.setState({
            showSingleImage:data,
            singleImage:true
        },()=>{
           
        })         
    }

    setShowImage = ()=>{
        this.setState({
            singleImage:false
        },()=>{
        })    
    }

    render() {
        const { imageData , filterImageData, showSingleImage,singleImage} = this.state;
        let image = ""
        if(!singleImage){
            let images = filterImageData.length > 0 ? filterImageData : imageData;
            image = images.map((singleImage,index) => 
                <Feeds key = {index} 
                data ={singleImage.data}
                singleImage = {singleImage} 
                setShowSingleImage={this.setShowSingleImage}/> 
            ) 
        }
        return (
            <div>
                <Header />
                {singleImage? 
                    (
                        <Feed data = {showSingleImage}  setShowImage = {this.setShowImage}/>
                    ) 
                    :
                    (
                        <>
                            <Search data={ imageData } setfilterImageData={this.setfilterImageData} />
                            <div className = "homepage-container">
                                <div className = "image-grid">
                                    { image }
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        )
    }
}
