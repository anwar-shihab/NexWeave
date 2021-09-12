import React, { Component } from 'react';
import '../Styles/SideBar.css'




export default class SideBar extends Component {
    render() {
        return (
            <div>
                <div className='logo row my-3'>
                </div>
                <a className="nav-option row pt-3">
                    <i className="fa fa-rocket col-lg-3 fa1"></i>
                    <p className='col-lg-8'>Get Started</p>
                </a>
                <a className="nav-option row pt-3">
                    <i className="fa fa-columns col-lg-3 fa1"></i>
                    <p className='col-lg-8'>Templates</p>
                </a>
                <a className="nav-option row pt-3 selected">
                    <i className="fa fa-bullhorn col-lg-3 fa1"></i>
                    <p className='col-lg-8'>Campaigns</p>
                </a>
                <a className="nav-option row pt-3">
                    <i className="fa fa-plug col-lg-3 fa1"></i>
                    <p className='col-lg-8'>Integrations</p>
                </a>
                <a className="nav-option row pt-3">
                    <i className="fa fa-window-restore col-lg-3 fa1"></i>
                    <p className='col-lg-8'>Manage Websites</p>
                </a>
                <a className="nav-option row pt-3">
                    <i className="fa fa-cog col-lg-3 fa1"></i>
                    <p className='col-lg-8'>Settings</p>
                </a>
            </div>
        )
    }
}