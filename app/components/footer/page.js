"use client";

import { FaFacebookF, FaInfinity, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* Top Footer */}
      <div className="mx-auto max-w-[1500px] px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        
        {/* Company */}
        <div>
          <img
              src="/images/logo.png"
              alt="VisvasaHome"
              className="logo-img"
            />
          <h4 className="font-semibold text-black mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>About The Company</li>
            <li>Build Career With Us</li>
            <li>Resources</li>
            <li>Case Studies</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-black mb-4 mt-33">Services</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Local Contractor</li>
            <li>Door to Door Services</li>
            <li>Pet Foods</li>
            <li>Smart Locker</li>
            <li>Installation & uninstallation</li>
            <li>Support Services</li>
          </ul>
        </div>

        {/* Professionals */}
        <div>
          <h4 className="font-semibold text-black mb-4 mt-33">For professionals</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Register as professional</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-blue mb-4 mt-33">Social links</h4>

          <div className="flex items-center gap-3 mb-6">
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-800 text-white text-sm"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://yourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-800 text-white text-sm"
            >
              <FaInfinity />
            </a>

            <a
              href="https://www.instagram.com/visvasa_home_/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-800 text-white text-sm"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/visvasahome/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-800 text-white text-sm"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <div className="space-y-3">
            <a
              href="https://apps.apple.com/app/idYOUR_APP_ID"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-[45px] ml-2.5"
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-[60px]"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Middle Links */}
      <div className="text-center text-sm text-gray-700 mb-6 space-x-6">
        <span className="cursor-pointer">Terms of Use</span>
        <span className="cursor-pointer">Privacy</span>
        <span className="cursor-pointer">Terms & Conditions</span>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-800 text-white text-center text-sm py-4 rounded-t-4xl">
        Copyright © 2025 Visvashome Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
