import { Link } from "@inertiajs/react";

const Asked = ({ question }) => {
    return (
        <div className="pt-20 pb-6 md:pb-12">
            <div className="w-full flex flex-col-reverse gap-4 border border-primary rounded-lg p-4 h-fit justify-between md:flex-col md:gap-0">
                <div className="flex flex-col gap-2 md:flex-row md:gap-0">
                    <div className="w-full flex flex-col justify-between gap-3 mb-4">
                        <h1 className="font-semibold text-xl text-primary">
                            {question.content}
                        </h1>
                        <div className="flex flex-col md:flex-row md:items-center">
                            <span className="text-secondary text-sm">
                                {question.major.name}
                            </span>
                            <span className="hidden md:block md:mx-2">-</span>
                            <span className="text-secondary text-sm">
                                {question.university.name}
                            </span>
                        </div>
                    </div>
                    <span className="text-secondary text-xs  whitespace-nowrap self-end md:textsm md:self-auto">{question.created_at}</span>
                </div>
                <div className="w-fit flex items-center gap-2 md:mt-8">
                    <Link href={`/profile/${question.user.username}`} className="w-8 h-8 rounded-full">
                        <img className="w-8 h-8 rounded-full" src={`${question.user.photo ? `/images/${question.user.photo}` : '/images/profile.png'}`} alt="" />
                    </Link>
                    <div className="flex flex-col justify-center md:flex-row md:items-center">
                        <div className="flex items-center flex-wrap gap-1 md:mr-2">
                            <Link href={`/profile/${question.user.username}`} className="font-semibold text-md md:text-lg">
                                {question.user.username}
                            </Link>
                            <div className="flex">
                                {question.user.badges?.map(badge => (
                                    <div key={badge.id} className="relative group cursor-pointer">
                                        <p className="hidden absolute -top-full left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-sm rounded-md group-hover:block">{badge.name}</p>
                                        <img src={badge.icon} alt="" className="w-8 h-8" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <span className="text-secondary text-xs md:text-sm">
                            {question.user.major ? question.user.major.name : "Belum Dipilih"}
                        </span>
                        <span className="hidden md:block md:mx-2">-</span>
                        <span className="text-secondary text-xs md:text-sm">
                            {question.user.university ? question.user.university.name : "Belum Dipilih"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Asked;
