import React, {Component} from 'react';
import QuickStart from '../components/QuickStart';

class GetStarted extends Component {
    render() {
        return (
            <>
                <QuickStart />
                <div className="row justify-content-center py-5">
                    <div className="col-lg-10 col-sm-12">
                        <h3 className="pb-2">Installing on Linux</h3>
                        <div className="bg-light">
                            <pre className="p-3">
                                <span className="text-pre text-muted"># if you are using pip</span><br />  
                                pip install kaggledatasets<br /><br />
                                <span className="text-pre text-muted"># if you are using conda</span><br />  
                                conda install kaggledatasets
                            </pre>
                        </div>
                        <h3 className="pb-2">Installing on macOS</h3>
                        <div className="bg-light">
                            <pre className="p-3">
                                <span className="text-pre text-muted"># if you are using pip</span><br />  
                                pip install kaggledatasets<br /><br />
                                <span className="text-pre text-muted"># if you are using conda</span><br />  
                                conda install kaggledatasets
                            </pre>
                        </div>
                        <h3 className="pb-2">Installing on Windows</h3>
                        <div className="bg-light">
                            <pre className="p-3">
                                <span className="text-pre text-muted"># if you are using pip</span><br />  
                                pip install kaggledatasets<br /><br />
                                <span className="text-pre text-muted"># if you are using conda</span><br />  
                                conda install kaggledatasets
                            </pre>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default GetStarted;