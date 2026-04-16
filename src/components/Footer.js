import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-12 col-md-3">
            <Link className="d-inline-block mb-3" href="/">
              <img className="img-fluid" src="/images/svg/logo.svg" alt="logo" />
            </Link>
            <p className="mb-0">© 2026 All rights reserved</p>
          </div>
          <div className="col-6 col-md-3">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2"><Link className="text-white text-decoration-none" href="/about">About Us</Link></li>
              <li className="mb-2"><Link className="text-white text-decoration-none" href="/home">Services</Link></li>
              <li><Link className="text-white text-decoration-none" href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2"><Link className="text-white text-decoration-none" href="/home">Help Center</Link></li>
              <li className="mb-2"><Link className="text-white text-decoration-none" href="/home">Privacy Policy</Link></li>
              <li><Link className="text-white text-decoration-none" href="/home">Terms</Link></li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h6 className="fw-bold mb-3">Social Media</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2"><Link className="text-white text-decoration-none" href="/home"><i className="fa-brands fa-facebook-f me-2"></i>Facebook</Link></li>
              <li><Link className="text-white text-decoration-none" href="/home"><i className="fa-brands fa-linkedin-in me-2"></i>LinkedIn</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
