const Asked = ({ question }) => {
    return (
        <div className="flex flex-col mt-20 mb-6 md:mb-12 gap-y-3 border border-primary rounded-lg px-8 py-4 h-fit justify-between w-11/12 lg:w-full mx-auto">
            <div className="flex flex-col-reverse lg:flex-row w-full justify-between">
                <h1 className="font-bold text-xl">
                    {question.content}
                </h1>
                <span className="text-secondary text-sm">{question.created_at}</span>
            </div>
            <span className="text-secondary text-sm">
                {question.major.name} - {question.university.name}
            </span>
            <div className="flex items-center gap-2 mt-8 flex-wrap">
                <img className="w-8 h-8" src="/images/profile.png" alt="" />
                <h1 className="font-bold text-xl">{question.user.username}</h1>
                <span className="font-light text-secondary text-sm">
                    {question.user.major.name} - {question.user.university.name}
                </span>
            </div>
        </div>
    );
};

export default Asked;
