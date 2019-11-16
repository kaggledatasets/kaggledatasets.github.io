import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="row py-2 bg-light">
                <div className="col col-lg-8 col-sm-12 d-none d-lg-block d-xl-block">
                    <img src="images/logo.jpg" alt="kaggledatasets logo" width="48" className="m-5" />
                </div>
                <div className="col col-lg-2 col-sm-6 p-5">
                    <nav className="nav flex-column">
                        <Link to="/" className="nav-link active" href="#">kaggledatasets</Link>
                        <Link to="/get-started" className="nav-link" href="#">Get Started</Link>
                        <Link to="/features" className="nav-link" href="#">Features</Link>
                        <a href="https://github.com/kaggledatasets/kaggledatasets/blob/master/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="nav-link">Contributing</a>
                    </nav>
                </div>
                <div className="col col-lg-2 col-sm-6 p-5">
                    <nav className="nav flex-column">
                        <Link to="/resources" className="nav-link active" href="#">Resources</Link>
                        <Link to="/tutorials" className="nav-link" href="#">Tutorials</Link>
                        <Link to="https://kaggledatasets.readthedocs.org" className="nav-link" href="#">Docs</Link>
                        <a href="https://github.com/kaggledatasets/kaggledatasets/issues" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub Issues</a>
                        <a href="https://kaggledatasets.slack.com" target="_blank" rel="noopener noreferrer" className="nav-link">Slack</a>
                    </nav>
                </div>
            </footer>
        )
    }
}

export default Footer;