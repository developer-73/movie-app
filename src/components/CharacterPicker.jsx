import React from 'react'
import { Input, FormGroup } from 'reactstrap'

class CharacterPicker extends React.Component {
  state = {
    characters: [],
    selectedCharacter: '',
    dropdownOpen: false
  }

  componentDidMount() {
    this.fetchAllCharacters();
  }

  transformHttpToHttps(finalCharacterArray){
    return finalCharacterArray.map((charac)=>{
      return {...charac,url:charac.url.replace('http','https')};
    });
  }

  async fetchAllCharacters(){
    let characterResponseArray = [];
    let finalCharacterArray = [];

    for(let page=1;page<=9;page++){
      characterResponseArray.push(fetch(`https://swapi.dev/api/people/?page=${page}`));
    }
    
    for(let iterator=0;iterator<characterResponseArray.length;iterator++){
      const response = await characterResponseArray[iterator];
      const data = await response.json();
      finalCharacterArray.push(...data.results);
    }
    finalCharacterArray = this.transformHttpToHttps(finalCharacterArray);
    this.setState({ characters:finalCharacterArray });
    return finalCharacterArray;
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  renderDropdownItems = () => {
    let newChar = this.state.characters.map(ch => {
      return <option key={ch.url} value={ch.name}>{ch.name}</option>
    })
    return newChar;
  }

  handleChange = e => {
    let selectedCharacter = this.state.characters.find(ch => ch.name === e.target.value)
    this.setState({ selectedCharacter })
    this.props.handleChange(selectedCharacter)
  }

  render() {
    return (
      <FormGroup>
        <Input 
          type="select"
          name="select"
          onChange={this.handleChange}
          defaultValue="Choose a character"
        >
        <option value="Choose a character" disabled>Choose a Character...</option>
        {this.renderDropdownItems()}
        </Input>
      </FormGroup>
    )
  }
}

export default CharacterPicker;
