import React, {Component} from 'react';

class Resources extends Component {
    render() {
        return (
            <>
                <div className="row py-5 justify-content-center">
                    <div className="col-lg-10 col-md-12">
                        <h1>RESOURCES</h1>
                        <p className="text-muted">
                            Explore tutorials and other content, get your questions answered, 
                            and join the discussion with other developers.
                        </p>
                    </div>
                </div>
                <div className="row pb-5 justify-content-center">
                    <div className="col-lg-10 col-md-12">
                        <div className="card-columns">
                            <div className="card card-hover card-logo card-github p-2">
                                <a href="https://github.com/kaggledatasets" target="_blank" rel="noopener noreferrer">
                                    <div className="card-body">
                                        <h5 className="card-title text-dark">GitHub</h5>
                                        <p className="card-text text-muted">Report bugs, request features, discuss issues, and more.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="card card-hover card-logo card-kd p-2">
                                <a href="https://kaggledatasets.readthedocs.org" target="_blank" rel="noopener noreferrer">
                                    <div className="card-body">
                                        <h5 className="card-title text-dark">Docs</h5>
                                        <p className="card-text text-muted">Access comprehensive developer documentation.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="card card-hover card-logo card-slack p-2">
                                <a href="https://kaggledatasets.slack.com" target="_blank" rel="noopener noreferrer">
                                    <div className="card-body">
                                        <h5 className="card-title text-dark">Slack</h5>
                                        <p className="card-text text-muted">Discuss advanced topics. Request access: https://bit.ly/kdslack</p>
                                    </div>
                                </a>
                            </div>
                            <div className="card card-hover card-logo card-kd p-2">
                                <a href="https://kaggledatasets.readthedocs.org" target="_blank" rel="noopener noreferrer">
                                    <div className="card-body">
                                        <h5 className="card-title text-dark">Tutorials</h5>
                                        <p className="card-text text-muted">Get in-depth tutorials for beginners and advanced developers.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="card card-hover card-logo card-kd p-2">
                                <a href="https://kaggledatasets.readthedocs.org" target="_blank" rel="noopener noreferrer">
                                    <div className="card-body">
                                        <h5 className="card-title text-dark">Examples</h5>
                                        <p className="card-text text-muted">View example projects for datasets of structured, image or video.</p>
                                    </div>
                                </a>
                            </div>
                        </div>  
                    </div>
                </div>
            </>
        )
    }
}

export default Resources;