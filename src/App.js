import React from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends React.Component{
  render(){
      return(
        <Router>
          <div className = "App">
            <Navbar bg="primary" variant="dark">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/content">Content</Nav.Link>
                <Nav.Link href="/footer">Footer</Nav.Link>
              </Nav>
            </Navbar>

            <Switch>
              <Route exact path="/" component={Header}/>
              <Route path="/content" component={Content}/>
              <Route path="/footer" component={Footer}/>
            </Switch>
          </div>
          </Router>
      );
  }
}
export default App;
