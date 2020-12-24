import React from 'react';
import './homePage.styles.scss';
import Directory from '../component/directory/directory.component';
 const HomePage =()=>(
    <div className='homePage'>
        <div className='directory-menu'>
            <Directory/>
        </div>
    </div>
)
export default HomePage;