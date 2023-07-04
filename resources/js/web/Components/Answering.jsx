import { Link, useForm } from "@inertiajs/react";

const Answering = ({ question, user }) => {
    const { data, setData, post, errors } = useForm({
        content: '',
        question_id: question.id
    })

    const submit = (e) => {
        e.preventDefault()
        post('/answer', { preserveState: false })
    }

    return (
        <div className="w-full pb-6">
            <div className="w-fit flex items-center gap-2 mb-2 md:mb-4">
                <img className="w-8 h-8 rounded-full" src={`${user?.photo ? `/images/${user.photo}` : '/images/profile.png'}`} alt="" />
                <div className="flex flex-col justify-center md:flex-row md:items-center">
                    <div className="flex items-center flex-wrap gap-1 md:mr-2">
                        <p className="font-semibold text-md md:text-lg">{user?.username}</p>
                        <div className="flex">
                            {user?.badges?.map(badge => (
                                <div key={badge.id} className="relative group cursor-pointer">
                                    <p className="hidden absolute -top-full left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-sm rounded-md group-hover:block">{badge.name}</p>
                                    <img src={badge.icon} alt="" className="w-8 h-8" />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <span className="text-secondary text-xs md:text-sm">
                        {user.major.name}
                    </span>
                    <span className="hidden md:block md:mx-2">-</span>
                    <span className="text-secondary text-xs md:text-sm">
                        {user.university.name}
                    </span> */}
                </div>
            </div>
            <form onSubmit={submit} className="flex flex-col gap-4">
                <textarea
                    className="w-full border border-primary px-4 py-2 rounded-lg text-base text-primary"
                    placeholder="Tulis jawabanmu..."
                    rows={3}
                    value={data.answer}
                    onChange={(e) => setData('content', e.target.value)}
                />
                <button
                    className="bg-primary py-2 px-4 text-white font-bold rounded-lg w-fit self-end"
                    type="submit"
                >
                    Jawab
                </button>
            </form>
        </div>
    );
};

export default Answering;
