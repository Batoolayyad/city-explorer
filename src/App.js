import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      locationData: '',
      showMap: false,
      errorMessage: false
    }
  }


  findLocation = async (event) => {
    event.preventDefault();

    let loctionUrl = `https://eu1.locationiq.com/v1/search.php?key=6f781cde9385bcbeedf3a1bda9571332&q=${this.state.searchQuery}&format=json`;

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
  }

updateSearchQuery = (event) => {
  this.setState({
    searchQuery: event.target.value
  })
  console.log(this.state.searchQuery);
}

render(){
  return (
<>
<h1>City Explorer</h1>
      <Form onSubmit={this.findLocation}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>City Name</Form.Label>
          <Form.Control type="text" placeholder=" City Name" onChange={this.updateSearchQuery}/>
          <Form.Text className="text-muted">
            Type the City Name
    </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" onSubmit={this.updateSearchQuery} value="Find Location">
          Submit
  </Button>
      </Form>

      <p>{this.state.locationData.display_name}</p>
      { this.state.displayMap &&
        <img
        src={`https://maps.locationiq.com/v3/staticmap?key=<YOUR_ACCESS_TOKEN>&center=${this.state.locationData.lat},${this.state.locationData.lon}`} alt=''
        />
      }
</>
      )
      
    }
  }
  export default App;