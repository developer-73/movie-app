import React from 'react'
import { Col, Row } from 'reactstrap'

class MovieCard extends React.Component {
  getYear = (date) => {
    date = date.split('-')
    let year = date.shift()
    return year;
  }

  getDayOfWeek = (date) => {
    let dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
  }

  render() {
    let roman = ["I", "II", "III", "IV", "V", "VI", "VII"]
    let numeral = roman[this.props.film.episode_id - 1]
    return (
      <div key={this.props.film.title} className='movie-row'>
        { this.props.last===true?
          <Row className="movie-row-content">
            <Col md={6}>
              <h3>Episode {numeral}: {this.props.film.title}</h3>
            </Col>
            <Col md={6}>
              <h3>Year: {this.getYear(this.props.film.release_date)}</h3>
            </Col>
          </Row>:
          <Row className="movie-row-content">
            <Col md={12}>
              <h3>Episode {numeral}: {this.props.film.title}</h3>
            </Col>
          </Row>
        }
      </div>
    )
  }
}

export default MovieCard;
