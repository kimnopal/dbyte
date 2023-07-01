import { Link } from "@inertiajs/react";

const SimpleProfile = ({ user }) => {
    return (
        <div className="w-full flex gap-3 items-center md:flex-col md:items-start md:w-2/6">
            <Link href={`profile/${user.username}`} className="rounded-full">
                <img
                    className="w-12 h-12 rounded-full"
                    src={`/images/${user.photo}`}
                    alt=""
                />
            </Link>
            <div className="flex flex-col">
                <Link href={`/profile/${user.username}`} className="font-bold text-md w-fit md:text-lg md:mb-2">
                    {user.username}
                </Link>
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
