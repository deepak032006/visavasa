import Image from "next/image";
import { FaFacebookF, FaInfinity, FaInstagram, FaLinkedinIn } from "react-icons/fa";

/* -------------------- CONSTANTS -------------------- */

const SERVICE_CATEGORIES = [
  "Cat Food",
  "Rabbit Food",
  "Dog Food",
  "Birds Food",
  "Pet Toys",
  "Pet House",
];

const FAQS = [
  "What are the payment terms for the service?",
  "What if cancel a booking in the middle for the service?",
  "Who will clean up the house after the service?",
  "What if I have an issue or a doubt which I need to resolve After Book?",
];

/* -------------------- COMPONENTS -------------------- */

const Navbar = () => (
  <nav className="flex items-center h-20 px-10 bg-white border-b">
    <div className="flex items-center gap-2">
      <img src="/images/logo.png" alt="VisvasaHome" className="h-9 w-9" />
      <span className="text-lg font-semibold text-[#0B3E74]">VisvasaHome</span>
    </div>

    <div className="flex flex-1 justify-center gap-4">
      <select className="w-60 rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-600 focus:ring-2 focus:ring-blue-500">
        <option>Gandhi Path, Jaipur</option>
        <option>Vaishali Nagar</option>
      </select>

      <input
        type="text"
        placeholder="Search for ‘Electrician’"
        className="w-80 rounded-lg border border-gray-300 px-4 py-2.5 text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="bg-white px-10 py-8">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Odgri Pets Food</h1>
        <p className="mt-2 text-gray-600">⭐ 4.7 (4.8K Reviews)</p>

        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          <li>• 100% Genuine Products</li>
          <li>• Vet Recommended</li>
          <li>• Fast Delivery</li>
        </ul>
      </div>

      <div className="lg:col-span-2">
        <div className="relative h-115 w-full rounded-2xl overflow-hidden">
          <Image
            src="/images/banner.png"
            alt="Odgri Pets Food Banner"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  </section>
);

const ServiceItem = () => (
  <div className="flex items-start justify-between gap-6">
    <div className="flex-1">
      <h4 className="font-medium">Switchbox Installation</h4>
      <p className="text-sm text-gray-500 mt-1">⭐ 4.79 (4.1K reviews)</p>
      <p className="text-sm text-gray-700 mt-1">₹898 • 60 mins</p>
      <button className="text-sm text-blue-600 mt-2">View Details</button>
    </div>

    <div className="flex flex-col items-center gap-2">
      <div className="w-20 h-20 bg-gray-200 rounded-md" />
      <button className="px-4 py-1.5 text-sm border rounded-lg text-blue-600">
        Add
      </button>
    </div>
  </div>
);

const ServiceSection = ({ title }) => (
  <div className="bg-white rounded-xl border p-6">
    <h2 className="text-xl font-semibold mb-6">{title}</h2>
    <div className="space-y-6">
      {[1, 2, 3, 4].map((item) => (
        <ServiceItem key={item} />
      ))}
    </div>
  </div>
);

const FAQSection = () => (
  <section className="bg-white py-12 border-t">
    <div className="w-full px-4">
      <h2 className="text-xl font-semibold mb-4">
        Frequently asked questions
      </h2>

      {FAQS.map((question, index) => (
        <div
          key={question}
          className={`flex items-center justify-between py-4 ${
            index !== FAQS.length - 1 ? "border-b" : ""
          }`}
        >
          <p className="text-sm text-gray-800">{question}</p>
          <span className="text-gray-400">⌄</span>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full bg-white">
    <div className="mx-auto max-w-[1500px] px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
      <FooterColumn
        title="Company"
        items={[
          "About The Company",
          "Build Career With Us",
          "Resources",
          "Case Studies",
          "Portfolio",
          "Contact Us",
        ]}
      />

      <FooterColumn
        title="Services"
        items={[
          "Local Contractor",
          "Door to Door Services",
          "Pet Foods",
          "Smart Locker",
          "Installation & uninstallation",
          "Support Services",
        ]}
      />

      <FooterColumn
        title="For professionals"
        items={["Register as professional"]}
      />

      <div>
        <h4 className="font-semibold mb-4">Social links</h4>

        <div className="flex gap-3 mb-6">
          {[FaFacebookF, FaInfinity, FaInstagram, FaLinkedinIn].map(
            (Icon, i) => (
              <span
                key={i}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white text-sm"
              >
                <Icon />
              </span>
            )
          )}
        </div>

        <div className="space-y-3">
          <Image src="/images/appstore.png" alt="App Store" width={150} height={45} />
          <Image src="/images/playstore.png" alt="Play Store" width={150} height={45} />
        </div>
      </div>
    </div>

    <div className="text-center text-sm text-gray-700 mb-6 space-x-6">
      <span>Terms of Use</span>
      <span>Privacy</span>
      <span>Terms & Conditions</span>
    </div>

    <div className="bg-[#0c1633] text-white text-center text-sm py-4 rounded-t-4xl">
      Copyright © 2025 Visvashome Pvt. Ltd. All rights reserved.
    </div>
  </footer>
);

const FooterColumn = ({ title, items }) => (
  <div>
    <h4 className="font-semibold mb-4">{title}</h4>
    <ul className="space-y-2 text-sm text-gray-700">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

/* -------------------- PAGE -------------------- */

export default function OdgriPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />

      <section className="px-10 py-10">
        <div className="max-w-5xl mx-auto space-y-10">
          {SERVICE_CATEGORIES.map((category) => (
            <ServiceSection key={category} title={category} />
          ))}
        </div>
      </section>

      <FAQSection />
      <Footer />
    </main>
  );
}
