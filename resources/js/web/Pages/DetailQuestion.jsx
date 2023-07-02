import Layout from "../Layouts/Layout";
import Answer from "../Components/Answer";
import Asked from "../Components/Asked";
import Answering from "../Components/Answering";

const DetailQuestion = ({ auth, question }) => {
    return (
        <Layout auth={auth}>
            <Asked question={question} />
            <Answering question={question} user={auth.user} />
            <Answer answers={question.answers} user={auth.user} />
        </Layout>
    );
};

export default DetailQuestion;
