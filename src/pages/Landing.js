import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import QuickStart from '../components/QuickStart';

class Landing extends Component {
    render() {
        return (
            <>
                <div className="row py-3 justify-content-center">
                    <div className="col-md-7 col-lg-5 d-none d-md-block">
                        <img src="images/heading.svg" alt="Data Points" className="p-5 img-fluid" width="100%" />
                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-5 py-5">
                        <h2 className="mt-5 mb-3">
                            Collection of <span className="text-kd">Kaggle Datasets</span> ready to use for Everyone
                        </h2>
                        <p>
                            <Link to="/get-started" className="btn btn-kd">Get Started</Link>
                        </p>    
                    </div>
                </div>
                <QuickStart frameworks={true} />
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