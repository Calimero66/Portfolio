import React from 'react';
import img from '../../icons/calimhappy.png';
import './Intro.css';
import 'bootstrap/dist/css/bootstrap.css';




export const Intro = () => {
    return (
        
        <section id="intro">
            <div className="selfIntroduction">
                <section className="firstText">
                    <span className='prevent-select' disabled>_</span>
                                    Hi
                </section>
                    <p>
                            <span>I'm </span>
                            <span className="text-primary">Hamza Aboulmaali </span>  
                    </p>
                    <span className="introSelf">I'm a full stack developer specialized in web technologies<br/>
                        with a huge passion for automation and DevOps.<br/>
                        I'm passionate about software engineering,<br/>
                        robotics,and everything in-between.</span>
            </div>
            <img src={img} alt="Me" className="cm" />
        </section>
    )
}
export default Intro;
