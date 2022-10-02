import React, { Component } from "react";
import otter from "../static/assets/otter.png";
import timerBackground from "../static/assets/circle.png";
import "../static/css/timer.css";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';


class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otterVisible: true, 
            timerLength: 0, 
            timerLeft: 0,
            ballX: 0, 
            ballY: -10
        }
    }
    

    countdown() {
        let secs = this.state.timerLeft; 
        console.log(secs);

        if (secs <= 0) {
            this.endTimer();
            return;
        }

        let angle = ((secs-1) * 2 * Math.PI) / (this.state.timerLength);

        this.setState({
            timerLeft: secs-1,
            ballX: -10*Math.sin(angle), 
            ballY: -10*Math.cos(angle)
        });

    }

    endTimer() {
        clearInterval(this.timer);
        this.setState({
            timerLeft: 0,
            timerLength: 0,
            ballX: 0,
            ballY: -10
        });

    }

    startTimer(duration) {
        if (duration < 0) duration = 0;
        this.setState({
            timerLength: duration,
            timerLeft: duration
        });

        this.timer = setInterval(() => this.countdown(), 10);
      }

    render() {
        let minutes = Math.floor(this.state.timerLeft / 60);
        let seconds = Math.ceil(this.state.timerLeft % 60);

        let t1 = ('0' + minutes).slice(-2);
        let t2 = ('0' + seconds).slice(-2);
        
        let sphereStyle = {
            transform: `translatex(${this.state.ballX}rem) translatey(${this.state.ballY}rem)`
        };

        return (
            <div className="timer-container">
                <div className="timer-border"></div>
                <img src= {timerBackground} alt="" id="background"></img>
                <img src={otter} alt="" id="otter"></img>
                <div className="timer-sphere" style={sphereStyle}></div>
                <div className = "timer-text"><h1>{t1}:{t2}</h1></div>

                <Dropdown>
                    <Dropdown.Toggle size="lg" variant="dark" id="dropdown-basic">Set Timer</Dropdown.Toggle>
                    <Button onClick={()=>this.endTimer()} variant="light">Reset</Button>{' '}
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => this.startTimer(600)}>10:00</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.startTimer(900)}>15:00</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.startTimer(1200)}>20:00</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.startTimer(1500)}>25:00</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.startTimer(1800)}>30:00</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.startTimer(2700)}>45:00</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.startTimer(3600)}>60:00</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.startTimer(5400)}>90:00</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}

export default Timer;