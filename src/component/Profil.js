import React from "react";
class Profil extends React.Component{

constructor(){
        super()
        this.state={
        Person : { fullName : "Sandro Tonali", profession: "Football Player",bio : "Young Italian talented Defensive Midfielder(MDF), former Brescia, Ex AC Milan player, Winner of Seria A title and Newcastle actual player",
            imgSrc : "https://img.boutirapp.com/BN8p3m3gYjqYyczfJK9JrPCfIDaCDee4Id6DYkWvumGcsj7DVDT9tQ-V5P1DHVTczqJsyR01-AO5e6tCQaBqcx=slg",
        },
            count : 0

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
                <img style={{width: '300px', height:'300px'}} src={this.state.Person.imgSrc} alt="Not found"/>
                <h1 style={{color:'red'}}>{this.state.Person.fullName}</h1>
                <h3 style={{textDecoration:'underline'}}>{this.state.Person.profession}</h3>
                <h4 style={{color :'green', textAlign:"center" }}>{this.state.Person.bio}</h4>
            </div>
    )
}
}

export default Profil