
import React from 'react';
import './App.css';
import Texto from './component/Texto';
import Profil from './component/Profil';



class App extends React.Component {
  
  constructor(){
    super()
    this.state={ 
      show : false
    }
  }

  render(){
    return(
      <div>
          <button style={{color : this.state.show ? 'red': 'green'}} onClick={()=> this.setState({show : !this.state.show})}> {this.state.show ? 'Hide': 'Show'} </button>
          { this.state.show && <Profil/>}
        <br/>
          <Texto/>
      </div>
    )
  }
}

export default App;
