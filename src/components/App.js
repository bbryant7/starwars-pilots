import React, {Component} from 'react';
import '../styles/App.css';

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
  constructor(props) {
    super(props);

    this.state = {
      vehicles: [],
      value: "",
      pilot: ""
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }



  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:
  handleNameChange(event){
    this.setState({
      value: event.target.value
    })
  }


  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:
  handleFormSubmit(event){
  event.preventDefault()
  this.setState({
    pilot: this.state.value,
    value: ""
  })
}



  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:
  // componentWillMount() {
  //   fetch('https://swapi.co/api/vehicles/')
  //   .then(r => r.json() )
  //   .then((json) => {
  //     console.log( json)
  //     this.setState({vehicleData: json})
  //   })
  // }

  componentDidMount() {
    fetch('https://swapi.co/api/vehicles/').then((response) => {
      return response.json()
    }).then((json) => {
      let vehicles = json.results;
      console.log(vehicles)
      this.setState({vehicles: vehicles})
    })
  }

  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {
    let vehicleArray = this.state.vehicles;
    let vehicles = vehicleArray.map( (vehicle) => {
      return( <div key={vehicle.name}>
      <p> name:{vehicle.name} </p>
      <p> model: {vehicle.model}</p>
      <p> manufacturer:{vehicle.manufacturer} </p>
      <p> class:{vehicle.vehicle_class} </p>
      <p> passengers:{vehicle.passengers} </p>
      <p> crew:{vehicle.crew} </p>
      <p> length:{vehicle.length} </p>
      <p> max speed: {vehicle.max_atmosphering_speed} </p>
      <p> cargo capacity: {vehicle.cargo_capacity} </p>
      </div>
    )
      })
    return (
      <div className="App">

        <div className="jumbotron">
          <h1>StarWars Pilots</h1>
          <hr/>
          <p> The vehicle of StarWars </p>
        </div>

        <div>
          <form>
            <div>
            <h1> What is your name, Pilot? </h1>
            </div>
            <div className="form-group">
              <input className="form-control col-md-3" name="name"  type="text" placeholder="Enter your name"/>
            </div>
            <div className="form-group pull-right">
              <input className="btn btn-primary btn-lg" type="submit" value="Submit"/>
            </div>
          </form>
        </div>

        <div>
          {vehicles}
        </div>

      </div>


    )};
  }


export default App;
