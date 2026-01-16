export default function OdgriPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center h-20 px-10 ">

        {/* LEFT – LOGO */}
        <div className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="VisvasaHome"
            className="h-9 w-9"
          />
          <span className="text-lg font-semibold text-[#0B3E74]">
            VisvasaHome
          </span>
        </div>

        {/* CENTER – SEARCH AREA */}
        <div className="flex flex-1 justify-center gap-4">
          <select
            className="
              w-60
              rounded-lg
              border
              border-gray-300
              px-4
              py-2.5
              text-sm
              text-gray-600
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          >
            <option>Gandhi Path, Jaipur</option>
            <option>Vaishali Nagar</option>
          </select>

          <input
            type="text"
            placeholder="Search for ‘Electrician’"
            className="
              w-80
              rounded-lg
              border
              border-gray-300
              px-4
              py-2.5
              text-sm
              placeholder-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />
        </div>

      </nav>
    </main>
  );
}
