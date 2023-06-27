import { Link } from "@inertiajs/react";

const Bio = ({ user }) => {
    console.log(user)
    return (
        <section className="flex flex-col lg:flex-row px-4 pt-20 pb-6 md:pb-12 gap-y-3">
            <div className="w-full lg:w-3/5 flex flex-col gap-y-2">
                <div className="w-full flex flex-row gap-4">
                    <img
                        className="w-24 h-24 rounded-full"
                        src={`/images/${user.photo}`}
                        alt=""
                    />
                    <div className="flex flex-col gap-2 justify-center">
                        <h1 className="font-bold text-2xl">{user.username}</h1>
                        <div className="flex flex-row gap-4 items-center">
                            <h2 className="font-">{user.badge ?? 'Unranked'}</h2>
                            <Link
                                className="bg-primary text-white px-3 py-1 rounded-lg"
                                href={`/profile/${user.username}/edit`}
                            >
                                Edit profil
                            </Link>
                        </div>
                    </div>
                </div>
                <span className="text-sm text-secondary">{user.major ? user.major.name : 'Belum Memilih Jurusan'}</span>
                <span className="text-sm text-secondary">
                    {user.university ? user.university.name : 'Belum Memilih Universitas'}
                </span>
            </div>
            <div className="w-full lg:w-2/5 border border-secondary p-4 rounded-lg">
                <p>{user.description}</p>
            </div>
        </section>
    );
};

export default Bio;
