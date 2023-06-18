import { Link } from "@inertiajs/react";

const Question = ({ data }) => {
    return (
        <div className="w-full flex flex-col border-2 border-secondary px-4 py-4 rounded-lg">
            <div className="flex flex-col lg:flex-row gap-y-2">
                <div className="flex flex-row gap-y-1 lg:flex-col gap-2 w-full lg:w-2/6 items-center lg:items-start">
                    <img
                        className="w-12 h-12"
                        src={data.person.profile}
                        alt=""
                    />
                    <div className="flex flex-col">
                        <h1 className="font-bold text-md">
                            {data.person.name}
                        </h1>
                        <span className="text-secondary text-xs">
                            {data.person.major}{" "}
                        </span>
                        <span className="text-secondary text-xs">
                            {data.person.school}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 w-full lg:w-4/6">
                    <h1 className="font-bold text-lg">
                        {data.question.question}{" "}
                    </h1>
                    <span className="text-secondary">
                        {data.question.answercount} orang telah menjawab
                    </span>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center">
                <span className="text-secondary text-xs">
                    {data.question.date}
                </span>
                <Link
                    href="#"
                    className="font-bold bg-primary text-white rounded-lg py-2 px-4"
                >
                    Jawab
                </Link>
            </div>
        </div>
    );
};

export default Question;
