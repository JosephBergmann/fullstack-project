import './SplashPage.css'
import { NavLink } from 'react-router-dom';

const SplashPage = () => {
    return (
        <div className="outer-box">
            <div className="inner-boxes">
                <div className="two-boxes">
                    <p className="box1">
                        Find the best answer to your technical question, help others answer theirs
                        <NavLink to="/login">Join the community</NavLink>        
                    </p>
                    
                    <p className="box2">
                        Want a secure, private space for your technical knowledge?
                    </p>
                </div>
                <p>
                    Every developer needs a tab open to Stack Overflow
                </p>
            </div>
        </div>
    )
}

export default SplashPage;