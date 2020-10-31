import React, {useState,useEffect} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ()=> {

        const [active, setActive] = useState('');

        useEffect(() => {
            let currentUrl = window.location.href
            console.log(currentUrl);
            if(currentUrl.endsWith('/'))
            setActive('About');
            else if(currentUrl.endsWith('/Resume'))
            setActive('Resume')
            else if(currentUrl.endsWith('/Projects'))
            setActive('Projects')
        
        }, [active])

        return (
            <div className="navbar">
                <div className="navbar_active">
                    {active}
                </div>
                <div className="navbar_items">
                    
                    {active !== 'About' && 
                       <Link to="/">
                           <div className="navbar_item" onClick={()=>setActive('About')}>About</div>
                       </Link> 
                    }
                    
                    {active !== 'Resume'?
                        
                        <Link to="/Resume">
                            <div className="navbar_item"onClick={()=>setActive('Resume')}>Resume</div>
                        </Link> 
                        :null}
                    
                    {active !== 'Projects' &&
                       <Link to="/Projects">
                           <div className="navbar_item"onClick={()=>setActive('Projects')}>Projects</div>
                           </Link> 
                    }

                </div>
            </div>
        );
    
};

export default Navbar;
