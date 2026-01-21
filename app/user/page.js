"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInfinity, FaInstagram, FaLinkedinIn } from "react-icons/fa";


export default function UserHome() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/login");
  }, [router]);

  return (
    <main className="page-wrapper">

      {/* NAVBAR */}
      <div className="navbar-wrapper">
        <nav className="navbar light-navbar">

          {/* LEFT */}
          <div className="nav-left">
            {/* LOGO IMAGE (replace src later) */}
            <img
              src="images/logo.png"
              alt="VisvasaHome"
              className="logo-img"
            />
            <span className="logo-text">VisvasaHome</span>
            <Link href="/user/odgri">
              <span className="city-text">Odgri</span>
            </Link>
          </div>

          {/* CENTER */}
          <div className="nav-center">
            <select className="location-select">
              <option>Gandhi Path, Jaipur</option>
              <option>Vaishali Nagar</option>
            </select>

            <input
              className="search-input"
              placeholder="Search for 'Electrician'"
            />
          </div>

          {/* RIGHT */}
          <div className="nav-right">
            <div className="icon-box">🛒</div>
            <div className="icon-box">👤</div>
          </div>

        </nav>
      </div>

      {/* HERO SECTION */}
      <section className="flex justify-between px-[113px] pt-[60px]">

        {/* LEFT SIDE */}
        <div className="max-w-[520px]">

          <h1 className="text-[34px] font-semibold text-[#2f2f2f] leading-[1.3]">
            On-Demand Contractors & Home Services
          </h1>

          {/* WHAT WE NEED CARD */}
          <div className="mt-2 border border-gray-300 rounded-[18px] p-6 w-[420px]">
            <h3 className="text-[20px] font-semibold mb-6">
              What We Need ?
            </h3>

            <div className="grid grid-cols-3 gap-y-6 gap-x-4 text-center">
              {[
                {
                  icon: "/icon/electrician.png",
                  label: "Electrician, Plumber & Carpenter",
                },
                {
                  icon: "/icon/repair.png",
                  label: "Appliance Repair",
                },
                {
                  icon: "/icon/cleaning.png",
                  label: "Cleaning",
                },
                {
                  icon: "/icon/gardener1.png",
                  label: "Gardener",
                },
                {
                  icon: "/icon/Vodgri.png",
                  label: "Vodgi",
                },
                {
                  icon: "/icon/painting.png",
                  label: "Painting & waterproofing",
                },
                {
                  icon: "/icon/gardener.png",
                  label: "Gardener",
                },
                {
                  icon: "/icon/labour.png",
                  label: "Labour",
                },
                {
                  icon: "/icon/contractors.png",
                  label: "Contractors",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
        flex flex-col items-center gap-2
        transition-transform duration-300
        hover:-translate-y-1
      "
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-[44px] h-[44px] object-contain"
                  />

                  <p className="text-[12px] text-gray-600 leading-tight text-center">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* STATS */}
          <div className="flex gap-[60px] mt-[60px]">
            <div>
              <h2 className="text-[32px] font-semibold">15+</h2>
              <p className="text-[14px] text-gray-500">Years Of Excellence</p>
            </div>

            <div>
              <h2 className="text-[32px] font-semibold">4.5</h2>
              <p className="text-[14px] text-gray-500">Services Rating</p>
            </div>

            <div>
              <h2 className="text-[32px] font-semibold">12k</h2>
              <p className="text-[14px] text-gray-500">Family In Jaipur</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE COLLAGE */}
        <div className="relative w-[720px] h-[620px] grid grid-cols-2 grid-rows-[1fr_1fr_1fr] gap-4">

          {/* LEFT TOP */}
          <div className="overflow-hidden rounded-2xl group">
            <img
              src="/images/slider.png"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt=""
            />
          </div>

          {/* RIGHT TALL (2 rows) */}
          <div className="overflow-hidden rounded-2xl group row-span-2">
            <img
              src="/images/home2.png"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt=""
            />
          </div>

          {/* LEFT BOTTOM (EQUAL HEIGHT) */}
          <div className="overflow-hidden rounded-2xl group row-span-2">
            <img
              src="/images/home3.png"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt=""
            />
          </div>

          {/* RIGHT BOTTOM */}
          <div className="overflow-hidden rounded-2xl group col-start-2 row-start-3">
            <img
              src="/images/home4.png"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt=""
            />
          </div>

        </div>



      </section>




      {/* IN THE SPOTLIGHT */}


      <section className="mt-[80px] px-[113px]">
        {/* Heading */}
        <h2 className="text-[28px] font-semibold text-[#2f2f2f] mb-[24px]">
          In the spotlight
        </h2>

        {/* Slider */}
        <div className="relative">
          <div className="flex gap-[24px] overflow-hidden">
            {/* Slide 1 */}
            <div className="group min-w-[400px] h-[250px] rounded-[16px] overflow-hidden cursor-pointer">
              <img
                src="/images/slider.png"
                alt="Spotlight 1"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Slide 2 */}
            <div className="group min-w-[400px] h-[250px] rounded-[16px] overflow-hidden cursor-pointer">
              <img
                src="/images/slider1.png"
                alt="Spotlight 2"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Slide 3 */}
            <div className="group min-w-[400px] h-[250px] rounded-[16px] overflow-hidden cursor-pointer">
              <img
                src="/images/slider.png"
                alt="Spotlight 3"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* LEFT ARROW */}
          <button
            className="
        absolute left-[-22px] top-1/2 -translate-y-1/2
        w-[44px] h-[44px]
        rounded-full bg-white
        shadow-[0_8px_20px_rgba(0,0,0,0.15)]
        flex items-center justify-center
        text-[20px]
      "
          >
            ←
          </button>

          {/* RIGHT ARROW */}
          <button
            className="
        absolute right-[-22px] top-1/2 -translate-y-1/2
        w-[44px] h-[44px]
        rounded-full bg-white
        shadow-[0_8px_20px_rgba(0,0,0,0.15)]
        flex items-center justify-center
        text-[20px]
      "
          >
            →
          </button>
        </div>
      </section>






      {/* CONSTRUCTIONS CONTRACT */}
      <section className="mt-[100px] px-[113px]">

        {/* Header */}
        <div className="flex justify-between items-start mb-[40px]">
          <div>
            <h2 className="text-[38px] font-semibold text-[#2f2f2f]">
              Constructions Contract
            </h2>
            <p className="text-[17px] text-gray-500 mt-[4px]">
              Pamper Home With Trusted Local Experience
            </p>
          </div>

          <button className="text-[14px] text-blue-600 border border-blue-600 rounded-full px-[14px] py-[4px]">
            See all
          </button>
        </div>

        {/* Cards */}
        <div className="relative">
          <div className="flex gap-[88px]">

            {/* Card */}
            <div className="w-[180px] text-center group cursor-pointer">
              <div className="w-[180px] h-[180px] mx-auto flex items-center justify-center overflow-hidden">
                <img
                  src="/images/electrician.png"
                  alt="Electrician"
                  className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h4 className="mt-[16px] font-medium">Electrician</h4>
              <p className="text-[13px] text-gray-500 mt-[4px]">
                ★ 4.79 (4.1K)
              </p>
              <p className="text-[13px] text-gray-700 mt-[2px]">
                ₹898
              </p>
            </div>

            <div className="w-[180px] text-center group cursor-pointer">
              <div className="w-[180px] h-[180px] mx-auto flex items-center justify-center overflow-hidden">
                <img
                  src="/images/carpenter.png"
                  alt="Carpenter"
                  className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h4 className="mt-[16px] font-medium">Carpenter</h4>
              <p className="text-[13px] text-gray-500 mt-[4px]">
                ★ 4.79 (4.1K)
              </p>
              <p className="text-[13px] text-gray-700 mt-[2px]">
                ₹898
              </p>
            </div>

            <div className="w-[180px] text-center group cursor-pointer">
              <div className="w-[180px] h-[180px] mx-auto flex items-center justify-center overflow-hidden">
                <img
                  src="/images/painter.png"
                  alt="Painter"
                  className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h4 className="mt-[16px] font-medium">Painter</h4>
              <p className="text-[13px] text-gray-500 mt-[4px]">
                ★ 4.79 (4.1K)
              </p>
              <p className="text-[13px] text-gray-700 mt-[2px]">
                ₹898
              </p>
            </div>

            <div className="w-[180px] text-center group cursor-pointer">
              <div className="w-[180px] h-[180px] mx-auto flex items-center justify-center overflow-hidden">
                <img
                  src="/images/construction.png"
                  alt="Construction"
                  className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h4 className="mt-[16px] font-medium">Construction</h4>
              <p className="text-[13px] text-gray-500 mt-[4px]">
                ★ 4.79 (4.1K)
              </p>
              <p className="text-[13px] text-gray-700 mt-[2px]">
                ₹898
              </p>
            </div>

            <div className="w-[180px] text-center group cursor-pointer">
              <div className="w-[180px] h-[180px] mx-auto flex items-center justify-center overflow-hidden">
                <img
                  src="/images/gardner.png"
                  alt="Gardner"
                  className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h4 className="mt-[16px] font-medium">Gardner</h4>
              <p className="text-[13px] text-gray-500 mt-[4px]">
                ★ 4.79 (4.1K)
              </p>
              <p className="text-[13px] text-gray-700 mt-[2px]">
                ₹898
              </p>
            </div>

          </div>

          {/* RIGHT ARROW */}
          <button
            className="
        absolute -right-[40px] top-[90px]
        w-[44px] h-[44px]
        rounded-full bg-white
        shadow-[0_8px_20px_rgba(0,0,0,0.15)]
        flex items-center justify-center
      "
          >
            →
          </button>
        </div>
      </section>



      {/* NEW & NOTEWORTHY SECTION */}


      <section className="mt-[100px] px-[113px]">

        {/* Header */}
        <div className="flex justify-between items-center mb-[40px]">
          <h2 className="text-[38px] font-semibold text-[#2f2f2f]">
            New And Noteworthy
          </h2>

          <button className="text-[14px] text-blue-600 border border-blue-600 rounded-full px-[14px] py-[4px]">
            See all
          </button>
        </div>

        {/* Cards Wrapper */}
        <div className="relative">
          <div className="flex">

            {[
              "Carpenter",
              "Electrician",
              "Painter",
              "Construction",
              "Gardner",
            ].map((title, index) => (
              <div
                key={index}
                className="w-[280.58px] text-center group cursor-pointer"
              >

                {/* Image  */}
                <div className="w-[240px] h-[260px] mx-auto overflow-hidden rounded-[24px] bg-[#f5f5f5]">
                  <img
                    src="/images/same.png"
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>


                {/* Text */}
                <h4 className="mt-[16px] font-medium text-[16px]">
                  {title}
                </h4>

                <p className="text-[13px] text-gray-500 mt-[4px]">
                  ★ 4.79 (4.1K)
                </p>

                <p className="text-[13px] text-gray-700 mt-[2px] font-medium">
                  ₹898
                </p>

              </div>
            ))}

          </div>

          {/* Right Arrow */}
          <button
            className="
        absolute -right-[40px] top-[120px]
        w-[44px] h-[44px]
        rounded-full bg-white
        shadow-[0_8px_20px_rgba(0,0,0,0.15)]
        flex items-center justify-center
        text-[20px]
      "
          >
            →
          </button>
        </div>
      </section>



      {/* Popular services */}



      <section className="mt-[100px] px-[113px]">

        {/* Header */}
        <div className="flex justify-between items-center mb-[40px]">
          <h2 className="text-[38px] font-semibold text-[#2f2f2f]">
            New And Noteworthy
          </h2>

          <button className="text-[14px] text-blue-600 border border-blue-600 rounded-full px-[14px] py-[4px]">
            See all
          </button>
        </div>

        {/* Cards Wrapper */}
        <div className="relative">
          <div className="flex gap-2">

            {[
              "Intense Bathroom Cleaning (2 Bathrooms)",
              "Drilling & hang (wall decor)",
              "Tap repair",
              "Classic cleaning (2 Bathrooms)",
              "Geyser check-up",
            ].map((title, index) => (
              <div
                key={index}
                className="w-[300.58px] text-center group cursor-pointer"
              >

                {/* Image */}
                <div className="w-[260px] h-[260px] mx-auto overflow-hidden rounded-[24px] bg-[#f5f5f5]">
                  <img
                    src="/images/same1.png"
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>


                {/* Text */}
                <h4 className="mt-[16px] font-medium text-[16px] leading-[22px]">
                  {title}
                </h4>

                <p className="text-[13px] text-gray-500 mt-[4px]">
                  ★ 4.79 (4.1K)
                </p>

                <p className="text-[13px] text-gray-700 mt-[2px] font-medium">
                  ₹898
                </p>

              </div>
            ))}

          </div>

          {/* Right Arrow */}
          <button
            className="
        absolute -right-[40px] top-[120px]
        w-[44px] h-[44px]
        rounded-full bg-white
        shadow-[0_8px_20px_rgba(0,0,0,0.15)]
        flex items-center justify-center
        text-[20px]
      "
          >
            →
          </button>
        </div>
      </section>





      <div className="bg-white relative">
        <div className="flex items-center justify-between px-[185px] py-24">

          {/* TEXT SECTION */}
          <div
            className="
              w-[720.25px]
             h-[198.44px]
             font-medium
             text-[46px]
             leading-[57px]
             tracking-normal
             capitalize
  "
          >
            <h1 className="text-[42px] font-semibold leading-tight">
              Create, Innovate, And Accelerate <br />
              With Intelligence
            </h1>

            <p className="mt-3 text-[15px] text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry
            </p>

            <button className="mt-5 px-8 py-3 rounded-full bg-gray-100 text-sm">
              Reach Out Now
            </button>
          </div>

          {/* IMAGE SECTION */}
          <div
            className="w-[693px] h-[587px] overflow-hidden"
          >
            <img
              src="/images/mobile.png"
              alt="Hero Image"
              className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="flex justify-center my-6">
          <div className="h-10 w-[90%] bg-[#06283D] rounded-sm"></div>
        </div>

      </div>



      {/* our contractor */}



      <section className="mt-[100px] px-[113px]">

        {/* Header */}
        <div className="flex justify-between items-start mb-[40px]">
          <div>
            <h2 className="text-[38px] font-semibold text-[#2f2f2f]">
              Our Contractors
            </h2>
            <p className="text-[17px] text-gray-500 mt-[4px]">
              Pamper Home With Trusted Local Experience
            </p>
          </div>

          <button className="text-[14px] text-blue-600 border border-blue-600 rounded-full px-[14px] py-[4px]">
            See all
          </button>
        </div>

        {/* Cards Wrapper */}
        <div className="relative">
          <div className="flex">

            {[
              "Sanjay Mittal (Electrician)",
              "Raju bhaiya (Painter)",
              "Mukesh Ji (Builder)",
              "Ramu bhaiya (Gardner)",
              "Rakesh Ji (Plumber)",
            ].map((title, index) => (
              <div
                key={index}
                className="w-[300.58px] text-center group cursor-pointer"
              >

                {/* Image  */}
                <div className="w-[240px] h-[260px] mx-auto overflow-hidden rounded-[24px] bg-[#f5f5f5]">
                  <img
                    src="/images/same.png"
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>


                {/* Text */}
                <h4 className="mt-[16px] font-medium text-[16px] leading-[22px]">
                  {title}
                </h4>

                <p className="text-[13px] text-gray-500 mt-[4px]">
                  ★ 4.79 (4.1K)
                </p>

                <p className="text-[13px] text-gray-700 mt-[2px] font-medium">
                  ₹898
                </p>

              </div>
            ))}

          </div>

          {/* Right Arrow */}
          <button
            className="
        absolute -right-[40px] top-[120px]
        w-[44px] h-[44px]
        rounded-full bg-white
        shadow-[0_8px_20px_rgba(0,0,0,0.15)]
        flex items-center justify-center
        text-[20px]
      "
          >
            →
          </button>
        </div>
      </section>


      {/* Clean Essentials */}



      <section className="mt-[100px] px-[113px]">
        <div className="flex justify-between items-start mb-[40px]">
          <div>
            <h2 className="text-[38px] font-semibold text-[#2f2f2f]">
              Clean Essentials
            </h2>
            <p className="text-[17px] text-gray-500 mt-[4px]">
              Pamper Home With Trusted Local Experience
            </p>
          </div>

          <button className="text-[14px] text-blue-600 border border-blue-600 rounded-full px-[14px] py-[4px]">
            See all
          </button>
        </div>

        {/* Cards Wrapper */}
        <div className="relative">
          <div className="flex">

            {[
              "Intense cleaning (2 Bathrooms)",
              "Classic cleaning (2 Bathrooms)",
              "Intense cleaning (3 Bathrooms)",
              "Classic cleaning (3 Bathrooms)",
              "Carpet cleaning",
            ].map((title, index) => (
              <div
                key={index}
                className="w-[300.58px] text-center group cursor-pointer"
              >

                {/* Image  */}
                <div className="w-[240px] h-[260px] mx-auto overflow-hidden rounded-[24px] bg-[#f5f5f5]">
                  <img
                    src="/images/same.png"
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>


                {/* Text */}
                <h4 className="mt-[16px] font-medium text-[16px] leading-[22px]">
                  {title}
                </h4>

                <p className="text-[13px] text-gray-500 mt-[4px]">
                  ★ 4.79 (4.1K)
                </p>

                <p className="text-[13px] text-gray-700 mt-[2px] font-medium">
                  ₹898
                </p>

              </div>
            ))}

          </div>

          {/* Right Arrow */}
          <button
            className="
        absolute -right-[40px] top-[120px]
        w-[44px] h-[44px]
        rounded-full bg-white
        shadow-[0_8px_20px_rgba(0,0,0,0.15)]
        flex items-center justify-center
        text-[20px]
      "
          >
            →
          </button>
        </div>
      </section>



      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24 flex items-center justify-between">

          {/* LEFT CONTENT */}
          <div className="max-w-lg">
            <h1 className="text-5xl font-semibold leading-tight text-gray-900">
              Give your space the <br />
              <span className="font-bold">glow-up it deserves</span>
            </h1>

            <p className="mt-4 text-sm text-gray-600 max-w-md">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry
            </p>

            <button className="mt-6 px-8 py-3 rounded-full bg-gray-100 text-sm hover:bg-gray-200">
              Reach Out Now
            </button>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative w-[540px] h-[489px] flex items-end justify-center">

            {/* HALF CIRCLE BACKGROUND */}
            <div className="absolute bottom-0 w-[540px] h-[270px] bg-[#FF6F61] rounded-t-full" />

            {/* PRODUCT IMAGE */}
            <img
              src="images/device.png"
              alt="Device"
              className="absolute  width: 540;
                height: 489;
               angle: 0 deg;
                opacity: 1;
               top: 5531px;
              left: 983px;
          object-contain"
            />
          </div>

        </div>
      </div>


      {/* Appliance Service & Repair*/}



      <section className="mt-[100px] px-[113px]">

        {/* Header */}
        <div className="flex justify-between items-center mb-[40px]">
          <h2 className="text-[38px] font-semibold text-[#2f2f2f]">
            Appliance Service & Repair
          </h2>

          <button className="text-[14px] text-blue-600 border border-blue-600 rounded-full px-[14px] py-[4px]">
            See all
          </button>
        </div>

        {/* Cards Wrapper */}
        <div className="relative">
          <div className="flex">

            {[
              "Auto Top load machine check-up",
              "AC Uninstallation",
              "TV check-up",
              "Semi-automatic check-up",
              "Solar panel uninstallation",
            ].map((title, index) => (
              <div
                key={index}
                className="w-[300.58px] text-center group cursor-pointer"
              >

                {/* Image  */}
                <div className="w-[240px] h-[260px] mx-auto overflow-hidden rounded-[24px] bg-[#f5f5f5]">
                  <img
                    src="/images/same.png"
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>


                {/* Text */}
                <h4 className="mt-[16px] font-medium text-[16px] leading-[22px]">
                  {title}
                </h4>

                <p className="text-[13px] text-gray-500 mt-[4px]">
                  ★ 4.79 (4.1K)
                </p>

                <p className="text-[13px] text-gray-700 mt-[2px] font-medium">
                  ₹898
                </p>

              </div>
            ))}

          </div>

          {/* Right Arrow */}
          <button
            className="
        absolute -right-[40px] top-[120px]
        w-[44px] h-[44px]
        rounded-full bg-white
        shadow-[0_8px_20px_rgba(0,0,0,0.15)]
        flex items-center justify-center
        text-[20px]
      "
          >
            →
          </button>
        </div>
      </section>


      {/* Home Repair & installation  */}


      <section className="mt-[100px] px-[113px]">

        {/* Header */}
        <div className="flex justify-between items-center mb-[40px]">
          <h2 className="text-[38px] font-semibold text-[#2f2f2f]">
            Appliance Service & Repair
          </h2>

          <button className="text-[14px] text-blue-600 border border-blue-600 rounded-full px-[14px] py-[4px]">
            See all
          </button>
        </div>

        {/* Cards Wrapper */}
        <div className="relative">
          <div className="flex">

            {[
              "AC Repair & Installation",
              "Switch board repair & replacement",
              "Door lock repair & Installation",
              "Jet spray installation",
              "Decor Installation",
            ].map((title, index) => (
              <div
                key={index}
                className="w-[300.58px] text-center group cursor-pointer"
              >

                {/* Image (Square + Hover) */}
                <div className="w-[240px] h-[260px] mx-auto overflow-hidden rounded-[24px] bg-[#f5f5f5]">
                  <img
                    src="/images/repair.jpg"
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>


                {/* Text */}
                <h4 className="mt-[16px] font-medium text-[16px] leading-[22px]">
                  {title}
                </h4>

                <p className="text-[13px] text-gray-500 mt-[4px]">
                  ★ 4.79 (4.1K)
                </p>

                <p className="text-[13px] text-gray-700 mt-[2px] font-medium">
                  ₹898
                </p>

              </div>
            ))}

          </div>

          {/* Right Arrow */}
          <button
            className="
        absolute -right-[40px] top-[120px]
        w-[44px] h-[44px]
        rounded-full bg-white
        shadow-[0_8px_20px_rgba(0,0,0,0.15)]
        flex items-center justify-center
        text-[20px]
      "
          >
            →
          </button>
        </div>
      </section>



      <section className="w-full py-6 mt-15">
        <div
          className="
      mx-auto
      bg-black
      border border-blue-500
      w-[1350px]
      h-[229px]
      flex
      flex-col
      justify-center
    "
        >
          <p className="text-center text-[11px] text-gray-300 mb-4">
            Trusted & verified brand in use.
          </p>

          <div className="flex items-center justify-center gap-[102px]">
            <Image
              src="/images/RR.svg"
              alt="RR"
              width={120}
              height={40}
              className="cursor-pointer transition-all duration-300 ease-in-out opacity-80 hover:opacity-100 hover:scale-110 hover:brightness-125"
            />

            <Image
              src="/images/path.svg"
              alt="Philips"
              width={260}
              height={40}
              className="cursor-pointer transition-all duration-300 ease-in-out opacity-80 hover:opacity-100 hover:scale-105 hover:brightness-125"
            />

            <Image
              src="/images/h.svg"
              alt="Havells"
              width={260}
              height={40}
              className="cursor-pointer transition-all duration-300 ease-in-out opacity-80 hover:opacity-100 hover:scale-105 hover:brightness-125"
            />

            <Image
              src="/images/p.svg"
              alt="Panasonic"
              width={280}
              height={40}
              className="cursor-pointer transition-all duration-300 ease-in-out opacity-80 hover:opacity-100 hover:scale-105 hover:brightness-125"
            />
          </div>
        </div>
      </section>



      {/* pet  */}


      <section className="mt-[100px] px-[113px]">

        {/* Header */}
        <div className="flex justify-between items-center mb-[40px]">
          <h2 className="text-[38px] font-semibold text-[#2f2f2f]">
            Pet & Feeding
          </h2>

          <button className="text-[14px] text-blue-600 border border-blue-600 rounded-full px-[14px] py-[4px]">
            See all
          </button>
        </div>

        {/* Cards Wrapper */}
        <div className="relative">
          <div className="flex">

            {[
              "Groomer",
              "Host and sitter",
              "Dog Walker",
              "Jet spray installation",
              "Decor Installation",
            ].map((title, index) => (
              <div
                key={index}
                className="w-[300.58px] text-center group cursor-pointer"
              >

                {/* Image  */}
                <div className="w-[240px] h-[260px] mx-auto overflow-hidden rounded-[24px] bg-[#f5f5f5]">
                  <img
                    src="/images/same.png"
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>


                {/* Text */}
                <h4 className="mt-[16px] font-medium text-[16px] leading-[22px]">
                  {title}
                </h4>

                <p className="text-[13px] text-gray-500 mt-[4px]">
                  ★ 4.79 (4.1K)
                </p>

                <p className="text-[13px] text-gray-700 mt-[2px] font-medium">
                  ₹898
                </p>

              </div>
            ))}

          </div>

          {/* Right Arrow */}
          <button
            className="
        absolute -right-[40px] top-[120px]
        w-[44px] h-[44px]
        rounded-full bg-white
        shadow-[0_8px_20px_rgba(0,0,0,0.15)]
        flex items-center justify-center
        text-[20px]
      "
          >
            →
          </button>
        </div>
      </section>



      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 grid grid-cols-1 md:grid-cols-2 items-center ">
          {/* Left Content */}
          <div className="ml-22">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              Give your space the <br /> glow-up it deserves
            </h1>

            <p className="text-gray-500 max-w-md mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
            </p>

            <button className="inline-flex items-center justify-center rounded-full bg-gray-100 px-8 py-3 text-sm font-medium text-gray-700 hover:bg-gray-200 transition">
              Reach Out Now
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/petfood.png"
              alt="Product"
              width={1100}
              height={680}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>


      {/* pet breeds*/}


      <section className="mt-[100px] px-[113px]">

        {/* Header */}
        <div className="flex justify-between items-center mb-[40px]">
          <h2 className="text-[38px] font-semibold text-[#2f2f2f]">
            Pet & Feeding
          </h2>

          <button className="text-[14px] text-blue-600 border border-blue-600 rounded-full px-[14px] py-[4px]">
            See all
          </button>
        </div>

        {/* Cards Wrapper */}
        <div className="relative">
          <div className="flex">

            {[
              "Labrador",
              "Retrievers",
              "German Shepherds",
              "Golden Retrievers",
              "Pugs",
            ].map((title, index) => (
              <div
                key={index}
                className="w-[300.58px] text-center group cursor-pointer"
              >

                {/* Image  */}
                <div className="w-[240px] h-[260px] mx-auto overflow-hidden rounded-[24px] bg-[#f5f5f5]">
                  <img
                    src="/images/same.png"
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>


                {/* Text */}
                <h4 className="mt-[16px] font-medium text-[16px] leading-[22px]">
                  {title}
                </h4>

                <p className="text-[13px] text-gray-500 mt-[4px]">
                  ★ 4.79 (4.1K)
                </p>

                <p className="text-[13px] text-gray-700 mt-[2px] font-medium">
                  ₹25,000
                </p>

              </div>
            ))}

          </div>

          {/* Right Arrow */}
          <button
            className="
        absolute -right-[40px] top-[120px]
        w-[44px] h-[44px]
        rounded-full bg-white
        shadow-[0_8px_20px_rgba(0,0,0,0.15)]
        flex items-center justify-center
        text-[20px]
      "
          >
            →
          </button>
        </div>
      </section>



      <section className="w-full py-12">
        <div className="mx-auto max-w-[1300px] border-2 border-blue-500 bg-[#cddcff] rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-12 py-10">

            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-medium text-black leading-tight mb-6">
                Give your space the <br /> glow-up it deserves
              </h1>

              <p className="text-sm text-gray-700 max-w-md">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
              </p>
            </div>

            {/* Right Image Box */}
            <div className=" p-6 rounded-sm flex items-center justify-center h-[400px]">
              <Image
                src="/images/civil.jpg"
                alt="Construction"
                width={720}
                height={460}
                className="object-contain max-h-full"
              />
            </div>

          </div>
        </div>
      </section>


      <footer className="w-full bg-white">
        {/* Top Footer */}
        <div className="mx-auto max-w-[1500px] px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company */}
          <div>
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
            <h4 className="font-semibold text-black mb-4">Services</h4>
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
            <h4 className="font-semibold text-black mb-4">For professionals</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Register as professional</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-black mb-4">Social links</h4>

            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white text-sm"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://yourwebsite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white text-sm"
              >
                <FaInfinity />
              </a>

              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white text-sm"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/company/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white text-sm"
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
        <div className="bg-[#0c1633] text-white text-center text-sm py-4 rounded-t-4xl">
          Copyright © 2025 Visvashome Pvt. Ltd. All rights reserved.
        </div>
      </footer>



    </main>
  );
}
