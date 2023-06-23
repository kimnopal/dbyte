import { Head, Link, useForm, usePage } from "@inertiajs/react";
import AddQuestion from "../Components/AddQuestion";
import Questions from "../Components/Questions";
import Layout from "../Layouts/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Forum({ majors, major, auth }) {
    const [questions, setQuestions] = useState({ data: [], links: [] })
    const { data, setData } = useForm({
        search: '',
        filter: '',
        page: ''
    })

    useEffect(() => {
        if (major) setData('filter', major.id)
    }, [])

    useEffect(() => {
        async function fetchQuestions() {
            const newQuestions = (await axios.get(`/forum/search?search=${data.search}&page=${data.page}&filter=${data.filter}`)).data
            setQuestions(await newQuestions)
            console.log('render')
        }
        fetchQuestions()
    }, [data])

    const handleChange = (e) => {
        setData((prevData) => ({ ...prevData, page: 1, search: e.target.value }))
    }

    console.log(questions)
    console.log(data)

    return (
        <Layout auth={auth}>
            <Head title="Forum" />
            <AddQuestion majors={majors} handleChange={handleChange} />
            <Questions questions={questions.data} />
            <div>
                {questions.links.map((link, index) => (
                    <Link disabled={link.url == null ? true : false} key={index} href='#' onClick={() => setData('page', link.url?.charAt(link.url?.length - 1))} className="text-base text-primary font-normal px-2 py-1 border border-secondary">{link.label}</Link>
                ))
                }
            </div>
        </Layout>
    );
}
