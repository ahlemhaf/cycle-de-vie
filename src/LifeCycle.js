import React, { Component } from 'react';
// import ChildComponent from './ChildComponent';

 class LifeCycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Toto',
         step:1
      }
      console.log(`Etape ${this.state.step}:Je suis dans le constructeur() `);
    }

    componentDidMount = () => {
      console.log(`Etape ${this.state.step}:Je suis dans le (componentDidMount) `);
      this.setState({
        name:this.props.name,
        step:this.state.step +1

      })
      console.log(`Etape ${this.state.step}:setState() a changé le state dans le (componentDidMount) `);

    }
    componentDidUpdate = (prevProps, prevState) => {
      console.log(`Etape ${this.state.step}:Je suis dans le omponentDidUpdate () `);
      console.log(prevState);// c'est le state de départ 
      console.log(this.state);//c'est le state actuel
    }
    componentWillUnmount(){
       console.log('je suis dans componentWillUnmount() '); 
    }
    
    
  render() {
    console.log(`Etape ${this.state.step}:Je suis dans le render() `);
    return (
      <div className='borderBox'>
        {console.log(`Etape ${this.state.step}:Mise à jour DOM `)}
 <p>Chargement: {this.state.step}</p>
 <p>Nom:{this.state.name}</p>
 {/* <ChildComponent/> */}
      </div>
    )
  }
}

export default LifeCycle
