
import { Link as ScrollLink } from "react-scroll";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const menuItems = [
    { title: "About", to: "hero" },
    { title: "Experience", to: "experience" },
    { title: "Education", to: "education" },
    { title: "Projects", to: "projects" },
    { title: "Skills", to: "skills" },
    { title: "Achievements", to: "achievements" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-5xl mx-auto px-4">
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
      </div>
    </nav>
  );
};

export default Navbar;
