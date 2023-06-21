import GuestLayout from "../Layouts/GuestLayout";
import Answer from "../Components/Answer";
import Asked from "../Components/Asked";
import Answering from "../Components/Answering";

const Task = () => {
    return (
        <GuestLayout>
            <Asked />
            <Answer />
            <Answering />
        </GuestLayout>
    );
};

export default Task;
