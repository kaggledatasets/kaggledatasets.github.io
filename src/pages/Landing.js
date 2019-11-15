import React, {Component} from 'react';

class Landing extends Component {
    render() {
        return (
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
        )
    }
}

export default Landing;