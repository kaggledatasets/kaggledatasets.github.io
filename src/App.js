import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Features from './pages/Features';
import GetStarted from './pages/GetStarted';
import Resources from './pages/Resources';
import Landing from './pages/Landing';
import Footer from './components/Footer';
import Header from './components/Header';
import Error from './pages/Error';  

function App() {
    return (
        <>
            <Router>
                <Header />
                <div className="container-fluid">
                    <Switch>
                        <Route exact path="/features">
                            <Features />
                        </Route>
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