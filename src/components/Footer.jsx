import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // No active links just for UI demo
  const socialLinks = [
    {
      href: "#",
      iconClass: "fa-brands fa-twitter social-icon",
      label: "Twitter",
    },
    {
      href: "#",
      iconClass: "fa-brands fa-instagram social-icon",
      label: "Instagram",
    },
    {
      href: "#",
      iconClass: "fa-brands fa-facebook social-icon",
      label: "Facebook",
    },
    {
      href: "#",
      iconClass: "fa-solid fa-envelope social-icon",
      label: "Email",
    },
  ];

  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          {socialLinks.map(({ href, iconClass, label }) => (
            <li className="nav-item" key={label}>
              <a
                href={href}
                className="nav-link px-2 text-body-secondary"
                aria-label={label}
              >
                <i className={iconClass}></i>
              </a>
            </li>
          ))}
        </ul>
        <p className="text-center text-black-50 fw-lighter">
          Images &copy; Freepik and Spoonacular
        </p>
        <p className="text-center text-body-secondary">
          &copy; {currentYear} Food, Inc
        </p>
      </footer>
    </div>
  );
};

export default Footer;
