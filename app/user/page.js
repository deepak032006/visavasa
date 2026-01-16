"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
      <section className="flex justify-between items-center px-[113px] pt-[60px]">

        {/* LEFT */}
        <div className="max-w-[520px]">
          <h1 className="text-[40px] font-semibold leading-[1.2] text-[#2f2f2f]">
            Contractor & Home <br />
            Services At Your Door Step
          </h1>

          <p className="mt-4 text-[14px] leading-[1.6] text-gray-500">
            From concept to code, we craft feature-rich Android applications
            with unmatched performance and premium functionality. As a
            trusted Android app development company.
          </p>

          {/* STATS */}
          <div className="flex gap-[48px] mt-[150px]">
            <div>
              <h2 className="text-[38px] font-semibold  text-[#2f2f2f]">15+</h2>
              <span className="text-[15px] text-gray-500">
                Years Of Excellence
              </span>
            </div>

            <div>
              <h2 className="text-[38px] font-semibold text-[#2f2f2f]">4.5</h2>
              <span className="text-[15px] text-gray-500">
                Services Rating
              </span>
            </div>

            <div>
              <h2 className="text-[38px] font-semibold text-[#2f2f2f]">12k</h2>
              <span className="text-[15px] text-gray-500">
                Family In Jaipur
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        {/* RIGHT BACKGROUND EFFECT */}
        <div className="absolute right-[0] top-[140px] w-[700px] h-[600px] pointer-events-none">

          {/* SOFT GRADIENT GLOW */}
          <div
            className="
      absolute inset-0
      bg-[linear-gradient(104.93deg,rgba(36,0,255,0.35)_-7.3%,rgba(235,115,6,0.45)_92.24%)]
      blur-[180px]
      opacity-80
    "
          />

          {/* TOP BALL */}
          <div
            className="
      absolute top-[40px] left-[120px]
      w-[96px] h-[96px]
      rounded-full
      bg-[radial-gradient(circle_at_30%_30%,#5c5c5c,#000)]
      shadow-[0_30px_60px_rgba(0,0,0,0.35)]
    "
          />

          {/* BOTTOM BALL */}
          <div
            className="
      absolute bottom-[120px] right-[140px]
      w-[72px] h-[72px]
      rounded-full
      bg-[radial-gradient(circle_at_30%_30%,#444,#000)]
      shadow-[0_24px_48px_rgba(0,0,0,0.35)]
    "
          />

        </div>


      </section>
      {/* IN THE SPOTLIGHT */}
      <section className="mt-[80px] px-[113px]">

        {/* Heading */}
        <h2 className="text-[28px] font-semibold text-[#2f2f2f] mb-[24px]">
          In the Spotlight
        </h2>

        {/* Slider */}
        <div className="relative">

          <div className="flex gap-[24px] overflow-hidden">

            {/* Slide 1 */}
            <div className="min-w-[474px] h-[322px] rounded-[16px] overflow-hidden">
              <img
                src="/images/slider.png"
                alt="Spotlight 1"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Slide 2 */}
            <div className="min-w-[474px] h-[322px] rounded-[16px] overflow-hidden">
              <img
                src="/images/slider1.png"
                alt="Spotlight 2"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Slide 3 */}
            <div className="min-w-[474px] h-[322px] rounded-[16px] overflow-hidden">
              <img
                src="/images/slider.png"
                alt="Spotlight 3"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* RIGHT ARROW */}
          <button
            className="
        absolute right-[-20px] top-1/2 -translate-y-1/2
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

            {/* Card 1 */}
            <div className="w-[180px] text-center">
              <img
                src="/images/electrician.png"
                alt="Electrician"
                className="mx-auto h-[260px] object-contain"
              />
              <h4 className="mt-[16px] font-medium">Electrician</h4>
              <p className="text-[13px] text-gray-500 mt-[4px]">
                ★ 4.79 (4.1K)
              </p>
              <p className="text-[13px] text-gray-700 mt-[2px]">
                ₹898
              </p>
            </div>

            {/* Card 2 */}
            <div className="w-[180px] text-center">
              <img
                src="/images/carpenter.png"
                alt="Carpenter"
                className="mx-auto h-[260px] object-contain"
              />
              <h4 className="mt-[16px] font-medium">Carpenter</h4>
              <p className="text-[13px] text-gray-500 mt-[4px]">
                ★ 4.79 (4.1K)
              </p>
              <p className="text-[13px] text-gray-700 mt-[2px]">
                ₹898
              </p>
            </div>

            {/* Card 3 */}
            <div className="w-[180px] text-center">
              <img
                src="/images/painter.png"
                alt="Painter"
                className="mx-auto h-[260px] object-contain"
              />
              <h4 className="mt-[16px] font-medium">Painter</h4>
              <p className="text-[13px] text-gray-500 mt-[4px]">
                ★ 4.79 (4.1K)
              </p>
              <p className="text-[13px] text-gray-700 mt-[2px]">
                ₹898
              </p>
            </div>

            {/* Card 4 */}
            <div className="w-[180px] text-center">
              <img
                src="/images/construction.png"
                alt="Construction"
                className="mx-auto h-[260px] object-contain"
              />
              <h4 className="mt-[16px] font-medium">Construction</h4>
              <p className="text-[13px] text-gray-500 mt-[4px]">
                ★ 4.79 (4.1K)
              </p>
              <p className="text-[13px] text-gray-700 mt-[2px]">
                ₹898
              </p>
            </div>

            {/* Card 5 */}
            <div className="w-[180px] text-center">
              <img
                src="/images/gardner.png"
                alt="Gardner"
                className="mx-auto h-[260px] object-contain"
              />
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
        absolute -right-[40px] top-[120px]
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

          <div className="flex gap-[88px]">

            {/* CARD */}
            {[
              "Carpenter",
              "Electrician",
              "Painter",
              "Construction",
              "Gardner",
            ].map((title, index) => (
              <div key={index} className="w-[300.58px] text-center">

                {/* Image Card */}
                <div className="h-[348px] bg-[#f2f2f2] rounded-[19px] flex items-center justify-center">
                  <img
                    src="/images/same.png"
                    alt={title}
                    className="h-[260px] object-contain"
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
        absolute -right-[40px] top-[140px]
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

          <div className="flex gap-[88px]">

            {/* CARD */}
            {[
              "Intense Bathroom Cleaning (2 Bathrooms)",
              "Drilling & hang (wall decor)",
              "Tap repair ",
              "Classic cleaning (2 Bathrooms)",
              "Geyser check-up",
            ].map((title, index) => (
              <div key={index} className="w-[300.58px] text-center">

                {/* Image Card */}
                <div className="h-[348px] bg-[#f2f2f2] rounded-[19px] flex items-center justify-center">
                  <img
                    src="/images/same1.png"
                    alt={title}
                    className="h-[260px] object-contain"
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
        absolute -right-[40px] top-[140px]
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
            style={{
              width: "693px",
              height: "587px",
            }}
          >
            <img
              src="/images/mobile.png"
              alt="Hero Image"
              className="w-full h-full object-contain"
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

          <div className="flex gap-[88px]">

            {/* CARD */}
            {[
              "Sanjay Mittal (Electrician)",
              " Raju bhaiya (Painter)",
              "Mukesh Ji (Builder)",
              "Ramu bhaiya (Gardner)",
              "Rakesh Ji (Plumber)",
            ].map((title, index) => (
              <div key={index} className="w-[300.58px] text-center">

                {/* Image Card */}
                <div className="h-[348px] bg-[#f2f2f2] rounded-[19px] flex items-center justify-center">
                  <img
                    src="/images/same.png"
                    alt={title}
                    className="h-[260px] object-contain"
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
        absolute -right-[40px] top-[140px]
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

          <div className="flex gap-[88px]">

            {/* CARD */}
            {[
              "Intense cleaning(2 Bathrooms)",
              "Cleaning cleaning (2bathrooms)",
              "Intense (3 bathrooms)",
              "Classic cleaning (3bathrooms)",
              "Carpet cleaning",
            ].map((title, index) => (
              <div key={index} className="w-[300.58px] text-center">

                {/* Image Card */}
                <div className="h-[348px] bg-[#f2f2f2] rounded-[19px] flex items-center justify-center">
                  <img
                    src="/images/same.png"
                    alt={title}
                    className="h-[260px] object-contain"
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
        absolute -right-[40px] top-[140px]
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

          <div className="flex gap-[88px]">

            {/* CARD */}
            {[
              "Auto Top load machine check-up",
              "AC Uninstallation",
              "TV check -up",
              "Semi-automatic check-up",
              "Solar panel uninstallation",
            ].map((title, index) => (
              <div key={index} className="w-[300.58px] text-center">

                {/* Image Card */}
                <div className="h-[348px] bg-[#f2f2f2] rounded-[19px] flex items-center justify-center">
                  <img
                    src="/images/same.png"
                    alt={title}
                    className="h-[260px] object-contain"
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
        absolute -right-[40px] top-[140px]
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

          <div className="flex gap-[88px]">

            {/* CARD */}
            {[
              "AC Repair & Installation",
              "Switch board repair & replacement",
              "Door lock repair & Installation",
              "Jet spray installation",
              "Decor Installation",
            ].map((title, index) => (
              <div key={index} className="w-[300.58px] text-center">

                {/* Image Card */}
                <div className="h-[348px] bg-[#f2f2f2] rounded-[19px] flex items-center justify-center">
                  <img
                    src="/images/repair.jpg"
                    alt={title}
                    className="h-[260px] object-contain"
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
        absolute -right-[40px] top-[140px]
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







    </main>
  );
}
