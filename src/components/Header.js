"use client"; // This is a client component

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ correct

export default function Header() {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState("");
  const scrollToTop = () => window.scrollTo(0, 0);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const closeOffcanvasAndScroll = (sectionId) => {
    const offcanvasEl = document.getElementById("offcanvasNavbar");
    if (offcanvasEl && window.bootstrap?.Offcanvas) {
      const instance = window.bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
      instance.hide();
    }
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 250);
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-1">
          <div className="container flex-grow-1 gap-lg-3">
            <Link onClick={scrollToTop} className="navbar-brand fw-bold logo" href="/">
              <img className="img-fluid" src="/images/svg/logo.svg" alt="logo" />
            </Link>
            <ul className="navbar-nav d-none d-lg-flex flex-row gap-lg-3">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeNav === "contact" ? "active" : ""}`}
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveNav("contact");
                    scrollToSection("contact");
                  }}
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeNav === "gallery" ? "active" : ""}`}
                  href="#gallery"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveNav("gallery");
                    scrollToSection("gallery");
                  }}
                >
                  Gallery
                </a>
              </li>
            </ul>
            <div className="d-flex gap-2">
              <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalLogin">
                Login
              </button>
              <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header border-bottom">
          <a
            className={`nav-link navbar-brand fw-bold logo ${activeNav === "home" ? "active" : ""}`}
            href="#home"
            data-bs-dismiss="offcanvas"
            onClick={(e) => {
              e.preventDefault();
              setActiveNav("home");
              closeOffcanvasAndScroll("home");
            }}
          >
            <img className="img-fluid" src="/images/svg/logo.svg" alt="logo" />
          </a>

          <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-center flex-grow-1 gap-lg-3">
            <li className="nav-item">
              <a
                className={`nav-link ${activeNav === "contact" ? "active" : ""}`}
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveNav("contact");
                  closeOffcanvasAndScroll("contact");
                }}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeNav === "gallery" ? "active" : ""}`}
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveNav("gallery");
                  closeOffcanvasAndScroll("gallery");
                }}
              >
                Gallery
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="modal fade" id="exampleModalLogin" tabIndex="-1" aria-labelledby="exampleModalLoginLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLoginLabel">Login</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="loginEmail" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="loginEmail" />
                </div>
                <div className="mb-3">
                  <label htmlFor="loginPassword" className="form-label">Password</label>
                  <input type="password" className="form-control" id="loginPassword" />
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <button onClick={() => router.push("/home")} type="button" className="btn btn-primary w-100 mt-3" data-bs-dismiss="modal">Login</button>
              </form>
              <p className="text-center mt-3 mb-0">
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  className="btn btn-link p-0 align-baseline"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalRegister"
                  data-bs-dismiss="modal"
                >
                  Register
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModalRegister" tabIndex="-1" aria-labelledby="exampleModalRegisterLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalRegisterLabel">Register</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="registerName" className="form-label">Name</label>
                  <input type="text" className="form-control" id="registerName" />
                </div>
                <div className="mb-3">
                  <label htmlFor="registerEmail" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="registerEmail" />
                </div>
                <div className="mb-3">
                  <label htmlFor="registerPassword" className="form-label">Password</label>
                  <input type="password" className="form-control" id="registerPassword" />
                </div>
                <div className="mb-3">
                  <label htmlFor="registerConfirmPassword" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="registerConfirmPassword" />
                </div>
                <button
                  type="button"
                  className="btn btn-primary w-100 mt-3"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalLogin"
                  data-bs-dismiss="modal"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
