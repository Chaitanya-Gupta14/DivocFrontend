import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import OnSubmitCertify1 from './components/OnSubmitCertify1';
import OnSubmitCertify2 from './components/OnSubmitCertify2';
import SignIn from './components/SignIn';
import Home from './components/Home';
import OnSubmitDownload from './components/OnSubmitDownload';
import ListCertificates from './components/CertificatesTable';
import OnSubmitUpdate from './components/OnSubmitUpdate';
import OnSubmitRevoke from './components/OnSubmitRevoke';
import UpdatetheForm from './components/UpdateForm';



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

            <Route path="/UpdatePage">
              <OnSubmitUpdate />
            </Route>

            <Route path="/RevokePage">
              <OnSubmitRevoke />
            </Route>

            <Route path="/ListCertificate">
              <ListCertificates />
            </Route>

            <Route path="/UpdateForm">
              <UpdatetheForm />
            </Route>

           {/* <Route path="/immunization">
              <Create />
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
