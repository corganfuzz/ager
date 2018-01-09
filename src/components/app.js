import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './app.css';
import StatsAge from './StatsAge';

class App extends Component {
  constructor() {
    super ();

      this.state = {
        newDate: '',
        birthday: '1992-06-21',
        showStats: false
      }
  }

  changeBDate () {
    console.log(this.state);
    this.setState({
      birthday: this.state.newDate,
      showStats: true
    });
  }

    render() {
      return (
        <div className="App">
          <Form inline>
            <h2>Input your date!</h2>
            <FormControl
              type="date"
              onChange={ event => this.setState({ newDate: event.target.value})}
              >
              </FormControl>
              {' '}
              <Button onClick={() =>this.changeBDate()}>
                Submit
              </Button>
              {
                this.state.showStats ?
                  <div className="fade age-stats">
                    <StatsAge date={this.state.birthday} />
                  </div>
                :
                  <div></div>
              }

          </Form>
        </div>
      )
    }
}

export default App;
