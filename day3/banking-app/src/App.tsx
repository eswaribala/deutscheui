import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import BankLogo from './Logo/logo'
import {BankMenu} from "./BankMenu/bankmenu";
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
      currentTime:new Date(),
      //props
      topMenu:[
        {label: 'Home', icon: 'pi pi-fw pi-home', command: () => { window.location.hash = "/Home" }},
        {label: 'Admin', icon: 'pi pi-fw pi-calendar', command: () => { window.location.hash  = "/Admin" }},
        {label: 'Accounts', icon: 'pi pi-fw pi-user', command: () => { window.location.hash  = "/Accounts" }},
        {label: 'FAQ', icon: 'pi pi-fw pi-file', command: () => { window.location.hash  = "/FAQ" }},
        {label: 'Aboutus', icon: 'pi pi-fw pi-cog', command: () => { window.location.hash  = "/Aboutus" }},
        {label: 'Help', icon: 'pi pi-fw pi-question', command: () => { window.location.hash  = "/Help" }},
      ]

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
        <section>
        <header className="header">
        <BankLogo/>
        <h1 className="multicolortext">Global Bank</h1>
          {/*display time*/}
        <h4>{this.state.currentTime.toLocaleTimeString()}</h4>
        </header>
        <section>
          <BankMenu items={this.state.topMenu}/>
        </section>
        </section>
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
