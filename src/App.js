import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Movie from './components/Movie';
import Card from 'react-bootstrap/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      locationData: '',
      showMap: false,
      errorMessage: false,
      forecastArrFront: [],
      showWeather: false,
      movieArr: [],
      showMovie: false
    }
  }


  findLocation = async (event) => {
    event.preventDefault();
    let serverRoute = process.env.REACT_APP_SERVER;
    let loctionUrl = `https://eu1.locationiq.com/v1/search.php?key=pk.6f781cde9385bcbeedf3a1bda9571332&q=${this.state.searchQuery}&format=json`;
    //location
    try {

      let locationResult = await axios.get(loctionUrl);

      this.setState({
        locationData: locationResult.data[0],
        showMap: true
      })
    }

    catch {
      this.setState({
        showMap: false,
        errorMessage: true
      })
    }

    //weather
    //http://localhost:3001/weather?city_name=Amman
    try {
      // console.log(serverRoute);
      const weatherUrl = `${serverRoute}/weather?city_name=${this.state.searchQuery}`;

      const weatherData = await axios.get(weatherUrl);
      // console.log(weatherData.data);


      this.setState({
        forecastArrFront: weatherData.data,
        showWeather: true
      })
    }
    catch (errors) {
      // console.log(errors);
      this.setState({

        showWeather: false
      })
      console.log('erroe from weather')
    }



    //movies
    try {
      console.log(serverRoute);
      const movieUrl = `${serverRoute}/movie?city_name=${this.state.searchQuery}`;

      const movieData = await axios.get(movieUrl);
      // console.log(movieData.data);


      this.setState({
        movieArr: movieData.data,
        showMovie: true
      })
      console.log(this.state.movieArr)
    }
    catch (errors) {
      // console.log(errors);
      this.setState({

        showMovie: false
      })
      console.log('error from move')
    }

  }
  updateSearchQuery = (event) => {
    this.setState({
      searchQuery: event.target.value
    })
  }
  // console.log(this.state.searchQuery);
  //end of the findLocation function



  render() {
    return (
      <>
        <div className="formDiv" style={{ width: '60%', margin: 'auto', marginBottom: '30px', marginTop: '40px', border: 'solid 2px #007BFE' }}>
          <h1 style={{ textAlign: 'center' }}>City Explorer</h1>
          <Form onSubmit={this.findLocation} style={{ margin: '30px' }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label >City Name</Form.Label>
              <Form.Control type="text" placeholder=" City Name" onChange={this.updateSearchQuery} />
              <Form.Text className="text-muted">
                Type the City Name
    </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit"  >
              Find Location
  </Button>
          </Form>
        </div>


        <div className="locationDiv" style={{marginTop:'40px', margin:'auto', width:'60%'}}>

          <h2 style={{textAlign:'center'}} >{this.state.locationData.display_name}</h2>
          {this.state.showMap &&
            <img
              src={`https://maps.locationiq.com/v3/staticmap?key=pk.6f781cde9385bcbeedf3a1bda9571332&center=${this.state.locationData.lat},${this.state.locationData.lon}&zoom=<zoom>&size=<width>x<height>&format=<format>&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>`} alt='' width='100%' height='400px'
            />
          }
        </div>

        <div className="weatherDiv"  >
          {this.state.forecastArrFront.map((item, idx) => {
            return (
              <div style={{ display: 'flex', flexDirection: 'row', display: 'inline-block', margin: 'auto', marginBottom: '30px' }}>
                <Card className="culmns" border="primary" style={{ width: '20rem', height:'15rem', marginBottom: '30px', margin: '20px', flex: '1' }} key={idx}>
                  <Card.Header>weather 🌥️🌧️🌨️⛈️</Card.Header>
                  <Card.Body>
                    <Card.Title> {item.date}</Card.Title>
                    <Card.Text>
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            )
          })}


          {/* {this.state.forecastArrFront.map((item, idx) => {
            return <p key={idx}>{item.date} and {item.description}</p>

          })}
          <p>{this.state.item}</p> */}
        </div>

        <div className="movieDiv">
          {this.state.showMovie === true &&
            <Movie display={this.state.showMovie} addMovie={this.state.movieArr} />}
        </div>
      </>
    )

  }
}


export default App;