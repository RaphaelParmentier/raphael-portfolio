export default function Navbar() {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        border-b border-[#1F232B]
        bg-[#08090B]/70
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          py-4
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="
              h-3
              w-3
              rounded-full
              bg-[#E9792D]
              shadow-[0_0_20px_rgba(233,121,45,0.8)]
            "
          />

          <span
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-[#F3F1EA]
            "
          >
            RP Systems
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden gap-8 md:flex">
          {[
            { label: "Projects", href: "#projects" },
            { label: "Experience", href: "#experience" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                text-sm
                text-[#A7A29A]
                transition-colors
                hover:text-[#F3F1EA]
              "
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}