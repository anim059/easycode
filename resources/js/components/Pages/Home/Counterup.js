import React from 'react'
import CountUp from 'react-countup';
import { BsFillPeopleFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/Ai';
import { FaHandshake } from 'react-icons/Fa';
import { SiBigcartel } from 'react-icons/Si';
function Counterup() {
    return (
        <>
            <div className="Counter_area overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="innertext">
                                <BsFillPeopleFill className="Counticon"/>
                                <CountUp end={30} start={0} duration={20} className="CountNum"  suffix="+" />
                                <h1>Team Members</h1>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="innertext">
                                <SiBigcartel className="Counticon"/>
                                <CountUp end={97} start={0} duration={20} className="CountNum" suffix="%" />
                                <h1>Business Success</h1>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="innertext">
                                <AiOutlineHeart className="Counticon"/>
                                <CountUp end={120} start={0} duration={20} className="CountNum"  />
                                <h1>Happy Client</h1>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="innertext">
                                <FaHandshake className="Counticon"/>
                                <CountUp end={120} start={0} duration={20} separator=" "
                                   
                                    onEnd={() => console.log('Ended! 👏')}
                                    onStart={() => console.log('Started! 💨')} className="CountNum" />
                                <h1>Business Done</h1>
                            </div>

                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}

export default Counterup
