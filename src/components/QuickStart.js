import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class QuickStart extends Component {
    static get propTypes() { 
        return { 
            frameworks: PropTypes.any 
        }; 
    }
    
    render() {
        return (
            <div className="row py-5 px-2 bg-light justify-content-center">
                <div className="col-lg-9">
                    <h4 className="pb-3">QUICK START LOCALLY</h4>
                    Select your preferences and run the install command. 
                    Stable represents the most currently tested and supported version of kaggledatasets. 
                    This should be suitable for many users. 
                    Preview is available if you want the latest, not fully tested and supported, 
                    1.0 builds that are generated nightly. 
                    Please ensure that you have met the prerequisites below (e.g., numpy), 
                    depending on your package manager. 
                    You can also install previous versions of kaggledatasets.
                    <div className="row py-5 px-3">
                        <div className="col-lg-2 col-sm-12 download-menu mt-1">
                            <div className="py-1">Build</div>
                        </div>
                        <div className="col-lg-10 col-sm-12 mt-1">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12 px-1 pr-0">
                                    <div className="download-menu-option focus py-1 px-3">Stable (1.0)</div>
                                </div>
                                <div className="col-lg-6 col-sm-12 px-1 pr-0">
                                    <div className="download-menu-option py-1 px-3">Preview (Nightly)</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-12 download-menu mt-1">
                            <div className="py-1">Your OS</div>
                        </div>
                        <div className="col-lg-10 col-sm-12 mt-1">
                            <div className="row">
                                <div className="col-lg-4 col-sm-12 px-1 pr-0">
                                    <div className="download-menu-option py-1 px-3">Linux</div>
                                </div>
                                <div className="col-lg-4 col-sm-12 px-1 pr-0">
                                    <div className="download-menu-option py-1 px-3">Mac</div>
                                </div>
                                <div className="col-lg-4 col-sm-12 px-1 pr-0">
                                    <div className="download-menu-option focus py-1 px-3">Windows</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-12 download-menu mt-1">
                            <div className="py-1">Package</div>
                        </div>
                        <div className="col-lg-10 col-sm-12 mt-1">
                            <div className="row">
                                <div className="col-lg-4 col-sm-12 px-1 pr-0">
                                    <div className="download-menu-option py-1 px-3">Conda</div>
                                </div>
                                <div className="col-lg-4 col-sm-12 px-1 pr-0">
                                    <div className="download-menu-option focus py-1 px-3">Pip</div>
                                </div>
                                <div className="col-lg-4 col-sm-12 px-1 pr-0">
                                    <div className="download-menu-option py-1 px-3">Source</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-12 download-menu focus mt-1">
                            <div className="py-3">Run this command:</div>
                        </div>
                        <div className="col-lg-10 col-sm-12 mt-1">
                            <div className="row">
                                <div className="col-lg-12 col-sm-12 px-1 pr-0">
                                    <div className="download-menu-option py-3 px-3">
                                        <code className="text-dark text-bold">pip install kaggledatasets</code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="pt-3">
                        <Link to="/get-started" >Previous versions of kaggledatasets</Link>
                    </p>
                </div>
                {
                    this.props.frameworks === true ? (
                        <div className="col-lg-3">
                            <h4 className="pb-3">QUICK START WITH FRAMEWORKS</h4>
                            Get up and running with kaggledatasets quickly through popular frameworks.
                            <div className="row p-3">
                                <div className="card col-lg-12 logo-sk m-1">
                                    <div className="card-body">
                                        <img src="images/logo_scikit_learn.png" className="logo-x my-1 mx-2" alt="Scikit Learn" /> 
                                        Scikit Learn
                                    </div>
                                </div>
                                <div className="card col-lg-12 logo-tf m-1">
                                    <div className="card-body">
                                        <img src="images/logo_tensorflow.png" className="logo-x my-1 mx-2" alt="Tensorflow" />
                                        Tensorflow
                                    </div>
                                </div>
                                <div className="card col-lg-12 logo-py m-1">
                                    <div className="card-body">
                                        <img src="images/logo_pytorch.png" className="logo-x my-1 mx-2" alt="PyTorch" />
                                        PyTorch
                                    </div>
                                </div>
                            </div>
                        </div>
                     ) : ''
                }
            </div>
        )
    }
}

export default QuickStart;