import React, {Component} from 'react';
import axios from 'axios';

class Landing extends Component{
    constructor(){
        super();
        this.state = {
            platform: 'PC',
            username: ''
        }
        this.pc = this.pc.bind(this)
        this.ps4 = this.ps4.bind(this)
        this.x1 = this.x1.bind(this)
        this.test = this.test.bind(this)
        this.handleUsername = this.handleUsername.bind(this)
    }


    test(){
        axios
            .get(`https://api.mozambiquehe.re/bridge?platform=${this.state.platform}&player=${this.state.username}&auth=X1EOqOa6Vpeducoza5th`)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    pc(){
        this.setState({
            platform: 'PC'
        })
    }

    ps4(){
        this.setState({
            platform: 'PS4'
        })
    }

    x1(){
        this.setState({
            platform: 'X1'
        })
    }

    handleUsername(e){
        this.setState({username: e.target.value})
    }
    render(){
        return (
            <div className="landing">
                <div className="search">
                    <div className="search-text">
                        <h2>CHECK PLAYER AND RANK STATS</h2>
                        <button onClick={this.test}>test</button>
                        <button onClick={this.pc}>PC</button>
                        <button onClick={this.ps4}>PS4</button>
                        <button onClick={this.x1}>X1</button>
                        
                        <input placeholder='Search User...' type="text" onChange={this.handleUsername}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;