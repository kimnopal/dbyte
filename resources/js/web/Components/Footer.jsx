import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <footer className="bg-primary">
            <div className="px-4 py-2 md:max-w-[895px] m-auto">
                <div className="grid grid-cols-1 sm:grid-cols-4 sm:items-center">
                    <div className="py-5 sm:py-0 sm:col-span-2 text-center">
                        <h1 className="text-2xl text-white font-bold">dByte</h1>
                    </div>
                    <div className="text-white col-span-2 grid grid-rows-2 gap-3 sm:grid-rows-none sm:grid-cols-2">
                        <div className="flex gap-1 flex-col items-center col-span-1">
                            <Link href="#">Instagram</Link>
                            <Link href="#">Whatsapp</Link>
                            <Link href="#">Youtube</Link>
                        </div>
                        <div className="flex gap-1 flex-col items-center col-span-1">
                            <Link href="#">Instagram</Link>
                            <Link href="#">Whatsapp</Link>
                            <Link href="#">Youtube</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;