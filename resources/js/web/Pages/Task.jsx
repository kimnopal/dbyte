import Layout from "../Layouts/Layout";
import Answer from "../Components/Answer";
import Asked from "../Components/Asked";
import Answering from "../Components/Answering";

const Task = ({ auth, question }) => {
    console.log(question)
    return (
        <Layout auth={auth}>
            <Asked question={question} />
            <Answer answers={question.answers} />
            <Answering />
        </Layout>
    );
};

export default Task;
