
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 shadow-md" : "bg-white/80"} backdrop-blur-sm border-b`}>
      <div className="max-w-5xl mx-auto px-4">
        {isMobile ? (
          <div className="flex justify-between items-center py-3">
            <span className="font-bold text-gray-800">Mohit Mori</span>
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle menu">
              <Menu className="h-5 w-5" />
            </Button>
            
            {mobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg animate-fade-in">
                <div className="flex flex-col p-4 gap-4">
                  {menuItems.map((item) => (
                    <ScrollLink
                      key={item.to}
                      to={item.to}
                      spy={true}
                      smooth={true}
                      duration={500}
                      onClick={() => setMobileMenuOpen(false)}
                      className="cursor-pointer text-gray-600 hover:text-blue-600 transition-colors py-2"
                    >
                      {item.title}
                    </ScrollLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <NavigationMenu className="py-2">
            <NavigationMenuList className="gap-6">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.to}>
                  <ScrollLink
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item.title}
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
