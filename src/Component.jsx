import React from "react";
import { NavLink } from "react-router-dom";
import apiData from "./api";
function Home(prop){
    return(
        <div className="container min-vh-100">
            <div className="row home">
                <div className="col-md-6 d-flex align-items-center">
                    <div className="box">
                        <h1>{prop.title} <span>manish</span></h1>
                        <p>
                        We are the team of talented developer making websites
                        </p>
                        {prop.area === "home" ? <NavLink to="/services">get started</NavLink> : <NavLink to="/contact">contact</NavLink>}
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={`./FirstReactWebsite/images/${prop.img}`} alt="hello" />
                </div>
            </div>
        </div>
    )
}

function Services(){
    return(<>
        <h1 className="text-center text-capitalize">our services</h1>
        <div className="d-flex flex-wrap justify-content-center align-items-center min-vh-100">
        {apiData.map((val,ind) => {
            return(
                <div className="card" key={ind}>
                    <img src={`./FirstReactWebsite/images/${val.image}`} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title text-capitalize">{val.title}</h5>
                        <p className="card-text text-capitalize">{val.desc}</p>
                        <a href="#" className="btn btn-primary text-capitalize">read more</a>
                    </div>
                </div>
            )
        })}
        </div>
        </>
    )
}
function About(prop){
    return <Home {...prop} />
}
function Contact(){
    return(
        <>
            <h1 className="text-center text-capitalize">contact us</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <form>
                            <div className="mb-3">
                                <label className="form-label text-capitalize">full name</label>
                                <input type="text" className="form-control" placeholder="full name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-capitalize">phone</label>
                                <input type="number" className="form-control" placeholder="phone" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-capitalize">email address</label>
                                <input type="email" className="form-control" placeholder="email address" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-capitalize">message</label>
                                <textarea rows="3" className="form-control" placeholder="message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light header">
            <div className="container">
                <h1><NavLink to="/">manish</NavLink></h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink className={(navData) => (navData.isActive ? "nav-link active" : 'nav-link')} to="/">home</NavLink></li>
                        <li className="nav-item"><NavLink className={(navData) => (navData.isActive ? "nav-link active" : 'nav-link')} to="/services">services</NavLink></li>
                        <li className="nav-item"><NavLink className={(navData) => (navData.isActive ? "nav-link active" : 'nav-link')} to="/about">about</NavLink></li>
                        <li className="nav-item"><NavLink className={(navData) => (navData.isActive ? "nav-link active" : 'nav-link')} to="/contact">contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

function Foo_ter(){
    return(
        <footer>
            <h5>made by manish prajapati from <a target="_blank" href="https://thapatechnical.github.io/reactweb">here</a></h5>
        </footer>
    )
}

export {Header, Home, Services, About, Contact, Foo_ter}