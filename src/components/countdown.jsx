import React, { useState, useEffect } from 'react';
import { ReactComponent as FacebookIcon } from '../icons/icon-facebook.svg';
import { ReactComponent as PinterestIcon } from '../icons/icon-pinterest.svg';
import { ReactComponent as InstagramIcon } from '../icons/icon-instagram.svg';
const CountDown = () => {
    const [seconds, setSeconds] = useState(59)
    const [minutes, setMinutes] = useState(59)
    const [hours, setHours] = useState(23)
    const [days, setDays] = useState(8)
    const [countdowns, setCountdowns] = useState([
        { id: 1, classNames: 'time-left', wrapperClassName: 'time-top', desc: 'Days' },
        { id: 2, classNames: 'time-left', wrapperClassName: 'time-top', desc: 'Hours' },
        { id: 3, classNames: 'time-left', wrapperClassName: 'time-top', desc: 'Minutes' },
        { id: 4, classNames: 'time-left fold always ', wrapperClassName: 'time-top flip always ', desc: 'Seconds' },
    ]);

    const startCountDown = () => {


        let sec = 59;
        let min = 59;
        let hours = 23;
        let days = 8;
        let temp = [...countdowns]

        setInterval(() => {
            sec = sec - 1;
            if (sec === 0) {
                temp[2].classNames = 'time-left fold'
                temp[2].wrapperClassName = 'time-top flip'
                setTimeout(() => {
                    min = min - 1;
                }, 900);
                sec = 59

            }
            if (min === 0) {
                temp[1].classNames = 'time-left fold'
                temp[1].wrapperClassName = 'time-top flip'
                setTimeout(() => {

                    hours = hours - 1;
                }, 900);
                min = 59

            }
            if (hours === 0) {
                temp[0].classNames = 'time-left fold'
                temp[0].wrapperClassName = 'time-top flip'
                setTimeout(() => {

                    days = days - 1;
                }, 900);
                hours = 23
            }

            setSeconds(sec)
            setCountdowns(temp);
            setMinutes(min)
            setHours(hours)
            setDays(days)
            resetClassNames();



        }, 1000);
    }
    const resetClassNames = () => {
        let temp = [...countdowns];
        for (let i = 0; i < temp.length; i++) {
            if (i === 3)
                continue
            const element = temp[i];
            element.classNames = 'time-left';
            element.wrapperClassName = 'time-top'

        }
    }
    useEffect(() => {
        startCountDown();

    }, [])
    return (



        <div className="countdown">

            <h2 className="header">We're launching soon</h2>
            <div className="timer-wrap">

                {countdowns.map(({ id, classNames, wrapperClassName, desc, }, index) => {
                    return (
                        <div className={desc.toLowerCase()} key={id}>

                            <div className="time" >
                                <span className={classNames} >
                                    {index === 3 ? seconds : index === 2 ? minutes : index === 1 ? hours : days}
                                </span>
                                <div className="half-circle-left"></div>
                                <div className={wrapperClassName}></div>
                                <div className="fake-time-top"></div>
                                <div className="time-bottom"></div>
                                <div className="half-circle-right"></div>
                            </div>

                            <p className="desc">{desc}</p>
                        </div>
                    )
                })}




            </div>
            <div className="icons">
                <FacebookIcon className="icon" />
                <PinterestIcon className="icon" />
                <InstagramIcon className="icon" />
            </div>
        </div>
    );
}

export default CountDown;