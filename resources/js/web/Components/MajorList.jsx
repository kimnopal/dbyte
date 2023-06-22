import { Link } from "@inertiajs/react";

const MajorList = ({ majors }) => {

    const uriChecker = (uri) => {
        return window.location.pathname.includes(uri)
    }

    return (
        <section className="px-4 py-12">
            <div className="">
                <div className={`grid ${uriChecker('/forum') ? 'grid-cols-[repeat(6,minmax(auto,_1fr))]' : 'grid-cols-[repeat(5,minmax(auto,_1fr))]'}  gap-4 no-scrollbar min-w-0 overflow-x-scroll`}>
                    {uriChecker('/forum') && <Link key={0} href={`/forum`} className={window.location.pathname === '/forum' ? 'major-link-pressed' : 'major-link'}>Semua</Link>}
                    {majors.map(major => (
                        <Link key={major.id} href={`/forum/${major.slug}`} className={uriChecker(major.slug) ? 'major-link-pressed' : 'major-link'}>{major.name}</Link>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default MajorList;