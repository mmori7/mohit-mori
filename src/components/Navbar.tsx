
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const menuItems = [
    { title: "About", to: "hero" },
    { title: "Experience", to: "experience" },
    { title: "Education", to: "education" },
    { title: "Projects", to: "projects" },
    { title: "Skills", to: "skills" },
    { title: "Open Source", to: "opensource" },
    { title: "Achievements", to: "achievements" },
  ];

  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-gray-900/90 backdrop-blur-lg shadow-md shadow-blue-500/10" : "bg-transparent"}`}>
      <div className="max-w-5xl mx-auto px-4">
        {isMobile ? (
          <div className="flex justify-between items-center py-4">
            <span className="font-bold text-blue-300 tracking-wider">Mohit Mori</span>
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle menu" className="text-blue-300 hover:bg-blue-900/40">
              <Menu className="h-5 w-5" />
            </Button>
            
            {mobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-gray-900/90 backdrop-blur-lg border-t border-blue-500/30 shadow-lg animate-fade-in">
                <div className="flex flex-col p-4 gap-4">
                  {menuItems.map((item) => (
                    <ScrollLink
                      key={item.to}
                      to={item.to}
                      spy={true}
                      smooth={true}
                      duration={800}
                      onClick={() => setMobileMenuOpen(false)}
                      className="cursor-pointer text-blue-300 hover:text-blue-100 transition-colors py-2 text-center"
                    >
                      {item.title}
                    </ScrollLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <NavigationMenu className="py-4">
            <NavigationMenuList className="gap-8">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.to}>
                  <ScrollLink
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={800}
                    className="cursor-pointer text-blue-300 hover:text-blue-100 transition-colors relative group"
                  >
                    {item.title}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </ScrollLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
