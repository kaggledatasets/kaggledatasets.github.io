import React, {Component} from 'react';

class Error extends Component {
    render() {
        return (
            <>
                <div className="row pt-5 pb-2">
                    <div className="col-md-12 col-lg-6">
                        <h1 style={{fontSize: "9.6rem"}} align="center">
                            <bold>404</bold>
                        </h1>
                    </div>
                    <div className="col-md-12 col-lg-6 py-5">
                        <h1 className="display-4 text-muted text-bold">
                            We couldn&apos;t find this page
                        </h1>
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