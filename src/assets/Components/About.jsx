import React from "react"
// import Resume_final from './assets/Components/Resume_final'
export default function About() {
    return (
        <>
            <section className="about_main">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col about_me">
                            <h3>About Me</h3>
                            <h4>I'm Samir and <span>Web Developer</span></h4>
                            <p>Hi, Glad to meet you.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="about_personal_details">
                                <div className="row">
                                    <div className="col-lg-7 about_information">
                                        <div className="information">
                                            <h3 className="information_design">Birthday :<span> 22/07/2002</span></h3>
                                            <h3 className="information_design">age :<span> 22</span></h3>
                                            <h3 className="information_design">phone no :<span> 6397992899</span></h3>
                                            <h3 className="information_design">Email :<span> samirsiddique98581</span></h3>
                                        </div>
                                        <div className="information">
                                            <h3 className="information_design">Website:<span> www.samir.com</span></h3>
                                            <h3 className="information_design">Degree :<span> graduate (CS)</span></h3>
                                            <h3 className="information_design">city :<span> Mathura</span></h3>
                                            <h3 className="information_design">freelance:<span> available</span></h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 tecnologies_knowledge">

                                        <h5>Css</h5>
                                        <div className="progress">
                                            <div className="progress_in" style={{ width: '70%' }}></div>
                                            <div className="skill_percentage">70%</div>
                                        </div>
                                        <h5>JS</h5>
                                        <div className="progress">
                                            <div className="progress_in" style={{ width: '70%' }}></div>
                                            <div className="skill_percentage">70%</div>
                                        </div>
                                        <h5>React</h5>
                                        <div className="progress">
                                            <div className="progress_in" style={{ width: '60%' }}></div>
                                            <div className="skill_percentage">60%</div>
                                        </div>
                                        <h5>Node.js</h5>
                                        <div className="progress">
                                            <div className="progress_in" style={{ width: '70%' }}></div>
                                            <div className="skill_percentage">70%</div>
                                        </div>
                                        <h5>Express.js</h5>
                                        <div className="progress">
                                            <div className="progress_in" style={{ width: '70%' }}></div>
                                            <div className="skill_percentage">70%</div>
                                        </div>
                                        <h5>Mysql</h5>
                                        <div className="progress">
                                            <div className="progress_in" style={{ width: "70%" }}></div>
                                            <div className="skill_percentage">70%</div>
                                        </div>
                                        <h5>MongoDB</h5>
                                        <div className="progress">
                                            <div className="progress_in" style={{ width: '70%' }}></div>
                                            <div className="skill_percentage">70%</div>
                                        </div>
                                    </div>
                                </div>
                                <button className="main_btn about_btn">Download CV</button>
                                <button className="main_btn about_btn">Hire Me</button>
                                <div className="row about_education_and_experience">
                                    <div className="col-lg-6 education pb-5">
                                        <h3 className="tittle">Education</h3>
                                        <div className="row">
                                            <div className="timeline">
                                                <div className="circle_dot"></div>
                                                <h3 className="time_line_date"><i className="fa fa-calendar"></i>2018-2019</h3>
                                                <h4>High School</h4>
                                                <p>I have completed my school from U.P Board with first division</p>
                                                <div className="circle_dot"></div>
                                                <h3 className="time_line_date"><i className="fa fa-calendar"></i>2020-2021</h3>
                                                <h4>Intermediate</h4>
                                                <p>I have completed my Intermediate form U.P Board with firse division</p>
                                                <div className="circle_dot"></div>
                                                <h3 className="time_line_date"><i className="fa fa-calendar"></i>2021-2024</h3>
                                                <h4>Bachlor in computer science</h4>
                                                <p>I have completed my graduation from Dr. bhim rao ambedkar university with first division</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 experience education pb-5">
                                        <h3 className="tittle">Experience</h3>
                                        <div className="row">
                                            <div className="timeline">
                                                <div className="circle_dot"></div>
                                                <h3 className="time_line_date"><i className="fa fa-calendar"></i>Sept 2023 - May 2024</h3>
                                                <h4>Training</h4>
                                                <p>I have completed my Full Stack Web Devlopment Training with Technosters and upskilled myself to learn new demanding technologies </p>
                                                <div className="circle_dot"></div>
                                                <h3 className="time_line_date"><i className="fa fa-calendar"></i>May 2024</h3>
                                                <h4>Intership</h4>
                                                <p>currently I am under of intership as a front-end devloper role to enhance my skills and knowledge dkfjsdkgjkfkfjdgkfjdk.</p>
                                                <div className="circle_dot"></div>
                                                <h3 className="time_line_date"><i className="fa fa-calendar"></i>2013-2015</h3>
                                                <h4>Master in computer science</h4>
                                                <p>imos repudiandae obcaecati iste sapiente odit sunt velit hic nulla saepe beatae! Voluptatum assumenda natus earum aliquid eos!</p>
                                            </div>
                                        </div>
                                        
                                        {/* <div></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}