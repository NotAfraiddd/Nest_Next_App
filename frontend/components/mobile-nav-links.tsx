import Link from "next/link"; 
import { Button } from "@/components/ui/button"; 

const MobileNavLinks = () => {
  return (
    <>
      <Link href="/order-status" className="flex bg-white items-center font-bold hover:text-orange-500">
        Order Status
      </Link>
      <Link href="/manage-restaurant" className="flex bg-white items-center font-bold hover:text-orange-500">
        My Restaurant
      </Link>
      <Link href="/user-profile" className="flex bg-white items-center font-bold hover:text-orange-500">
        User Profile
      </Link>
      <Button
        // onClick={() => logout({ returnTo: window.location.origin })}
        className="flex items-center px-3 font-bold hover:bg-gray-500"
      >
        Log Out
      </Button>
    </>
  );
};

export default MobileNavLinks;
