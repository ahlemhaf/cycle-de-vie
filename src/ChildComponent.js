import React, { Component } from 'react'

export class ChildComponent extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
        
        }
        console.log(`Je suis dans le constructeur() Enfant `);
      }
componentDidMount = () => {
    console.log(`Je suis dans le componentDidMount() Enfant `);

}


  render() {
    console.log(`Mise à jour DO dans composant Enfant `);

    return (
      <div>
        {console.log(`Je suis dans le return() Enfant `)}
        hello World
      </div>
    )
  }
}

export default ChildComponent
