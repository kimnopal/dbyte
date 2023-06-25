import { Link } from "@inertiajs/react";

const MajorList = ({ majors }) => {

    const urlParamChecker = (param) => {
        return window.location.search.includes(param)
    }

    return (
        <section className="px-4 py-12">
            <div className="">
                <div className={`grid ${urlParamChecker('/forum') ? 'grid-cols-[repeat(6,minmax(auto,_1fr))]' : 'grid-cols-[repeat(5,minmax(auto,_1fr))]'}  gap-4 no-scrollbar min-w-0 overflow-x-scroll`}>
                    {window.location.pathname.includes('/forum') ?
                        <Link key={0} href={`/forum`} className={!urlParamChecker('major') ? 'major-link-pressed' : 'major-link'}>Semua</Link> :
                        null}
                    {majors.map(major => (
                        <Link key={major.id} href={`/forum?major=${major.slug}`} className={urlParamChecker(major.slug) ? 'major-link-pressed' : 'major-link'}>{major.name}</Link>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default MajorList;