import React, {Component} from 'react';

class Landing extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-sm-12 col-md-5 offset-md-1 col-lg-5 offset-lg-1">
                        <img src="images/heading.svg" alt="Data Points" className="p-5" width="100%" />
                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-5 py-5">
                        <h2 align="center" className="my-5">
                            Collection of <span className="text-kd">Kaggle Datasets</span> ready to use for Everyone
                        </h2>
                    </div>
                </div>
                <div className="row py-5 px-2 bg-light">
                    <div className="col-lg-9">
                        Select your preferences and run the install command. 
                        Stable represents the most currently tested and supported version of kaggledatasets. 
                        This should be suitable for many users. 
                        Preview is available if you want the latest, not fully tested and supported, 
                        1.0 builds that are generated nightly. 
                        Please ensure that you have met the prerequisites below (e.g., numpy), 
                        depending on your package manager. 
                        You can also install previous versions of kaggledatasets.
                    </div>
                    <div className="col-lg-3">
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
                </div>
                <div className="row p-5">
                    <div className="col-lg-4 col-sm-12">

                    </div>
                    <div className="col-lg-4 col-sm-12">
                        
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        
                    </div>
                </div>
            </>
        )
    }
}

export default Landing;