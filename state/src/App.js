// les import comme d'habitude
import React, { Component } from 'react'
import Person from './component/person'

// la classe App pour afficher le contenu de notre page
export default class App extends Component {

// declaration d'une variable show qui sert de temoin pour pouvoir afficher ou pas le componenent Person
  constructor(props){
    super(props);
    this.state = {show: false};
  }
  // declaration de la fonction basculer qui va etre appelles a chaque fois que le bouton Toggle est clique
  basculer =() => this.setState({show: !this.state.show});
  
  render() {
    return (
      <div>
 {/* le rendu du App qui est un bouton qui fait appel a la fonction bsculer pour changer le temoin  */}
        <button onClick={this.basculer}> Toggle </button>
  {/* on teste si temoin (vrai) on affiche le component Person sinon on fait rien(null) */}
        {this.state.show? <Person/>: null}
             
      </div>
    )
  }
}