import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export const Navigation = () => {

    const { user, error, isLoading } = useUser();

    return (
      <header className="md:flex block text-center justify-around p-2">
        <h1><Link href="/">Blog Auth</Link></h1>
        <ul>
            {user ? (
             <div className="flex items-center h-full justify-center md:my-0 my-3">   
              <li>
                Welcome {user.name},
                <a href="/api/auth/logout" className="button">Log out</a>
              </li>
            </div>
            ) : (
              <li><a href="/api/auth/login" className="button mt-3 md:mt-0">Login</a></li>
            )}
        </ul>
    </header>

    );
} 