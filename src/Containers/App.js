import React, { Component } from "react";
import CardList from "../Components/CardList";
// import { robots } from "./robots"; }
import SearchBox from "../Components/SearchBox"
import Scroll from "../Components/Scroll"
import Errorboundry from "../Components/Errorboundry";
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state={
            robots: [],
            searchfield:''
        }
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => 
            this.setState({ robots: user}))}


    onsearchChange = (event) => {
        this.setState({searchfield: event.target.value})

    }
    render() {
            const filterbots = this.state.robots.filter(robots => {
                return (
                    robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))
            })

    return(
    <div className='tc'>
     <h1 className= 'f1'>Robotron</h1>
     <SearchBox searchChange ={ this.onsearchChange } />
     <Scroll>
        <Errorboundry>
            <CardList robots = { filterbots }/>
        </Errorboundry>
    </Scroll>
    </div>
        )
    }
}





export default App;
