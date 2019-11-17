import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends Component {
    getState(page) {
        let pathname = this.props.location.pathname;
        return pathname.substr(1, pathname.length) === page ? "active":"";
    }

    static get propTypes() { 
        return { 
            location: PropTypes.any, 
            pathname: PropTypes.any,
            substr: PropTypes.func, 
            length: PropTypes.func 
        }; 
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-kd">
                <Link className="navbar-brand" to="/">kaggledatasets</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className={"nav-item " + this.getState("get-started")}>
                            <Link to="/get-started" className="nav-link">Get Started</Link>
                        </li>
                        <li className={"nav-item " + this.getState("docs")}>
                            <a href="https://kaggledatasets.readthedocs.org" className="nav-link">Docs</a>
                        </li>
                        <li className={"nav-item " + this.getState("resources")}>
                            <Link to="/resources" className="nav-link">Resources</Link>
                        </li>
                        <li className="nav-item">
                            <a href="https://github.com/kaggledatasets/kaggledatasets" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default withRouter(Header);