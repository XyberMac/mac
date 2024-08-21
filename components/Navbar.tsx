
import Link from "next/link";
import { Button } from "./ui/button";
import { getSession } from "@/lib/getSession";
import { signOut } from "@/auth";
import Toggle from "./Toggle";

const Navbar = async () => {
  const session = await getSession();
  const user = session?.user;

  return (
    <nav className=" flex   justify-around items-center w-full fixed top-0 right-0 left-0 h-[85px] text-purple-200 z-[390455] backdrop-blur-xl max-[930px]:w-[full] max-[620px]:justify-evenly">
      <Link href="/" className="text-xl font-extrabold hover:text-purple-300 cursor-pointer text-[springgreen] max-[810px]:ml-[200px] max-[810px]:w-[250px]  max-[620px]:text-lg max-[620px]:left-[100px] max-[620px]:hidden">
        Tech-Rehalm
      </Link>
      <div className="w-[50%] ">
        <Toggle/>
      </div>
      <ul className="flex md:flex space-x-4 list-none">
        {!user ? (
          <>
            <li>
              <Link href="/login" className="lg:w-[200px] bg-purple-600 p-3 rounded-md text-white font-bold mx-3 md:w-[150px] sm:w-[100px]">
                Login
              </Link>
            </li>
            <li>
              <Link href="/register" className="lg:w-[200px] bg-purple-600 p-3 rounded-md text-white font-bold mx-3 md:w-[150px] sm:w-[100px]">
                Register
              </Link>
            </li>
          </>
        ) : (
          <>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Button type="submit" variant={"ghost"} className="lg:w-[200px] bg-purple-600 p-3 rounded-md text-white font-bold mx-3 md:w-[150px] sm:w-[100px]">
                Logout
              </Button>
            </form>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
