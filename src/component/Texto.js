import React from "react";

class Texto extends React.Component{

    constructor(){
        super()
        this.state={
            formulaire :''
        }
    }

    render(){
        return (
            <div>
                <input type="text" onChange={(e) => this.setState({formulaire : e.target.value})}></input>
                <h2>{this.state.formulaire}</h2>
                
            </div>
        )
    }
}

export default Texto