import QuestionEdit from "@/web/Components/QuestionEdit";
import Layout from "@/web/Layouts/Layout";

const Edit = ({ question, auth, universities }) => {
    return (
        <Layout auth={auth}>
            <QuestionEdit question={question} universities={universities} />
        </Layout>
    );
}

export default Edit;
