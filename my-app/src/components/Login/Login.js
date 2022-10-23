import React from 'react';
import "./Login_css.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";


export default function (props) {
    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password text-center mt-2">
                        Forgot <a href="#">password?</a>
                    </p>
                    <p className="forgot-password text-center mt-2">
                        <NavLink
                            strict
                            to="/Signup">
                            <a href="#">Sign Up?</a>
                        </NavLink>

                    </p>
                </div>
            </form>
        </div>
    )
}
