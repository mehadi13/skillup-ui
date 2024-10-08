import { CircleUser, Menu, Package2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "../../assets/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "@/provider/AuthProvider";

function Header() {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdownClick = () => {
    setIsDropdownOpen(false);
  };

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
      <header className=" border-b bg-background  sticky top-0">
        <div className="mx-auto max-w-screen-xl flex h-16 items-center gap-4 px-4 sm:px-6 lg:px-8">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link href="#" className="md:flex md:items-center md:gap-1">
            <img className="w-20" src={logo} alt="logo" />
          </Link>
          <div className="grid grid-cols-2 gap-3">
            <Link
              to="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Courses
            </Link>
          </div>
        </nav>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-muted-foreground hover:text-foreground"
                onClick={handleLinkClick}
              >
                Courses
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <div className="ml-auto flex-1 sm:flex-initial"></div>
          {user ? (
            <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><Link to="/dev" onClick={handleDropdownClick}>Profile</Link></DropdownMenuItem>
                <DropdownMenuItem><Link to="/dev" onClick={handleDropdownClick}>Cart</Link></DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <Link to="/signup"><Button>Sign Up</Button></Link>
              <Link to="/signin"><Button>Sign In</Button></Link>
            </div>
          )}
        </div>
        </div>
      </header>
  );
}

export default Header;
