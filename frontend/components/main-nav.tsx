import { Button } from "@/components/ui/button"; 
import Link from "next/link";
import UsernameMenu from "./username-menu";

const MainNav = ({ isAuthenticated, loginWithRedirect }: AuthProps) => {
    return (
        <span className="flex space-x-2 items-center">
            {isAuthenticated ? (
                <>
                    <Link href="/order-status" className="font-bold hover:text-orange-500">
                        Order Status
                    </Link>
                    <UsernameMenu />
                </>
            ) : (
                <Button
                    variant="ghost"
                    className="font-bold hover:text-orange-500 hover:bg-white"
                    onClick={async () => await loginWithRedirect()}
                >
                    Log In
                </Button>
            )}
        </span>
    );
};

export default MainNav;
