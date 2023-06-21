import AddQuestion from "../Components/AddQuestion";
import Questions from "../Components/Questions";
import GuestLayout from "../Layouts/GuestLayout";

export default function Forum({ questions, majors }) {
    console.log(questions)
    return (
        <GuestLayout>
            <AddQuestion majors={majors} />
            <Questions questions={questions} />
        </GuestLayout>
    );
}
