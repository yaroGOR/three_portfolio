import React from 'react';


const About = () => {
    return (
        <section className='about container section' id='about'>
            <h2 className="section__title">About</h2> 
            <div className="about__contianer grid">
                <img src = {Image} alt = '' className='about__img'/>
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            I am Yaroslav Gorban. web dev from kyiv ukraine
                        </p>
                        <a href = '' className='btn'>Download CV</a>
                    </div>
                

                <div className="about__skills grid">
                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">Development</h3>
                            <span className="skills__number">90%</span>
                            
                        </div>
                        <div className="skills__bar">
                            <span className="skills__percentage development"></span>
                        </div>
                    </div>

                </div>

                <div className="about__skills grid">
                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">UI UX design</h3>
                            <span className="skills__number "> 50%</span>
                            
                        </div>
                        <div className="skills__bar">
                            <span className="skills__percentage design"></span>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
        </section>    )
}

export default About;