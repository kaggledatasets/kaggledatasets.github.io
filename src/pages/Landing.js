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
                            <Link to="/get-started" className="btn btn-kd">
                                Get Started  
                            </Link>
                        </p>    
                    </div>
                </div>
                <QuickStart frameworks={true} />
                <div className="row p-5 justify-content-center text-center">
                    <div className="col-lg-4 col-sm-12 my-3">
                        <h5>Docs</h5>
                        <p className="text-muted">Access comprehensive developer documentation for kaggledatasets</p>
                        <Link to="/docs" className="pt-2">View Docs <span className="chevron">&rarr;</span></Link>
                    </div>
                    <div className="col-lg-4 col-sm-12 my-3">
                        <h5>Resources</h5>
                        <p className="text-muted">Find development resources and get your questions answered</p>
                        <Link to="/resources" className="pt-2">View Resources <span className="chevron">&rarr;</span></Link>
                    </div>
                </div>
            </>
        )
    }
}

export default Landing;