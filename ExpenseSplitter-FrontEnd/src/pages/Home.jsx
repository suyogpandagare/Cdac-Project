// import Header from "../components/Header";
// import HomePageBody from "./HomePageBody";
import { Link } from "react-router-dom";
export default function Home(){
    return (
        <>
        <div>
        {/* <div classNameName="container">
        <Header/>
            <h4>Home Page</h4>
        </div> */}
        
        <body id="page-top">
       
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top"><img src="assets/img/logo.png" alt="..." /></a> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                        <li className="nav-item"><Link to="/login" className="btn btn-sm btn-primary mb-1">Login</Link></li>
                        <li className="nav-item"><Link to="/register" className="btn btn-sm btn-success">Register</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        
                
        <header className="masthead">
            <div className="container">
                <div className="masthead-heading text-uppercase">Welcome To Expense Splitter</div>
                <div className="masthead-subheading">Worried About Paying Expenses...!! Relax And Use Expense Splitter</div>
                <h4 style={{color:'aqua'}}>Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.</h4>
                <a className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
            </div>
        </header>
        
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">services used in Expense Splitter are</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            {/* <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-money fa-stack-1x fa-inverse"></i> */}
                           <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/money.png" alt="..." /></div>
                        </span><br/><br/><br/>
                        <h4 className="my-3">Organize Expenses</h4>
                        <p className="text-muted">Split expenses with any group: trips, housemates, friends, and family.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            {/* <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-history fa-stack-1x fa-inverse"></i> */}
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/history.png" alt="..." /></div>
                        </span><br/><br/><br/>
                        <h4 className="my-3">Track Balances</h4>
                        <p className="text-muted">Keep track of shared expenses, balances, and who owes who.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            {/* <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-easy fa-stack-1x fa-inverse"></i> */}
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/addexp.png" alt="..." /></div>
                        </span><br/><br/><br/>
                        <h4 className="my-3">Add Expenses Easily</h4>
                        <p className="text-muted">Quickly add expenses on the go before you forget who paid.</p>
                    </div>
                </div>
            </div>
        </section>
      
        
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">Different Things Managed in This Application are.</h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/friends.png" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                
                                <h4 className="subheading">Enjoy Trips With Friends</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Stresslessly Enjoy Trips When you are with your friends without worrying about Expenses..!!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/roommates.png" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                
                                <h4 className="subheading">Less Stress When Managing Expenses With RoomMates</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Just Add Daily Expenses Like Food Gas Water And Easily You Can Track Total Expeses</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/dinner.png" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                              
                                <h4 className="subheading">Makes It Easy To Manage Dinner Expenses</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Enjoy the Dinner With Friends And Pay Back Later Without Worrying</p></div>
                        </div>
                    </li>
                    
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Be A Part
                                <br />
                                Of Expense
                                <br />
                                Splitter!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        
        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Contributers to this project are..</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="assets/img/team/suyog.png" alt="..." />
                            <h4>Suyog Pandagare</h4>
                            <p className="text-muted">Frontend Developer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="assets/img/team/shreyas.png" alt="..." />
                            <h4>Shreyas Bhoyar</h4>
                            <p className="text-muted">Backend Developer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="assets/img/team/abhi.png" alt="..." />
                            <h4>Abhilash Tekade</h4>
                            <p className="text-muted">Backend Developer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="assets/img/team/himu.png" alt="..." />
                            <h4>Himanshu Roy</h4>
                            <p className="text-muted">FrontEnd Developer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="assets/img/team/sonali.png" alt="..." />
                            <h4>Sonali Jadhav</h4>
                            <p className="text-muted">FrontEnd Developer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">We Are Passionate Freshers Working Towards Our Goal To Be In One Of The Great IT Company</p></div>
                </div>
            </div>
        </section>
       
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">We Are Tech-Geeks Loves Developing Web Projects</h3>
                </div>
               
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                
                                <input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <div className="form-group">
                                
                                <input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            <div className="form-group mb-md-0">
                               
                                <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                               
                                <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required"></textarea>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center text-white mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
                   
                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                  
                    <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
                </form>
            </div>
        </section>
      
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; Expense Splitter Web Application 2022</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
       
        
       
        
    </body>

        </div>
</>
     
    )
}