import React, { Component } from 'react';
import Button from 'utils/Button';

class Dashboard extends Component {
    /**
     * React Render
     * @returns {Component} React component
     */
    render() {
        return (
            <>
                <div className="d-flex justify-content-between">
                    <div>
                        <h2 className="text-Haiti">Welcome back, Kathy</h2>
                        <h6 className="text-Haiti">
                            Here’s what has been happening in the last <span className="text-violet-red">7 days</span>
                        </h6>
                    </div>

                    <div className="col-lg-2 col-md-4 text-right">
                        <Button className="btn btnPrimaryViolet btn-block btnH35">Add a sub account</Button>
                    </div>
                </div>
            </>
        );
    }
}

export default Dashboard;
