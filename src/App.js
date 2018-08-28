import React, {Component} from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import People from "./components/People";



function shuffleArray(charactersArray){
  for(let i =charactersArray.length -1; i> 0; i--){
    let j = Math.floor(Math.random() * (i+1));
    [charactersArray[i], charactersArray[j]] = [charactersArray[j], charactersArray[i]];
    
  }
  return charactersArray;
}
class App extends Component{

 state = {
    clickedCharacter: false,
    charactersArray : []
  }

  componentDidMount(){
    this.setState({charactersArray: characters});
  }

   toggleClick  = () => {
    this.setState({
      charactersArray: shuffleArray(this.state.charactersArray)
    });
    console.log(characters);
    console.log(this.state.charactersArray);
  }
  
 render(){
   return(
  <Wrapper>
    <Title>people List</Title>
    {this.state.charactersArray.map(character =>(
      <People
        key = {character.id}
        image={character.image} 
        clickedCharacter={this.state.clickedCharacter} 
        onClick={this.toggleClick}
      />
    ))}
    
  </Wrapper>
   );
  }
  

 
}

export default App;
