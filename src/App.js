import React, { Component } from 'react';
import './App.css';
import Web3 from 'web3';
import Test from './contracts/Test.json';
import TruffleContract from 'truffle-contract';
class App extends Component {
  constructor(){
    super();
    this.state = {
      owner: 'Nadie',
      message: 'Nada',
      account: '0x0'
    }

    this.web3Provider = new Web3.providers.HttpProvider('http://ropsten.infura.io/v3/13eb2f7a24d048379237d1a85912203c');
    this.web3 = new Web3(this.web3Provider);
    this.test = new TruffleContract(Test);
    this.test.setProvider(this.web3Provider);
  }

  componentDidMount(){
    this.test.deployed()
    .then((instance)=>{
      console.log(instance);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My First Dapp</h1>
        </header>
        <div>
          <h1>{this.state.owner}</h1>
          <p>{this.state.message}</p> 
          <p>{this.state.account}</p>
        </div>
      </div>
    );
  }
}

export default App;
