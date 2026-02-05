import Footer from "../page";
import Image from "next/image";




export default function Home() {
  return (
    <main className="bg-[#F7F8FA] min-h-screen">

       <div className=" py-5 px-6 flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <Image src="/images/logo.png" alt="logo" width={128} height={28} />
              </div>
              <div className="flex gap-6 text-gray-600">
                <span>Register As a professional</span>
                <span>Help</span>
              </div>
            </div>

      {/* Hero Section */}
      <section className="relative bg-white px-20 py-24 flex items-center justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl font-extrabold text-orange-600 leading-tight">
            Earn More. Earn Respect. Safety Ensured.
          </h2>
          <p className="mt-6 text-2xl italic text-gray-500">
            Join 100+ service professionals across Jaipur
          </p>
        </div>

        
        <Image
        src="/images/register.png"
        alt="Service professionals"
        width={500}
        height={350}
        className="rounded-xl object-cover"
      />
      </section>

      {/* CTA Box */}
      <section className="mx-20 mt-16 bg-orange-600 rounded-2xl p-14 text-center">
        <h2 className="text-white text-4xl font-extrabold mb-8">
          Join Visvasahome to change your life
        </h2>

        <div className="flex justify-center items-center gap-4">
          <div className="flex items-center bg-white/20 border border-white rounded-xl px-4 py-3 text-white">
            <span className="mr-3 text-xl">+91</span>
            <input
              type="text"
              placeholder="Your phone number"
              className="bg-transparent outline-none placeholder-white/70"
            />
          </div>

          <button className="bg-white/30 border border-white px-10 py-3 rounded-xl text-white font-bold">
            Join us
          </button>
        </div>
      </section>

      {/* Middle Text */}
      <section className="text-center py-24">
        <h2 className="text-4xl font-extrabold">
          Join Visvasahome to change your life
        </h2>
        <p className="mt-4 text-xl italic text-gray-500">
          Visvasahome is an app-based marketplace that empowers professionals like you
        </p>
      </section>

      {/* Footer */}
      <Footer />
      

    </main>
  )
}
