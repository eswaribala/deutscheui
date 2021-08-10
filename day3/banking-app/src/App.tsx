import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import BankLogo from './Logo/logo'
import {ReactComponent} from "*.svg";
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

//stateful component
export class App extends React.Component<any, any>{


  constructor(props: App, context: any) {
    super(props, context);
    console.log("Entering constructor....");
    //create state
    this.state={
      currentTime:new Date()
    }
  }
//arrow function
  timerEvent=()=>{
    //updating the state
    this.setState({
      currentTime:new Date()
    })


}


  render() {
    console.log("Rendering the component...");
    return (
        <header className="header">
        <BankLogo/>
        <h1 className="multicolortext">Global Bank</h1>
          {/*display time*/}
        <h4>{this.state.currentTime.toLocaleTimeString()}</h4>
        </header>
    )
  }

  componentDidMount() {
     console.log("Component mounted....")
    setInterval(this.timerEvent,1000);
  }

  shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
    console.log("Update Component ....")
    return true;
  }

  componentWillUnmount() {
    console.log(" Component will mount....")
  }
}
