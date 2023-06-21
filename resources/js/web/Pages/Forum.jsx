import { Head } from "@inertiajs/react";
import AddQuestion from "../Components/AddQuestion";
import Questions from "../Components/Questions";
import Layout from "../Layouts/Layout";

export default function Forum({ questions, majors, auth }) {
    console.log(auth)
    return (
        <Layout auth={auth}>
            <Head title="Forum" />
            <AddQuestion majors={majors} />
            <Questions questions={questions} />
        </Layout>
    );
}
