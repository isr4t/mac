import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 border-b border-zinc-800 pb-8">
          {[
            {
              title: "Shop and Learn",
              items: ["Mac", "iPad", "iPhone", "Watch", "AirPods"],
            },
            {
              title: "Services",
              items: ["Apple Music", "iCloud", "Apple TV+", "Apple Arcade"],
            },
            {
              title: "Apple Store",
              items: ["Find a Store", "Genius Bar", "Today at Apple", "Order Status"],
            },
            {
              title: "For Business",
              items: ["Apple and Business", "Shop for Business"],
            },
            {
              title: "About Apple",
              items: ["Newsroom", "Careers", "Investors", "Ethics & Compliance"],
            },
          ].map((section, i) => (
            <div key={i}>
              <h4 className="text-white font-semibold mb-3 text-base">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, j) => (
                  <li
                    key={j}
                    className="relative cursor-pointer transition-all duration-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Apple Inc. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-2 sm:mt-0">
            {["Privacy Policy", "Terms of Use", "Sales and Refunds", "Legal", "Site Map"].map(
              (link, i) => (
                <a
                  key={i}
                  href="#"
                  className="relative cursor-pointer hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
