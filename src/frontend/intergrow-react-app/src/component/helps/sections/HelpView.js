import React, {useState} from 'react';
import TopAskers from './helpComponentGroup/TopAskers';
import TopResponsers from './helpComponentGroup/TopResponsor';
import TopBestA from './helpComponentGroup/TopBestA';
import TopBestQ from './helpComponentGroup/TopBestQ';

const HelpView = () =>{
    return(
        <section>
            <div className="row mr-4 ml-4 mb-2 text-align-center pt-4">
                <div className='col-lg-6 col-md-6 col-sm-12 mr-0'>
                    <TopAskers/>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 mr-0'>
                    <TopResponsers/>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 mr-0'>
                    <TopBestQ/>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 mr-0'>
                    <TopBestA/>
                </div>
                
            </div>
        </section>    
    )

}
export default HelpView;