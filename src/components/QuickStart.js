import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import getOS from '../utils/utils';

class QuickStart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pkg: 'pip',
            os: getOS(),
            build: '0.1.0'
        }
    }
    updatePkg(value) {
        this.setState({pkg: value});
    }
    updateOS(value) {
        this.setState({os: value});
    }
    updateBuild(value) {
        this.setState({build: value});
    }

    static get propTypes() { 
        return { 
            frameworks: PropTypes.bool
        }; 
    }

    getCommand() {
        let name = 'kaggledatasets';
        let postfix = this.state.pkg === 'conda' ? ` -c ${name}`:'';
        if (this.state.pkg === 'source') {
            return `# Follow instructions at this URL: https://github.com/${name}/${name}#from-source`
        }
        if (this.state.os === 'mac') {
            return `${this.state.pkg} install ${name}==${this.state.build}${postfix}`;
        } else if (this.state.os === 'linux' || this.state.os === 'windows') {
            return `${this.state.pkg} install ${name}${postfix}`;
        }
    }
    
    render() {
        let commonOptionClass = 'download-menu-option py-2 px-3';
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
                            <div className="py-2">Build</div>
                        </div>
                        <div className="col-lg-10 col-sm-12 mt-1">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12 px-1 pr-0" onClick={() => this.updateBuild('0.1.0')}>
                                    <div className={this.state.build !== 'nightly' ? `${commonOptionClass} focus`:`${commonOptionClass}`}>Stable (0.1)</div>
                                </div>
                                <div className="col-lg-6 col-sm-12 px-1 pr-0" onClick={() => this.updateBuild('nightly')}>
                                    <div className={this.state.build === 'nightly' ? `${commonOptionClass} focus`:`${commonOptionClass}`}>Preview (Nightly)</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-12 download-menu mt-1">
                            <div className="py-2">Your OS</div>
                        </div>
                        <div className="col-lg-10 col-sm-12 mt-1">
                            <div className="row">
                                <div className="col-lg-4 col-sm-12 px-1 pr-0" onClick={() => this.updateOS('linux')}>
                                    <div className={this.state.os === 'linux' ? `${commonOptionClass} focus`:`${commonOptionClass}`}>Linux</div>
                                </div>
                                <div className="col-lg-4 col-sm-12 px-1 pr-0" onClick={() => this.updateOS('mac')}>
                                    <div className={this.state.os === 'mac' ? `${commonOptionClass} focus`:`${commonOptionClass}`}>Mac</div>
                                </div>
                                <div className="col-lg-4 col-sm-12 px-1 pr-0" onClick={() => this.updateOS('windows')}>
                                    <div className={this.state.os === 'windows' ? `${commonOptionClass} focus`:`${commonOptionClass}`}>Windows</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-12 download-menu mt-1">
                            <div className="py-2">Package</div>
                        </div>
                        <div className="col-lg-10 col-sm-12 mt-1">
                            <div className="row">
                                <div className="col-lg-4 col-sm-12 px-1 pr-0" onClick={() => this.updatePkg('conda')}>
                                    <div className={this.state.pkg === 'conda' ? `${commonOptionClass} focus`:`${commonOptionClass}`}>Conda</div>
                                </div>
                                <div className="col-lg-4 col-sm-12 px-1 pr-0" onClick={() => this.updatePkg('pip')}>
                                    <div className={this.state.pkg === 'pip' ? `${commonOptionClass} focus`:`${commonOptionClass}`}>Pip</div>
                                </div>
                                <div className="col-lg-4 col-sm-12 px-1 pr-0" onClick={() => this.updatePkg('source')}>
                                    <div className={this.state.pkg === 'source' ? `${commonOptionClass} focus`:`${commonOptionClass}`}>Source</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-12 download-menu focus mt-1">
                            <div className="py-4">Run this command:</div>
                        </div>
                        <div className="col-lg-10 col-sm-12 mt-1">
                            <div className="row">
                                <div className="col-lg-12 col-sm-12 px-1 pr-0">
                                    <div className="download-menu-option py-4 px-3">
                                        <code className="text-dark text-bold">{this.getCommand()}</code>
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