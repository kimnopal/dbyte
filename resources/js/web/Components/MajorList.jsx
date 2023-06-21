import { Link } from "@inertiajs/react";

const MajorList = ({ majors }) => {
    return (
        <section className="px-4 py-12">
            <div className="">
                <div className="min-w-0 overflow-x-scroll grid grid-cols-[repeat(5,minmax(auto,_1fr))] gap-4 no-scrollbar">
                    {majors.map(major => (
                        <Link key={major.id} href={`/${major.slug}`} className="major-link">{major.name}</Link>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default MajorList;