
import React from 'react';
import './App.css';
import Person from './component/Person';
import Texto from './component/Texto';



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
          <button onClick={()=> this.setState({show : !this.state.show}) }>show</button>
          { this.state.show && <Person/>}
        <br/>
          <Texto/>
      </div>
    )
  }
}

export default App;
