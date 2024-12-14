import Link from "next/link";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";

const Header = () => {
  const loginWithRedirect = async () => {
    console.log("Redirecting to login...");
  };
  
  <MainNav isAuthenticated={true} loginWithRedirect={loginWithRedirect} />
  
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-3xl font-bold tracking-tight text-orange-500 font-dancing">
            Food.vn
          </a>
        </Link>
        <div className="md:hidden">
          <MobileNav isAuthenticated={true} loginWithRedirect={loginWithRedirect}/>
        </div>
        <div className="hidden md:block">
          <MainNav isAuthenticated={true} loginWithRedirect={loginWithRedirect} /> 
        </div>
      </div>
    </div>
  );
};

export default Header;
