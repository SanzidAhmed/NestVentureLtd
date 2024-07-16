import React from "react";
import { IoMdCall } from "react-icons/io";
import { MdAttachEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="bg-red-900">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <footer className="footer grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-8 bg-red-900 text-white p-10">
            <nav className="w-full md:col-span-2">
              <img
                src="https://i.ibb.co/HBSJn8G/Colorful-Illustrative-Hummingbird-Animals-Logo-removebg-preview.png"
                alt=""
                className="h-16 mb-4"
              />
              <p className="">
                At NEST, we empower entrepreneurs to reach their goals with
                comprehensive training, expert consultancy, strategic
                networking, and valuable investment opportunities. Partner with
                us to transform your vision into reality and elevate your
                business to new heights.
              </p>
              <a className="link link-hover inline-flex gap-2 items-center mt-6">
                <IoMdCall className="text-xl" />
                Phone: (880) 9696 232 337 (880) 1913 511 188
              </a>
              <a className="link link-hover inline-flex gap-2 items-center mt-2">
                <MdAttachEmail className="text-xl" />
                Email: info@nestventuresltd.com
              </a>
              <a className="link link-hover inline-flex gap-2 items-center mt-2">
                <FaLocationDot className="text-xl" />
                Address: House 10, Main Road, Block C, Banasree, Rampura, Dhaka
                1219
              </a>
            </nav>
            <nav className="w-full">
              <h6 className="footer-title font-bold mb-4">Quick Links</h6>
              <a className="link link-hover block mb-2">About</a>
              <a className="link link-hover block mb-2">
                Return and Refund Policy
              </a>
              <a className="link link-hover block mb-2">Terms & Conditions</a>
              <a className="link link-hover block">Privacy Policy</a>
            </nav>
            <form className="w-full">
              <h6 className="footer-title font-bold mb-4">Newsletter</h6>
              <p className="mb-4">
                Accusamus et iusto odio quas molestias except.
              </p>
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter your email"
                className="h-10 w-full mb-3 p-2 text-black"
              />
              <button className="btn rounded-none w-full bg-red-950 text-white">
                Subscribe
              </button>
            </form>
            <nav className="w-full">
              <h6 className="footer-title font-bold mb-4">What We Do</h6>
              <a className="link link-hover block mb-2">
                Financial Support & Consultancy
              </a>
              <a className="link link-hover block mb-2">
                Mentorship & Guidance
              </a>
              <a className="link link-hover block mb-2">
                Business Plan & Strategy
              </a>
              <a className="link link-hover block mb-2">
                Marketing & Branding Assistance
              </a>
              <a className="link link-hover block mb-2">
                Networking Opportunities
              </a>
              <a className="link link-hover block mb-2">Technology Support</a>
              <a className="link link-hover block mb-2">Legal Support</a>
              <a className="link link-hover block">Emotional Support</a>
            </nav>
          </footer>
        </div>
      </div>
      <footer className="footer footer-center bg-slate-800 text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by
            Sanzid Ahmed
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
