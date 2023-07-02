import { Link } from "@inertiajs/react";

const Answer = ({ answers }) => {
    return (
        <>
            {/* <h1 className="text-lg text-primary font-semibold border-b border-b-primary mb-4 pb-2 w-fit">Jawaban Orang Lain</h1> */}
            {answers.map(answer => (
                <div key={answer.id} className="w-full flex items-center gap-4 pb-6 md:gap-8 md:pb-12">
                    <div className="text-center">
                        <Link className="text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-up-fill w-5 h-5 md:w-7 md:h-7" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                            </svg>
                        </Link>
                        <p>{answer.voters_count}</p>
                    </div>
                    <div className="w-full">
                        <div className="flex items-center flex-wrap gap-2 mb-2 md:mb-4">
                            <Link className="w-8 h-8 rounded-full">
                                <img className="w-8 h-8 rounded-full" src={`${answer.user.photo ? `/images/${answer.user.photo}` : '/images/profile.png'}`} alt="" />
                            </Link>
                            <div className="flex flex-col md:items-center md:flex-row">
                                <Link className="font-semibold text-md md:mr-2 md:text-lg">{answer.user.username}</Link>
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
