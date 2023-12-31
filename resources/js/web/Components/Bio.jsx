import { Link, usePage } from "@inertiajs/react";

const Bio = ({ user }) => {
    return (
        <section className="flex flex-col pt-20 pb-6 md:pb-12 md:flex-row">
            <div className="w-full lg:w-3/5 flex flex-col mb-4">
                <div className="w-full flex flex-row flex-wrap gap-4 mb-4">
                    <img
                        className="w-24 h-24 rounded-full"
                        src={`${user.photo ? `/images/${user.photo}` : '/images/profile.png'}`}
                        alt=""
                    />
                    <div className="flex flex-col gap-2 justify-center">
                        <h1 className="font-semibold text-2xl">{user.username}</h1>
                        <div className="flex flex-wrap gap-2 items-center">
                            {user.badges.length !== 0 &&
                                <div className="flex">
                                    {user.badges?.map(badge => (
                                        <div key={badge.id} className="relative group cursor-pointer">
                                            <p className="hidden absolute -top-full left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white rounded-lg group-hover:block">{badge.name}</p>
                                            <img src={badge.icon} alt="" className="w-10 h-10" />
                                        </div>
                                    ))}
                                </div>
                            }
                            {usePage().props.auth.user?.id === user.id && (
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
