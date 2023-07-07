import { Link, router } from "@inertiajs/react";

const Answer = ({ answers, user }) => {
    const handleLike = (e) => {
        router.post(route('answer.update', e.currentTarget.value), { _method: 'patch' }, { preserveScroll: true })
    }
    console.log(answers);
    return (
        <>
            {answers.map(answer => (
                <div key={answer.id} className="w-full flex items-center gap-4 pb-6 md:gap-8 md:pb-10">
                    <div className="text-center">
                        <button type="button" onClick={handleLike} className="text-primary" value={answer.id}>
                            {answer.voters.filter(voter => voter.username == user?.username).length === 0 ?
                                (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-up  w-5 h-5 md:w-7 md:h-7" viewBox="0 0 16 16">
                                        <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
                                    </svg>
                                ) :
                                (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-up-fill w-5 h-5 md:w-7 md:h-7" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                    </svg>

                                )
                            }
                        </button>
                        <p className="text-base text-primary">{answer.voters_count}</p>
                    </div>
                    <div className="w-full">
                        <div className="flex items-center flex-wrap gap-2 mb-2 md:mb-4">
                            <Link href={`/profile/${answer.user.username}`} className="w-8 h-8 rounded-full">
                                <img className="w-8 h-8 rounded-full" src={`${answer.user.photo ? `/images/${answer.user.photo}` : '/images/profile.png'}`} alt="" />
                            </Link>
                            <div className="flex flex-col md:items-center md:flex-row">
                                <div className="flex items-center flex-wrap gap-1 md:mr-2">
                                    <Link href={`/profile/${answer.user.username}`} className="font-semibold text-md md:text-lg">
                                        {answer.user.username}
                                    </Link>
                                    <div className="flex">
                                        {answer.user.badges?.map(badge => (
                                            <div key={badge.id} className="relative group cursor-pointer">
                                                <p className="hidden absolute -top-full left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-sm rounded-md group-hover:block">{badge.name}</p>
                                                <img src={badge.icon} alt="" className="w-8 h-8" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <span className="text-secondary text-xs md:text-sm">
                                    {answer.user.major ? answer.user.major.name : 'Belum Dipilih'}
                                </span>
                                <span className="hidden md:block md:mx-2">-</span>
                                <span className="text-secondary text-xs md:text-sm">{answer.user.university ? answer.user.university.name : 'Belum Dipilih'}
                                </span>
                            </div>
                        </div>
                        <div className="w-full flex flex-col border border-primary rounded-lg p-4 self-end">
                            <div className="text-primary mb-2">
                                {answer.content}
                            </div>
                            <div className="text-sm text-secondary self-end">{answer.created_at}</div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Answer;
