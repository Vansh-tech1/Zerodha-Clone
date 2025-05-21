import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5' >
                    <img src='media/images/largestBroker.svg' alt='brokerage'/>
                </div>
                <div className='col-6 mt-4 p-5'>
                    <h1 style={{color:"#424242"}}>Largest Stock broker in India</h1>
                    <p className='mt-3'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investiong in:</p>
                    <ul className='mt-5'>
                        <div className='row'>
                            <div className='col-6'>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </div>
                            <div className='col-6'>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Government Securities</li>
                            </div>
                        </div>
                    </ul>
                    <img src='media/images/pressLogos.png' className='mt-5' style={{width:"90%"}} alt='press Logo'/>
                </div>
            </div>
        </div>
    );
}

export default Awards;