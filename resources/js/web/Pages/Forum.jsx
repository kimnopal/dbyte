import AddQuestion from "../Components/AddQuestion";
import Questions from "../Components/Questions";
import GuestLayout from "../Layouts/GuestLayout";

export default function Forum({ questions, majors, auth }) {
    console.log(auth)
    return (
        <GuestLayout auth={auth}>
            <AddQuestion majors={majors} />
            <Questions questions={questions} />
        </GuestLayout>
    );
}
