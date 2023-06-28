import { Link } from "@inertiajs/react";

const Question = ({ question }) => {
    return (
        <div className="w-full flex flex-col border-2 border-secondary px-4 py-4 rounded-lg">
            <div className="flex flex-col lg:flex-row gap-y-2">
                <div className="flex flex-row gap-y-1 lg:flex-col gap-2 w-full lg:w-2/6 items-center lg:items-start">
                    <img
                        className="w-12 h-12 rounded-full"
                        src={`/images/${question.user.photo}`}
                        alt=""
                    />
                    <div className="flex flex-col">
                        <h1 className="font-bold text-md">
                            {question.user.username}
                        </h1>
                        <span className="text-secondary text-xs">
                            {question.user.major.name}{" "}
                        </span>
                        <span className="text-secondary text-xs">
                            {question.user.university.name}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 w-full lg:w-4/6">
                    <h1 className="font-bold text-lg">
                        {question.content}{" "}
                    </h1>
                    <div className="flex items-center gap-3">
                        <span className="text-secondary">
                            {question.university.name}
                        </span>
                        <div className="w-[5px] h-[5px] rounded-full bg-secondary"></div>
                        <span className="text-secondary">
                            {question.major.name}
                        </span>
                    </div>
                    <span className="text-secondary">
                        {question.answers.length} orang telah menjawab
                    </span>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center">
                <span className="text-secondary text-xs">
                    {question.created_at}
                </span>
                <Link
                    href={`/forum/${question.slug}`}
                    className="font-bold bg-primary text-white rounded-lg py-2 px-4 w-fit"
                >
                    Jawab
                </Link>
            </div>
        </div>
    );
};

export default Question;
