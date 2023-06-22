import { Head, useForm } from "@inertiajs/react";
import AddQuestion from "../Components/AddQuestion";
import Questions from "../Components/Questions";
import Layout from "../Layouts/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Forum({ majors, auth }) {
    const [questions, setQuestions] = useState([])
    const { data, setData, post } = useForm({
        search: ''
    })

    // useEffect(() => {
    //     async function fetchData() {
    //         const questions = (await axios.post('/forum/search', data)).data
    //         setQuestions(await questions)
    //     }
    //     fetchData()
    // }, [])

    useEffect(() => {
        async function fetchQuestions() {
            const questions = (await axios.post('/forum/search', data)).data
            setQuestions(await questions)
        }
        fetchQuestions()
    }, [data])

    const handleChange = (e) => {
        setData('search', e.target.value)
    }

    return (
        <Layout auth={auth}>
            <Head title="Forum" />
            <AddQuestion majors={majors} handleChange={handleChange} />
            <Questions questions={questions} />
        </Layout>
    );
}
