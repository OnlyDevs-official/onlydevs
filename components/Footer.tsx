import React from "react";
import FooterContact from "./FooterContact";

const Footer = () => {
  return (
    <div>
      <FooterContact />
      <footer className="bg-gray-900 text-white pb-12">
        <div className="container mx-auto px-4">
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} onlydevs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
