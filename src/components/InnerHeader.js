"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
];

export default function InnerHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const isHomePage = pathname === "/home";
  const isAboutPage = pathname === "/about";
  const closeOffcanvasAndNavigate = (path) => {
    const offcanvasEl = document.getElementById("offcanvasInnerNavbar");
    if (offcanvasEl && window.bootstrap?.Offcanvas) {
      const instance = window.bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
      const handleHidden = () => {
        offcanvasEl.removeEventListener("hidden.bs.offcanvas", handleHidden);
        router.push(path);
      };
      offcanvasEl.addEventListener("hidden.bs.offcanvas", handleHidden);
      instance.hide();
      return;
    }
    router.push(path);
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-1">
          <div className="container flex-grow-1 gap-lg-3">
            <Link
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
                router.push("/home");
              }}
              className="navbar-brand fw-bold logo"
              href="/home"
            >
              <img className="img-fluid" src="/images/svg/logo.svg" alt="logo" />
            </Link>

            <ul className="navbar-nav d-none d-lg-flex flex-row gap-lg-3">
              {navItems.map((item) => (
                <li key={item.label} className="nav-item">
                  <Link className={`nav-link ${item.href === "/about" ? (isAboutPage ? "active" : "") : (isHomePage ? "active" : "")}`} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="d-flex gap-2 ms-auto">
              <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModalLogOut">
                Logout
              </button>
              <button
                className="navbar-toggler shadow-none border-0 d-lg-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasInnerNavbar"
                aria-controls="offcanvasInnerNavbar"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div className="offcanvas offcanvas-end d-lg-none" tabIndex="-1" id="offcanvasInnerNavbar" aria-labelledby="offcanvasInnerNavbarLabel">
        <div className="offcanvas-header border-bottom">
          <Link
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
              closeOffcanvasAndNavigate("/home");
            }}
            className="navbar-brand fw-bold logo"
            href="/home"
          >
            <img className="img-fluid" src="/images/svg/logo.svg" alt="logo" />
          </Link>
          <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-center flex-grow-1 gap-lg-3">
            {navItems.map((item) => (
              <li key={item.label} className="nav-item">
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    closeOffcanvasAndNavigate(item.href);
                  }}
                  className={`nav-link ${item.href === "/about" ? (isAboutPage ? "active" : "") : (isHomePage ? "active" : "")}`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="modal fade" id="exampleModalLogOut" tabIndex="-1" aria-labelledby="exampleModalLogOutLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLogOutLabel">Logout</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className="text-center mt-3 mb-0">Are you sure you want to logout?</p>
              <button
                onClick={() => router.push("/")}
                type="button"
                className="btn btn-primary w-100 mt-3"
                data-bs-dismiss="modal"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
