import Question from "./Question";

export default function Questions({ questions }) {
    return (
        <section className="pb-12">
            <div className="flex flex-col gap-y-6 ">
                {questions.map((question) => (
                    <Question question={question} key={question.id} />
                ))}
            </div>
        </section>
    );
}
