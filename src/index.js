import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numCookies: 5
    }

    this.handleCookieUpdate = this.handleCookieUpdate.bind(this);
    }
  handleCookieUpdate(numCookies) {
    this.setState({
      numCookies
    });
  }
  render() {
    const {numCookies} = this.state;
    return (
    <div>
      <Greeting club={'Yale Saloon'} />
      <Timer />
      <CookieCounter numCookies={numCookies} />
      <AddRemoveCookie
        numCookies={numCookies}
        onCookieUpdate={this.handleCookieUpdate}
        />
    </div>
    )
  }
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    }
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  compoentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      this: new Date()
    })
  }
  render() {
    return(
      <h2>The time is {this.state.time.toLocaleTimeString()}</h2>
    )
  }
}
class AddRemoveCookie extends React.Component {
  render() {
    const {onCookieUpdate, numCookies } = this.props;
    return (
      <div>
        <audio id="kaching" src="http://www.mediacollege.com/downloads/sound-effects/money/cash-register-05.wav"></audio>
        <audio id="ah" src="http://www.mediacollege.com/downloads/sound-effects/crowd/aah-01.wav"></audio>
        <button onClick={() =>{ onCookieUpdate(numCookies+1);document.getElementById('kaching').play() }
        }>
          Buy Dance
          </button>
        <button onClick={() => { onCookieUpdate(numCookies-1);
          document.getElementById('ah').play() }
      }>
      Redeem Dance
      </button>
      </div>
    )
  }
}

const CookieCounter = ({numCookies=1}) => {
  // numCookies is assumed to be the props object if passed as the first argument, we can pull off the numCookies value immediately
  return (
    <h3>You have {numCookies} {numCookies === 1 ? 'lap dance' : 'lap dances'} remaining.</h3>
    )
}

const Greeting = ({club="IEEE"}) => {
  // const {club="IEEE"} = props;
  return (
    <h1>Welcome to the {club}</h1>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
