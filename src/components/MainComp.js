import React, { Component } from 'react';
import { AiOutlineCheckCircle } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';


class MainComp extends Component {



    render() {
        return (
            <div>
                <div className="MainComp"></div>
                <div className="maincomp-text">
                    <h1>Attain Your Dream Career</h1>
                    <h2>Your College Alternative to a Premium Software Engineering Career</h2>
                    <span>
                        <p><AiOutlineCheckCircle /> Enroll Today</p>
                        <p><AiOutlineCheckCircle /> Full-Stack Web Development Course</p>
                        <p><AiOutlineCheckCircle /> No Coding Background Required</p>
                        <p><AiOutlineCheckCircle /> Pay only when you get placed*</p>
                        <p><AiOutlineCheckCircle /> Live-Online Interactive Classes</p>
                        <p><AiOutlineCheckCircle /> Flexible Evening Classes</p>
                    </span>
                    <span className="counter">
                        <p>Next Batch Starts: February 22, 2021</p>
                    </span>
                    <span>
                        <p><Button variant="warning btn-lg">Get Started</Button></p>
                    </span>
                </div>
            </div>

        );
    }
}
export default MainComp;
