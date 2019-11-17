import React, {Component} from 'react';

class Error extends Component {
    render() {
        return (
            <>
                <div className="row m-5">
                    <div className="col-md-6 col-lg-6 py-3">
                        <h1>
                            <bold style={{fontSize: "9.6rem"}}>404</bold>
                            <br />
                            <span className="text-muted">
                                We couldn&apos;t find this page
                            </span>
                        </h1>
                    </div>
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                        <img src="images/error.svg" className="p-5" width="100%" alt="Some error" />
                    </div>
                </div>
                <div className="row m-5 border-top py-3 text-muted">
                    <p>
                        If you feel like something should be here, you 
                        can <a href="https://github.com/kaggledatasets/kaggledatasets.github.io">open an issue</a> on GitHub.
                        <br />
                        Click <a href="/">here</a> to go back to the main page.
                    </p>
                </div>
            </>
        )
    }
}

export default Error;