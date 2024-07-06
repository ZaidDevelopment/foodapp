export default function Footer() {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              <i className="fa-brands fa-twitter social-icon"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              <i className="fa-brands fa-instagram social-icon"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              <i className="fa-brands fa-facebook social-icon"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              <i className="fa-solid fa-envelope social-icon"></i>
            </a>
          </li>
        </ul>
        <p className="text-center text-black-50 fw-lighter">
          Images &copy; Freepik and Spoonacular
        </p>
        <p className="text-center text-body-secondary">
          &copy; {new Date().getFullYear()} Food, Inc
        </p>
      </footer>
    </div>
  );
}
