import React, { Component } from 'react';
import PostData from "../data.json";



export default class Sample extends Component {
    render() {
        return (
            <div className="content-container col-lg-10 m-0 p-0">
                <div className="row mt-3">
                    <div className="greetings col-lg-6 d-flex">
                        <i className="fa fa-bars"></i>
                        <p>
                            How are you doing today <strong>inder?</strong>
                        </p>
                        <label>
                            &#128075;
                        </label>
                    </div>
                    <div className="profile col-lg-6 row">
                        <select className="arrows col-lg-6" id="cars">
                            <option name="web-campaign">Web Campaign</option>
                            <option name="sample1">sample1</option>
                            <option name="sample2">sample2</option>
                        </select>
                        <p className="col-lg-3 cred">
                            Credits:<strong>200</strong>
                        </p>
                        <div className="col-lg-3 sett">
                            <i className="fa fa-question-circle fa-2x"></i>
                            <i class="fa fa-circle-thin fa-2x"></i>
                            <i className="fa fa-user"></i>
                        </div>
                    </div>
                </div>

                <div className="row bdr1"></div>

                <div className="layer2 row mt-4">
                    <h3 className="col-6">Campaigns</h3>
                    <div className="col-6 text-end">
                        <i className="fa fa-refresh"></i>
                        <a className="new-button" href="#">
                            <label>+ Create a new campaign</label>
                        </a>
                    </div>
                </div>

                <div className="row layer3 mt-2">
                    <div className="col-2 all selected1"><label>All Campaigns</label></div>
                    <div className="col-2 all"><label>Quick Campaigns</label></div>
                    <div className="col-2 all"><label>CSV Campaigns</label></div>
                    <div className="col-3 all"><label>URL Override Campaigns</label></div>
                    <div className="col-2 offset-1 form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            Show Archieved
                        </label>
                    </div>
                </div>

                <div className="row layer4 mt-3">
                    <div className="col-4">
                        <input className="form-check-input cmp" type="checkbox" value="" id="flexCheckDefault" />
                        Campaign Name
                    </div>
                    <div className="col-1">
                        status
                        <i className="fa fa-sort-down"></i>
                    </div>
                    <div className="col-2 text-center">
                        Created at
                        <i className="fa fa-sort-up"></i>
                    </div>
                    <div className="col-2">
                        Method
                        <i className="fa fa-sort-down"></i>
                    </div>
                    <div className="col-1">
                        Media
                        <i className="fa fa-sort-down"></i>
                    </div>
                    <div className="col-2">
                        Actions
                    </div>

                </div>

                {
                    PostData.map((postDetail, index) => {
                        return <div className="row layer5 mt-3">
                            <div className="col-4">
                                <input className="form-check-input cmp" type="checkbox" value="" id="flexCheckDefault" />
                                {postDetail.Name}
                            </div>
                            <div className="col-1">
                                <label className={postDetail.Status}>
                                    {postDetail.Status}
                                </label>
                            </div>
                            <div className="col-2 text-center">
                                {postDetail.CreatedAt}
                            </div>
                            <div className="col-2">
                                {postDetail.Method}
                            </div>
                            <div className="col-1">
                                <i className="fa fa-video-camera"></i>
                                {postDetail.media}
                            </div>
                            <div className="col-2">
                                <i className="fa fa-refresh"></i>
                                <i className="fa fa-download"></i>
                                <i className="fa fa-save"></i>
                            </div>

                        </div>
                    })
                }

            </div>
        )
    }
}