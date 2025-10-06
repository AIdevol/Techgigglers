import React, { useState } from "react";
import { Link, useNavigate, type To } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const NavbarComponents = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("about");
  const navigate = useNavigate();

  const services = [
    { name: "AI & ML Solutions", href: "/services/ai-ml" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile App Development", href: "/services/mobile-app" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "E-commerce Solutions", href: "/services/ecommerce" },
    { name: "Cloud Services", href: "/services/cloud-services" },
  ];

  const resources = [
    { name: "Blog", href: "/resources/blog" },
    { name: "Case Studies", href: "/resources/case-studies" },
    { name: "Whitepapers", href: "/resources/whitepapers" },
    { name: "Documentation", href: "/resources/documentation" },
    { name: "FAQs", href: "/resources/faqs" },
    { name: "Webinars", href: "/resources/webinars" },
  ];

  const handleNavigation = (path: To, linkName: string) => {
    setActiveLink(linkName);
    navigate(path);
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setResourcesOpen(false);
  };

  return (
    <nav
      className="w-full border-b border-gray-200"
      style={{ backgroundColor: "#F5F4EF" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleNavigation("/", "home")}
          >
            <img
              src="/assets/transparent-gigglers.png"
              className="h-12 w-32 sm:h-16 sm:w-45"
              alt="logo"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* ABOUT US */}
            <Link
              to="/about"
              className={`font-medium transition-colors ${
                activeLink === "about"
                  ? "text-orange-500"
                  : "text-gray-800 hover:text-orange-500"
              }`}
              onClick={() => setActiveLink("about")}
            >
              ABOUT US
            </Link>

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                to="/services"
                className={`font-medium transition-colors flex items-center ${
                  activeLink === "services"
                    ? "text-orange-500"
                    : "text-gray-800 hover:text-orange-500"
                }`}
                onClick={() => setActiveLink("services")}
              >
                SERVICES
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-transform ${
                    servicesOpen ? "rotate-180 text-orange-500" : ""
                  }`}
                />
              </Link>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="block px-4 py-3 text-gray-800 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                      onClick={() => {
                        setActiveLink("services");
                        setServicesOpen(false);
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* OUR PROCESS */}
            <Link
              to="/our-process"
              className={`font-medium transition-colors ${
                activeLink === "our-process"
                  ? "text-orange-500"
                  : "text-gray-800 hover:text-orange-500"
              }`}
              onClick={() => setActiveLink("our-process")}
            >
              OUR PROCESS
            </Link>

            {/* RESOURCES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <Link
                to="/resources"
                className={`font-medium transition-colors flex items-center ${
                  activeLink === "resources"
                    ? "text-orange-500"
                    : "text-gray-800 hover:text-orange-500"
                }`}
                onClick={() => setActiveLink("resources")}
              >
                RESOURCES
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-transform ${
                    resourcesOpen ? "rotate-180 text-orange-500" : ""
                  }`}
                />
              </Link>

              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {resources.map((resource, index) => (
                    <Link
                      key={index}
                      to={resource.href}
                      className="block px-4 py-3 text-gray-800 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                      onClick={() => {
                        setActiveLink("resources");
                        setResourcesOpen(false);
                      }}
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CAREERS */}
            <Link
              to="/careers"
              className={`font-medium transition-colors ${
                activeLink === "careers"
                  ? "text-orange-500"
                  : "text-gray-800 hover:text-orange-500"
              }`}
              onClick={() => setActiveLink("careers")}
            >
              CAREERS
            </Link>
          </div>

          {/* CONTACT BUTTON (Desktop) */}
          <button
            className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full transition-colors"
            onClick={() => handleNavigation("/contact", "contact")}
          >
            CONTACT US
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden p-2 text-gray-800 hover:text-orange-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              {/* ABOUT US */}
              <Link
                to="/about"
                className={`font-medium transition-colors py-2 ${
                  activeLink === "about"
                    ? "text-orange-500"
                    : "text-gray-800 hover:text-orange-500"
                }`}
                onClick={() => {
                  setActiveLink("about");
                  setMobileMenuOpen(false);
                }}
              >
                ABOUT US
              </Link>

              {/* SERVICES MOBILE */}
              <div>
                <button
                  className={`font-medium transition-colors flex items-center justify-between w-full py-2 ${
                    activeLink === "services"
                      ? "text-orange-500"
                      : "text-gray-800 hover:text-orange-500"
                  }`}
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  <Link
                    to="/services"
                    onClick={() => {
                      setActiveLink("services");
                      setMobileMenuOpen(false);
                    }}
                    className="flex-1 text-left"
                  >
                    SERVICES
                  </Link>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      servicesOpen ? "rotate-180 text-orange-500" : ""
                    }`}
                  />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="block py-2 text-gray-700 hover:text-orange-500 transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setServicesOpen(false);
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* OUR PROCESS */}
              <Link
                to="/our-process"
                className={`font-medium transition-colors py-2 ${
                  activeLink === "our-process"
                    ? "text-orange-500"
                    : "text-gray-800 hover:text-orange-500"
                }`}
                onClick={() => {
                  setActiveLink("our-process");
                  setMobileMenuOpen(false);
                }}
              >
                OUR PROCESS
              </Link>

              {/* RESOURCES MOBILE */}
              <div>
                <button
                  className={`font-medium transition-colors flex items-center justify-between w-full py-2 ${
                    activeLink === "resources"
                      ? "text-orange-500"
                      : "text-gray-800 hover:text-orange-500"
                  }`}
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                >
                  <Link
                    to="/resources"
                    onClick={() => {
                      setActiveLink("resources");
                      setMobileMenuOpen(false);
                    }}
                    className="flex-1 text-left"
                  >
                    RESOURCES
                  </Link>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      resourcesOpen ? "rotate-180 text-orange-500" : ""
                    }`}
                  />
                </button>
                {resourcesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {resources.map((resource, index) => (
                      <Link
                        key={index}
                        to={resource.href}
                        className="block py-2 text-gray-700 hover:text-orange-500 transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setResourcesOpen(false);
                        }}
                      >
                        {resource.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* CAREERS */}
              <Link
                to="/careers"
                className={`font-medium transition-colors py-2 ${
                  activeLink === "careers"
                    ? "text-orange-500"
                    : "text-gray-800 hover:text-orange-500"
                }`}
                onClick={() => {
                  setActiveLink("careers");
                  setMobileMenuOpen(false);
                }}
              >
                CAREERS
              </Link>

              {/* CONTACT BUTTON */}
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full transition-colors mt-2"
                onClick={() => handleNavigation("/contact", "contact")}
              >
                CONTACT US
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarComponents;
