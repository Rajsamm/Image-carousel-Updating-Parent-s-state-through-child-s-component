import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from '../components/Child';

const imagepaths = [
  'URL1',
  'URL2',
  'URL3',
  'URL4'
];

class MainContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentGP: 0 };

    this.interval = null;

    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() {
    let current = this.state.currentGP;
    let next = ++current % imagepaths.length;
    this.setState({ currentGP: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let src = imagepaths[this.state.currentGP];
    return <Child src={src} />;
  }
}

ReactDOM.render(
  <MainContainer />,
  document.getElementById('app')
);
