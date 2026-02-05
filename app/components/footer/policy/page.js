import Image from "next/image";

export default function AntiDiscriminationPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="VisvasaHomes" width={140} height={32} />
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-700">
            <span className="cursor-pointer hover:text-gray-900">Register As a professional</span>
            <span className="cursor-pointer hover:text-gray-900">Help</span>
            <span className="cursor-pointer hover:text-gray-900">Login / Sign Up</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Title Section */}
        <div className="bg-white rounded-lg shadow-sm p-12 mb-8 text-center">
          <h1 className="text-3xl font-bold mb-6">Anti Discription Policy</h1>
          <button className="px-6 py-2 border-2 border-gray-300 rounded-full flex items-center gap-2 mx-auto hover:border-gray-400 transition">
            <span className="text-xl">🇮🇳</span>
            <span className="font-medium">IND</span>
          </button>
        </div>

        {/* Policy Content */}
        <div className="bg-white rounded-lg shadow-sm p-12">
          <h2 className="text-lg font-semibold italic mb-6">Anti-Discrimination Policy</h2>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Visvasa is committed to empowering local service professionals and delivering safe, reliable, and high-quality home services to customers. We believe in fairness, dignity, and equal opportunity for everyone using the Visvasa platform.
            </p>
            
            <p>
              Visvasa strictly prohibits discrimination against customers or service partners on the basis of religion, caste, race, ethnicity, national origin, disability, sexual orientation, sex, marital status, gender identity, age, or any other characteristic protected under applicable laws.
            </p>
            
            <p>
              Discrimination includes, but is not limited to, refusing to provide services, denying access to the platform, or engaging in unfair treatment based on any of the above characteristics.
            </p>
            
            <p>
              Any customer or service partner found to be in violation of this Anti-Discrimination Policy may face immediate action, including suspension or permanent removal from the Visvasa platform.
            </p>
            
            <p>
              Visvasa reserves the right to take appropriate steps to ensure a respectful, inclusive, and professional environment for all.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}