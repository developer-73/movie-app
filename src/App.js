import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getPerson } from './actions/characterAction'

import './css/App.css';
import CharacterPicker from './components/CharacterPicker'
import MovieCard from './components/MovieCard'
import loader from './img/loader.gif'
import logo2 from './img/logo2.jpg'


class App extends React.Component {
  state = {
    person: '',
    currentFilm: {},
    loading: false,
    row: true,
  }

  handleChange = person => {
    this.setState({ person: person.name })
    this.props.getPerson(person)
    this.showLoader()
  }

  sortFilms = films => {
    films = films.sort((a, b) => {
      if (a.release_date < b.release_date) return -1;
      if (a.release_date > b.release_date) return 1;
      return 0;
    })
    return films
  }

  renderFilms = (films) => {
    let newFilms =
      films.length ?
        this.sortFilms(films).map(f => {
          return <MovieCard
            film={f}
            row={this.state.row}
            key={f.episode_id} />
        })
        : <span style={{ "margin": "20px auto" }}>
            No films listed
          </span>
    return newFilms
  }

  showLoader = () => {
    this.setState({ loading: true })
    setTimeout(() => this.setState({ loading: false }), 1000)
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo2} alt="Movie Poster" width="150px" />
          <div className="App-header-center">
            <CharacterPicker handleChange={this.handleChange} />
          </div>
        </header>

        {this.props.loading || this.state.loading ?
          <div className="movies">
            <img src={loader} width="300px" alt="loading" className="loader" />
          </div> : null
        }

        {this.state.person && !this.state.loading &&
          <h3 className="subheader-caption">Films that {this.state.person} appears in:</h3>
        }

        {this.props.loading === false &&
        this.props.films &&
        !!this.props.films.length &&
          <div className="movies">
            {this.renderFilms(this.props.films)}
          </div>
        }
    

        {this.state.person && !this.state.loading &&
          <h3 className="subheader-caption"> Last appearence of {this.state.person} :</h3>
        }

        {this.props.loading === false &&
          this.props.films &&
          !!this.props.films.length &&
            <div className="movies">
              <MovieCard
                film={this.props.films[this.props.films.length-1]}
                row={this.state.row}
                last={true}
              />
            </div>
          }

        {this.props.loading === false &&
        this.state.loading === false &&
        this.props.films &&
        this.props.films.length === 0 &&
          'No films available'}

        {!this.props.person && !this.props.loading &&
          <div className="welcome">
            <div className="welcome-inner">
              <h1>Welcome!</h1>
              <h2>Choose a Character</h2>
              <h2>Using the Menu Above</h2>
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.characterReducer.loading,
    person: state.characterReducer.person,
    films: state.characterReducer.films
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators( { getPerson }, dispatch )
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
