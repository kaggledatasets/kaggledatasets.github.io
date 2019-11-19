import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import GetStarted from './pages/GetStarted';
import Resources from './pages/Resources';
import Landing from './pages/Landing';
import Footer from './components/Footer';
import Header from './components/Header';
import Error from './pages/Error';  

function App() {
    return (
        <>
            <Router basename="/">
                <Header />
                <div className="container-fluid">
                    <Switch>
                        <Route exact path="/get-started">
                            <GetStarted />
                        </Route>
                        <Route exact path="/resources">
                            <Resources />
                        </Route>
                        <Route exact path="/">
                            <Landing />
                        </Route>
                        <Error />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </>
    );
}

export default App;