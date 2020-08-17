import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { HashRouter, Switch, Route } from "react-router-dom";
import Landing from './pages/Landing.js';
import BrakesB2C from "./pages/BrakesB2C.js";
import SpecacApp from "./pages/SpecacApp.js";
import SpecacVR from "./pages/SpecacVR.js";
import ScrollToTop from "./components/ScrollToTop";
import BackTop from "./components/BackToTop";
import ContactForm from "./components/ContactForm";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-WXM6WHF",
};

TagManager.initialize(tagManagerArgs);


function App() {



  return (
    <React.Fragment>
      <HashRouter basename="/">
        <ScrollToTop>
          <Container>
            <Row>
              <Col>
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route path="/brakes-b2c" component={BrakesB2C} />
                  <Route path="/specac-app" component={SpecacApp} />
                  <Route path="/specac-vr" component={SpecacVR} />
                </Switch>

                <BackTop />
              </Col>
            </Row>

            <Row id="contact">
              <Col>
                <ContactForm />
              </Col>
            </Row>
          </Container>
        </ScrollToTop>
      </HashRouter>f
    </React.Fragment>
  );
}

export default App;
