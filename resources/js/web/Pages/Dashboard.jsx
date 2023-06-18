import AddQuestion from "../Components/AddQuestion";
import Questions from "../Components/Questions";
import GuestLayout from "../Layouts/GuestLayout";
import DummyData from "../data/dummyquestion.json";

export default function Dashboard() {
    const data = DummyData;
    return (
        <GuestLayout>
            <AddQuestion />
            <Questions data={data} />
        </GuestLayout>
    );
}
