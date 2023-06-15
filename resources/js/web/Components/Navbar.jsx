import { Link } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
    const [isToggle, setIsToggle] = useState(false)
    const navLinksWrapper = useRef()


    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isToggle && navLinksWrapper.current && !navLinksWrapper.current.contains(e.target)) {
                setIsToggle(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            console.log('unmount')
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isToggle])


    return (
        <nav className="fixed top-0 left-0 right-0">
            <div className="px-4 py-2 md:max-w-[895px] m-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl text-primary font-bold">dByte</h1>
                    </div>
                    <div
                        className={`${isToggle ? 'visible opacity-100 !top-[120%]' : 'invisible'} opacity-0 flex flex-col items-center absolute top-[110%] right-4 transition-all px-4 rounded-md bg-primary/10 md:visible md:opacity-100 md:flex-row md:static md:px-0 md:gap-7 md:bg-transparent`}>
                        <Link href="#" className="text-lg text-primary font-medium py-2 mx-5 md:mx-0">HOME</Link>
                        <Link href="#" className="text-lg text-primary font-medium py-2 mx-5 md:mx-0">MASUK</Link>
                        <Link href="#" className="text-lg text-primary font-medium py-2 mx-5 md:mx-0">DAFTAR</Link>
                    </div>
                    <div className="flex flex-col gap-[5px] md:hidden" ref={navLinksWrapper} onClick={() => setIsToggle(!isToggle)}>
                        <span className="block w-[28px] h-[3px] bg-primary"></span>
                        <span className="block w-[28px] h-[3px] bg-primary"></span>
                        <span className="block w-[28px] h-[3px] bg-primary"></span>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;