import Image from "next/image";
import Footer from "../page";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* TOP BAR */}
      <div className="border-b py-5 px-6 flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="logo" width={128} height={28} />
        </div>
        <div className="flex gap-6 text-gray-600">
          <span>Register As a professional</span>
          <span>Help</span>
        </div>
      </div>

      {/* HERO */}
      <div className="bg-[#0b3a6a] text-white text-center py-4 font-semibold text-lg">
        ABOUT VISVASAHOMESHOME
      </div>

      {/* ABOUT CONTENT */}
      <section className="max-w-5xl mx-auto bg-white shadow mt-10 p-10">
        <h2 className="italic text-xl mb-4">
          Deliver Home Services And Solutions Like Never Experienced Before
        </h2>
        <p className="text-gray-600 mb-4">
          Visvasa Home and VisvasaHome is a technology-driven platform that connects customers with trusted, verified
          professionals for a wide range of home and lifestyle services. We offer everything from instant support and
          pest care, we make reliable services easy to access.
        </p>
        <p className="text-gray-600 mb-4">
          Our mission is simple: to simplify urban living by delivering high-quality, transparent, and dependable
          services every single time.
        </p>
        <p className="text-gray-700 font-semibold">Founder & CEO: Kundal Mittal</p>
        <p className="text-gray-600">
          VisvasaHome was founded by Kundal Mittal, an entrepreneur passionate about building a trustworthy ecosystem
          for home services in India. As Founder and CEO, Kundal leads the vision and strategy at VisvasaHome, ensuring
          every customer receives safe, dependable, and professional service at home.
        </p>
      </section>

      {/* INDIA CONSUMER SERVICES */}
      <section className="bg-gray-50 py-16">
        <h2 className="text-2xl font-bold text-center mb-4 italic">India Consumer Services</h2>
        <p className="text-center text-gray-500 max-w-3xl mx-auto mb-10">
          Visvasa Home currently operates across key cities in India, offering a comprehensive range of consumer
          services designed for modern households.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <div className="bg-white p-6 rounded shadow hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <h3 className="font-semibold mb-3">Our Services Include</h3>
            <p className="text-sm text-gray-600 mb-2">Insta Help</p>
            <p className="text-sm text-gray-600 mb-2">Cleaning & Pest Control</p>
            <p className="text-sm text-gray-600 mb-2">Home Repair & Maintenance</p>
            <p className="text-sm text-gray-600 mb-2">Skilled contractors for</p>
            <p className="text-sm text-gray-600 mb-2">remodeling and on-demand needs</p>
            <p className="text-sm text-gray-600">& much more!</p>
          </div>

          <div className="bg-white p-6 rounded shadow  hover:shadow-xl hover:scale-105  transition-all duration-300 cursor-pointer">
            <h3 className="font-semibold mb-3">VODGRI</h3>
            <p className="text-sm text-gray-600 mb-2">
              Food for street dogs and home pets — young and old.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Nutritious and offering true support,
            </p>
            <p className="text-sm text-gray-600">
              Laced meals helps fix lose tie
            </p>
            <p className="text-sm text-gray-600 mt-2">& Saving life Saves</p>
          </div>

          <div className="bg-white p-6 rounded shadow hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <h3 className="font-semibold mb-3">International Presence</h3>
            <p className="text-sm text-gray-600 mb-2">
              Visvasa Home is expanding beyond India.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              The UAE energy, new insights and such
            </p>
            <p className="text-sm text-gray-600 mb-2">
              opportunities in an evolving globally where
            </p>
            <p className="text-sm text-gray-600">
              and strong middle, deliver service which is
            </p>
            <p className="text-sm text-gray-600">both reliable and world-class.</p>
          </div>
        </div>
      </section>

      {/* FOR CONSUMERS */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold italic mb-4">For Consumers</h2>
        <p className="text-gray-700 font-semibold mb-3">
          Visvasa Home is built with customers at its core.
        </p>
        <div className="max-w-2xl mx-auto text-gray-600 space-y-2">
          <p>Seamless access and instant convenience</p>
          <p>Designed for ease, transparency, and peace of mind</p>
          <p>Personalized and inclusive by design</p>
          <p>Trust and safety built into every service</p>
        </div>
      </section>

      {/* LEADERS */}
      <section className="py-16 text-center bg-gray-50">
        <h2 className="text-2xl font-bold underline decoration-blue-500 mb-2 italic">
          VH's Leaders & Family Member
        </h2>
        <p className="text-gray-500 text-sm mb-10">
          Our VH family! Here's the brilliant, agile talent driving Visvasa.Right
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6">
          {[
            { name: "Kunal Mittal", title: "Founder & CEO", linkedin: "https://www.linkedin.com/in/kunal-mittal", twitter: "https://twitter.com/kunalmittal" },
            { name: "Mukesh Choudary", title: "Founder & CEO", linkedin: "https://www.linkedin.com/in/mukesh-choudary", twitter: "https://twitter.com/mukeshchoudary" },
            { name: "Kushagra Mittal", title: "Founder & CEO", linkedin: "https://www.linkedin.com/in/kushagra-mittal", twitter: "https://twitter.com/kushagramittal" },
            { name: "Sanjay Mittal", title: "Founder & CEO", linkedin: "https://www.linkedin.com/in/sanjay-mittal", twitter: "https://twitter.com/sanjaymittal" },
            { name: "Deepak Sharma", title: "Founder & CEO", linkedin: "https://www.linkedin.com/in/deepak-sharma", twitter: "https://twitter.com/deepaksharma" },
            { name: "Kalpit Karnawat", title: "Founder & CEO", linkedin: "https://www.linkedin.com/in/kalpit-karnawat", twitter: "https://twitter.com/kalpitkarnawat" },
            { name: "Kushagra Mittal", title: "Founder & CEO", linkedin: "https://www.linkedin.com/in/kushagra-mittal", twitter: "https://twitter.com/kushagramittal" },
            { name: "Sanjay Mittal", title: "Founder & CEO", linkedin: "https://www.linkedin.com/in/sanjay-mittal", twitter: "https://twitter.com/sanjaymittal" },
            { name: "Deepak Sharma", title: "Founder & CEO", linkedin: "https://www.linkedin.com/in/deepak-sharma", twitter: "https://twitter.com/deepaksharma" },
            { name: "Mukesh Choudary", title: "Founder & CEO", linkedin: "https://www.linkedin.com/in/mukesh-choudary", twitter: "https://twitter.com/mukeshchoudary" },
            { name: "Kushagra Mittal", title: "Founder & CEO", linkedin: "https://www.linkedin.com/in/kushagra-mittal", twitter: "https://twitter.com/kushagramittal" },
            { name: "Sanjay Mittal", title: "Founder & CEO", linkedin: "https://www.linkedin.com/in/sanjay-mittal", twitter: "https://twitter.com/sanjaymittal" },
          ].map((member, i) => (
            <div key={i} className="flex flex-col items-center">
              <Image
                src="/images/same.png"
                alt={member.name}
                width={200}
                height={260}
                className="mx-auto"
              />
              <p className="font-semibold mt-3">{member.name}</p>
              <p className="text-sm text-gray-500">{member.title}</p>
              <div className="flex justify-center gap-3 mt-2">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
                  <Image src="/icon/Linkedin.png" alt="linkedin" width={16} height={16} />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
                  <Image src="/icon/x.png" alt="twitter" width={16} height={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 bg-white">
        <p className="italic text-gray-500">For media queries contact: info@VisvasaHomes.com</p>
        <p className="text-gray-600 font-semibold mt-4">
          You Could be a part of our journey. Interested?
        </p>
        <button className="mt-6 bg-black text-white px-10 py-3 rounded hover:bg-gray-800 transition">
          Apply now
        </button>
      </section>

      <Footer />
    </div>
  );
}