import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Home from './Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Create from './Immunization';
import OnSubmitCertify1 from './OnSubmitCertify1';
import OnSubmitCertify2 from './OnSubmitCertify2';
import SignIn from './SignIn';
import Home from './Home';
import OnSubmitDownload from './OnSubmitDownload';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="container-fluid NavbarWrapper">
          <div className="row d-flex justify-content-between align-item-center">
            <div className="col-lg-12">
                <Navbar />
            </div>
          </div>
        </div>
        
        <div className="">
          <Switch>
            <Route exact path="/">
              <SignIn />
            </Route>

            <Route exact path="/Home">
              <Home />
            </Route>

            <Route path="/HealthProfessional7">
              <OnSubmitCertify1 />
            </Route>

            <Route path="/NHAUIPCertificateSample">
              <OnSubmitCertify2 />
            </Route>

            <Route path="/DownloadPage">
              <OnSubmitDownload />
            </Route>

           {/* <Route path="/immunization">
              <Create />
            </Route>
            
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            
            <Route path="/hp">
              <HealthProfessional />
            </Route> */}
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
