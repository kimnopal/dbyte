import { Link } from "@inertiajs/react";

const Major = () => {
    return (
        <section className="px-4 py-12">
            <div className="">
                <div className="min-w-0 overflow-x-scroll grid grid-cols-[repeat(5,minmax(auto,_1fr))] gap-4 no-scrollbar">
                    <Link href="#" className="major-link">Teknik Elektro</Link>
                    <Link href="#" className="major-link">Teknik Sipil</Link>
                    <Link href="#" className="major-link">Teknik Geologi</Link>
                    <Link href="#" className="major-link">Teknik Industri</Link>
                    <Link href="#" className="major-link">Informatika</Link>
                </div>

            </div>
        </section>
    );
}

export default Major;