import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated, getCurrentUser, signOut } from "@/lib/actions/auth.action";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  const user = await getCurrentUser(); // Fetch the current user details

  const handleLogout = async () => {
    "use server"; // Ensure this runs on the server side
    await signOut(); // Call logout function
    redirect("/sign-in"); // Redirect to login page
  };

  return (
    <div className="root-layout">
      <nav className="flex justify-between items-center p-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100">IntervuAI</h2>
        </Link>

        {user && (
          <form action={handleLogout}>
            <button 
              type="submit" 
              className="text-primary-100 font-semibold cursor-pointer 
                         text-lg sm:text-xl md:text-2xl lg:text-3xl"
            >
              {user.name}
            </button>
          </form>
        )}
      </nav>

      {children}
    </div>
  );
};

export default Layout;
