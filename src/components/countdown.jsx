import React from 'react';
const CountDown = () => {
    return (
        <div className="countdown">
            <div className="timer-wrap">
                <div className="days ">

                    <div className="time">
                        <div className="half-circle-left"></div>
                        <div className="time-top"></div>
                        <div className="time-bottom"></div>
                        <div className="half-circle-right"></div>
                    </div>

                    <p className="desc">Days</p>
                </div>
                <div className="hours ">
                    <div className="time">
                        <div className="half-circle-left"></div>
                        <div className="time-top"></div>
                        <div className="time-bottom"></div>
                        <div className="half-circle-right"></div>
                    </div>
                    <p className="desc">hours</p>
                </div>
                <div className="minutes ">
                    <div className="time">
                        <div className="half-circle-left"></div>
                        <div className="time-top"></div>
                        <div className="time-bottom"></div>
                        <div className="half-circle-right"></div>
                    </div>
                    <p className="desc">minutes</p>
                </div>
                <div className="seconds ">
                    <div className="time">
                        <div className="half-circle-left"></div>
                        <div className="time-top"></div>
                        <div className="time-bottom"></div>
                        <div className="half-circle-right"></div>
                    </div>
                    <p className="desc">seconds</p>
                </div>
            </div>
        </div>);
}

export default CountDown;