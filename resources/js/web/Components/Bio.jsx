import { Link, usePage } from "@inertiajs/react";

const Bio = ({ user }) => {
    return (
        <section className="flex flex-col pt-20 pb-6 md:pb-12 md:flex-row">
            <div className="w-full lg:w-3/5 flex flex-col mb-4">
                <div className="w-full flex flex-row gap-4 mb-4">
                    <img
                        className="w-24 h-24 rounded-full"
                        src={`${user.photo ? `/images/${user.photo}` : '/images/profile.png'}`}
                        alt=""
                    />
                    <div className="flex flex-col gap-2 justify-center">
                        <h1 className="font-semibold text-2xl">{user.username}</h1>
                        <div className="flex flex-wrap gap-2 items-center">
                            <h2 className="font-">{user.badge ?? 'Unranked'}</h2>
                            {usePage().props.auth.user.id === user.id && (
                                <Link
                                    className="bg-primary text-white px-3 py-1 rounded-lg"
                                    href={`/profile/${user.username}/edit`}
                                >
                                    Edit profil
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
                <span className="text-sm text-secondary mb-1 md:text-base">{user.major ? user.major.name : 'Belum Memilih Jurusan'}</span>
                <span className="text-sm text-secondary md:text-base">
                    {user.university ? user.university.name : 'Belum Memilih Universitas'}
                </span>
            </div>
            <div className="w-full lg:w-2/5 border border-primary p-4 rounded-lg">
                <p className="text-sm text-primary md:text-base">{user.description ?? "Tidak ada deskripsi"}</p>
            </div>
        </section>
    );
};

export default Bio;
