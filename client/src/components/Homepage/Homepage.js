import React, { Component } from 'react'
import axios from 'axios'
import Header from '../Header/Header';
import Feeds from '../Feeds/Feeds'
import Feed from '../Feed/Feed'
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
            console.log(imageData);
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
            console.log(this.state.imageData);
        }
        catch(error){
            console.log(error)
        }

        // this.setState({
        // feeds: res.data.data.children.map(d => {
        //     return {
        //     title: d.data.title.replace(/&amp;/g, '&'),
        //     author: d.data.author,
        //     url: d.data.url,
        //     thumbnail: d.data.thumbnail
        //     };
        // }),
        // loading: false
        // })
    }

    //Method to update the state value
    setResult = (result) => {
        this.setState({
            result
        }) 
    }
    // render(){
    //     const { data,result,loading} = this.state
    //     let listItems = result.length > 0 ? result : data
    //     let displayList = listItems.map(list => <Card key={list["Course Id"]} list={list}/>)
    //     return (
    //         <div>
    //             <Input data={ data } setResult={this.setResult} setLoading={this.setLoading} />
    //             <div className ="sub-menu">
    //                 <Detail total={data.length} found={displayList.length}/>
    //                 <Sort data ={listItems}  setResult= {this.setResult}/>
    //             </div>
    //             {
    //                 loading ? <Load />
    //                 :
    //                 <div className="cardHolder">
    //                     {
    //                         displayList
    //                     }
    //                 </div>
    //             }
    //         </div> 
    //     )
    // }

    // setShowImageDetails = (showImageDetails)=>{
    //     console.log("show method executing intial state ")
    //     console.log(this.state.showImageDetails)
    //     this.setState({
    //         showImageDetails:true
    //     },()=>console.log(this.state.showImageDetails) )         
    // }

    setShowSingleImage = (data)=>{
        console.log("show method executing intial state ")
        console.log(this.state.singleImage)
        console.log(this.state.showSingleImage)
        console.log("data from Feed ")
        console.log(data)
        this.setState({
            showSingleImage:data,
            singleImage:true
        },()=>{
            console.log(this.state.singleImage) 
            console.log(this.state.showSingleImage)
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
                        <Feed data = {showSingleImage} />
                    ) 
                    :
                    (
                        <div className = "homepage-container">
                            <div className = "image-grid">
                                { image }
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
