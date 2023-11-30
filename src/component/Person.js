import React from "react";
class Person extends React.Component{

constructor(){
        super()
        this.state={
            fullName : "Sandro Tonali",
            bio : "Young Italian talented Defensive Midfielder(MDF), former Brescia, Ex AC Milan player, Winner of Seria A title and Newcastle actual player",
            imgSrc : "https://img.boutirapp.com/BN8p3m3gYjqYyczfJK9JrPCfIDaCDee4Id6DYkWvumGcsj7DVDT9tQ-V5P1DHVTczqJsyR01-AO5e6tCQaBqcx=slg",
            profession: "Football Player",
            count : 0,
            // defaultDoc : document.title
        }
        }
        // componentDidMount(){
        //     setInterval(()=> this.setState({count : this.state.count +1}), 1000);
        //     document.title = this.state.count          
        // }
        // componentDidUpdate(){    
        //     document.title = this.state.count
        // }
        // componentWillUnmount(){
        //     document.title = this.state.defaultDoc
        // }

        componentDidMount(){
            setInterval(()=> this.setState({count : this.state.count +1}), 1000);            
        }

render(){
    return (

            <div style={{display: 'flex', alignItems: 'center',flexDirection: 'column'}}>
                <h1>{this.state.count}</h1>
                <img style={{width: '300px', height:'300px'}} src={this.state.imgSrc} alt="Not found"/>
                <h1 style={{color:'red'}}>{this.state.fullName}</h1>
                <h3 >{this.state.profession}</h3>
                <h4 style={{color :'red'}}>{this.state.bio}</h4>
            </div>
    )
}
}

export default Person