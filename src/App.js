import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About'; 
import Resume from './components/Resume';
import Projects from './components/Projects';
import{BrowserRouter as Router, Route,Redirect,Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
        <div className="app">
          <div className="container app_container">
            <div className="row app_row" >

              <div className = "col-lg-3">
                  <Sidebar/>

                </div>
              

              <div className="col-lg-9 app_maincontent">
                  <Navbar/>
                  <Switch>
                  <Route exact path ="/">
                    <About/>
                  </Route>
                  <Route path ="/Resume">
                    <Resume/>
                  </Route>
                  <Route path ="/Projects" component ={Projects}/> 
                  
                 
                  <Route>
                    <Redirect to ="/"/>
                  </Route>
                  </Switch>
              </div>

          </div>
          </div>
        </div>
        </Router>
        
  );
}

export default App;
