import './Search.css'
import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            backButton:false,
            input:"",
        }
    }
    
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handlerOnClick = ()=>{
        let result = ""
        let { setfilterImageData } = this.props;
        setfilterImageData(result)
        this.setState({
            backButton:false
        })
    }

    filterData = async () => {
        const datas = this.props.data
        let { setfilterImageData } = this.props;
        let result = "";
        //If  user search input is not empty then try to match the search result with title
        if(this.state.input !== ''){
            result = await datas.filter( data => data.data.title.toLowerCase().includes(this.state.input))
            if(result.length <= 0){
                alert("Sorry, we can't find any image that  match your search ")
            }
            else{
                setfilterImageData(result)
                this.setState({
                    backButton:true
                })
            }
        }
    }

    render() {
        return (
            <div>
                <div className="input">
                    <input type="text" 
                        className="inputBox" 
                        placeholder="Search by title " 
                        name = "input"  
                        value={this.state.input}  
                        onChange = {event => this.handleChange(event)}
                        />
                    <button className="button" onClick={this.filterData}><i className="fa fa-search"></i></button>
                </div>
                {this.state.backButton &&
                    (
                        <button className = "back-button" onClick={this.handlerOnClick}> back </button>
                    )
                }
            </div>
        )
    }
}

