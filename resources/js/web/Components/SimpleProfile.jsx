import { Link } from "@inertiajs/react";

const SimpleProfile = ({ user }) => {
    return (
        <div className="w-full flex gap-3 items-center md:flex-col md:items-start md:w-2/6">
            <Link href={`profile/${user.username}`} className="rounded-full">
                <img
                    className="w-12 h-12 rounded-full"
                    src={`${user.photo ? `/images/${user.photo}` : '/images/profile.png'}`}
                    alt=""
                />
            </Link>
            <div className="flex flex-col">
                <div className="flex items-center flex-wrap gap-1 md:mb-2">
                    <Link href={`/profile/${user.username}`} className="font-bold text-md w-fit md:text-lg">
                        {user.username}
                    </Link>
                    <div className="flex">
                        {user.badges?.map(badge => (
                            <div key={badge.id} className="relative group cursor-pointer">
                                <p className="hidden absolute -top-full left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-sm rounded-md group-hover:block">{badge.name}</p>
                                <img src={badge.icon} alt="" className="w-8 h-8" />
                            </div>
                        ))}
                    </div>
                </div>
                <span className="text-secondary text-xs md:text-sm md:mb-1">
                    {user.major ? user.major.name : 'Belum Dipilih'}{" "}
                </span>
                <span className="text-secondary text-xs md:text-sm">
                    {user.university ? user.university.name : 'Belum Dipilih'}
                </span>
            </div>
        </div>
    );
}

export default SimpleProfile;
