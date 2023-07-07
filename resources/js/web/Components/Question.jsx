import { Link } from "@inertiajs/react";
import SimpleProfile from "./SimpleProfile";

const Question = ({ question }) => {
    return (
        <div className="w-full flex flex-col border-2 border-secondary p-4 rounded-lg">
            <div className="flex flex-col mb-4 md:flex-row gap-4 md:gap-6">
                <SimpleProfile user={question.user} />
                <div className="w-full flex flex-col gap-3 lg:w-4/6">
                    <Link href={`/forum/${question.slug}`} className="font-semibold text-xl w-fit">
                        {question.content.length > 20 ? question.content.slice(0, 70) + '...' : question.content}{" "}
                    </Link>
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-3">
                        <Link href={`/forum?university=${question.university.slug}`} className="text-secondary text-sm w-fit md:text-base">
                            {question.university.name}
                        </Link>
                        <div className="hidden w-[5px] h-[5px] rounded-full bg-secondary md:block"></div>
                        <Link href={`/forum?major=${question.major.slug}`} className="text-secondary text-sm w-fit md:text-base">
                            {question.major.name}
                        </Link>
                    </div>
                    <span className="text-secondary text-sm md:text-base">
                        {question.answers_count} orang telah menjawab
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
