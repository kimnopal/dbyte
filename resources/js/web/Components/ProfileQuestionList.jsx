import SimpleQuestion from "./SimpleQuestion";

const ProfileQuestionList = ({ questions, user }) => {
    return (
        <section className="pb-12 flex flex-col items-center">
            <h1 className="text-2xl text-primary font-semibold mb-6 md:mb-7">Pertanyaan Diajukan</h1>
            <div className="w-full flex flex-col gap-y-6">
                {questions.map(question => (
                    <SimpleQuestion key={question.id} question={question} user={user} />
                ))}
            </div>
        </section>
    );
}

export default ProfileQuestionList;
