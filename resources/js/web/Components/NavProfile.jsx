import { Link } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";

const NavProfile = () => {
    const [isToggle, setIsToggle] = useState(false)
    const navProfile = useRef()

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isToggle && navProfile.current && !navProfile.current.contains(e.target)) {
                setIsToggle(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isToggle])

    return (
        <div className="flex flex-col items-center py-2 rounded-lg cursor-pointer border border-secondary md:border-none md:relative md:py-0" onClick={() => setIsToggle(!isToggle)} ref={navProfile}>
            <div className="aspect-square w-8 rounded-full overflow-hidden md:w-9">
                <img src="/images/profile.png" alt="" />
            </div>
            <div className={`${isToggle ? 'visible !h-auto md:!opacity-100 md:!top-[130%]' : 'invisible'} h-0 flex flex-col items-center md:transition-all md:!h-auto md:opacity-0 md:rounded-md md:bg-white md:shadow-lg md:border md:border-secondary md:absolute md:top-[110%] md:right-0`}>
                <Link className="text-lg text-primary font-medium px-10 py-[6px]">Profil</Link>
                {/* <hr className="bg-secondary h-1 w-full" /> */}
                <form action="">
                    <button type="submit" className="text-lg text-primary font-medium px-10 py-[6px]">Logout</button>
                </form>
            </div>
        </div>
    );
}

export default NavProfile;