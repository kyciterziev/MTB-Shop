import './App.css';
import Header from './components/Header/Header';

function App() {
    return (
        <div className="App">
            <>
                <Header />
                <main>
                    <section>
                        <div className="wellcome">
                            <div className="wellcomeMsg">
                                <div className="headTag">MTB Shop</div>
                                <div className="subTag">
                                    Presenting First Bulgarian MTB Shop
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="features">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="sectionHead">Features</div>
                                    <hr />
                                    <br />
                                </div>
                                <div className="col-md-3">
                                    <div className="box">
                                        <div className="icon">
                                            <i className="fa fa-wrench" aria-hidden="true" />
                                        </div>
                                        <h4>Repair</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Deleniti temporibus aliquid perferendis inventore fugit magnam
                                            quod atque dicta nemo.{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="box">
                                        <div className="icon">
                                            <i className="fa fa-clock-o" aria-hidden="true" />
                                        </div>
                                        <h4>Speed</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Deleniti temporibus aliquid perferendis inventore fugit magnam
                                            quod atque dicta nemo.{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="box">
                                        <div className="icon">
                                            <i className="fa fa-cog" aria-hidden="true" />
                                        </div>
                                        <h4>Spare Parts</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Deleniti temporibus aliquid perferendis inventore fugit magnam
                                            quod atque dicta nemo.{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="box">
                                        <div className="icon">
                                            <i className="fa fa-balance-scale" aria-hidden="true" />
                                        </div>
                                        <h4>Tire Sales</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Deleniti temporibus aliquid perferendis inventore fugit magnam
                                            quod atque dicta nemo.{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="parallex-section">
                        <div className="parallex" id="parallex-set-1" />
                    </section>
                    <section id="shop">
                        <div className="container">
                            <div className="sectionHead">Shop</div>
                            <hr />
                            <br />
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="item-box">
                                        <div className="item-box-img">
                                            <img src="../images/bike1.jpg" />
                                        </div>
                                        <div className="item-box-head">Bikes</div>
                                        <div className="item-box-sub-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </div>
                                        <button className="btn item-box-btn">Shop Now</button>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="item-box">
                                        <div className="item-box-img">
                                            <img src="../images/bike.jpg" />
                                        </div>
                                        <div className="item-box-head">Helmets</div>
                                        <div className="item-box-sub-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </div>
                                        <button className="btn item-box-btn">Shop Now</button>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="item-box">
                                        <div className="item-box-img">
                                            <img src="../images/bike2.jpg" />
                                        </div>
                                        <div className="item-box-head">Wheels</div>
                                        <div className="item-box-sub-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </div>
                                        <button className="btn item-box-btn">Shop Now</button>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="item-box">
                                        <div className="item-box-img">
                                            <img src="../images/bike3.jpg" />
                                        </div>
                                        <div className="item-box-head">Cloths</div>
                                        <div className="item-box-sub-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </div>
                                        <button className="btn item-box-btn">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="sectionSubHead">Newly Arrived</div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card">
                                        <img className="card-img-top" src="../images/bike.jpg" alt="bike" />
                                        <div className="card-footer">
                                            <p className="card-text">
                                                INR XX,XXX/-
                                                <span style={{ color: "rgb(173, 11, 11)" }}>(39% off)</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <img className="card-img-top" src="../images/bike2.jpg" alt="bike" />
                                        <div className="card-footer">
                                            <p className="card-text">
                                                INR XX,XXX/-
                                                <span style={{ color: "rgb(173, 11, 11)" }}>(27% off)</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <img className="card-img-top" src="../images/bike1.jpg" alt="bike" />
                                        <div className="card-footer">
                                            <p className="card-text">
                                                INR XX,XXX/-
                                                <span style={{ color: "rgb(173, 11, 11)" }}>(32% off)</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card">
                                        <img className="card-img-top" src="../images/bike2.jpg" alt="bike" />
                                        <div className="card-footer">
                                            <p className="card-text">
                                                INR XX,XXX/-
                                                <span style={{ color: "rgb(173, 11, 11)" }}>(45% off)</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <img className="card-img-top" src="../images/bike.jpg" alt="bike" />
                                        <div className="card-footer">
                                            <p className="card-text">
                                                INR XX,XXX/-
                                                <span style={{ color: "rgb(173, 11, 11)" }}>(17% off)</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <img className="card-img-top" src="../images/bike3.jpg" alt="bike" />
                                        <div className="card-footer">
                                            <p className="card-text">
                                                INR XX,XXX/-
                                                <span style={{ color: "rgb(173, 11, 11)" }}>(21% off)</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="parallex-section">
                        <div className="parallex" id="parallex-set-3" />
                    </section>
                    <section id="about">
                        <div className="container">
                            <div className="sectionHead">About Us</div>
                            <hr />
                            <br />
                            <p>
                                Some text about me. Some text about me. I am lorem ipsum consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </section>
                    <section className="parallex-section">
                        <div className="parallex" id="parallex-set-2" />
                    </section>
                    <section id="contact">
                        <div className="container">
                            <div className="sectionHead">Contact Us</div>
                            <hr />
                            <br />
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-6 offset-md-2">
                                            <h4 className="sectionSubSubHead text-capitalize">
                                                Send A message
                                            </h4>
                                            <form>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        required=""
                                                        placeholder="Name*"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        required=""
                                                        placeholder="Email*"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                        required=""
                                                        placeholder="Phone*"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <textarea
                                                        type="text"
                                                        className="form-control"
                                                        required=""
                                                        placeholder="Message*"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <button className="btn btn-info" type="submit">
                                                        Send
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <h4 className="sectionSubSubHead">Mail Us</h4>
                                    <ul className="list-unstyled">
                                        <li>Leopard Pvt. Ltd.</li>
                                        <li>Saltlake, Kolkata</li>
                                        <li>West Bengal, India</li>
                                        <li>Pin: 700XXX</li>
                                        <li>Phone: +91 9xxxxxxxx</li>
                                        <li>Email: example@domain.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="footer">
                    <div className="container">
                        Copyright © 2017-18
                        <span style={{ color: "#f20056" }}>Leopard Pvt. Ltd.</span>
                    </div>
                </footer>
            </>
        </div>
    );
}

export default App;
