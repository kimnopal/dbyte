import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import AddQuestion from "../Components/AddQuestion";
import Questions from "../Components/Questions";
import Layout from "../Layouts/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Forum({ majors, questions, auth }) {
    const { data, setData } = useForm({
        search: ''
    })

    const handleChange = (e) => {
        setData('search', e.target.value)
        router.get(route(route().current(), route().params), { page: 1, search: e.target.value }, { preserveState: true })
    }

    const paginationLinks = (maxShow) => {
        // const navAwal = (questions.current_page * (maxShow - 1)) - maxShow
        // if (questions.current_page % (maxShow - 1) === 1) {
        // for (let index = questions.current_page; index < questions.current_page + maxShow -1; index++) {

        // }
        // }


        // let firstNumber = questions.current_page % (maxShow - 1) === 1 ? questions.current_page :  
        let firstNumber = questions.current_page != questions.last_page ?
            (Math.ceil(questions.current_page / (maxShow - 1)) * (maxShow - 1)) - (maxShow - 1) + 1 :
            (Math.ceil((questions.current_page - 1) / (maxShow - 1)) * (maxShow - 1)) - (maxShow - 1) + 1

        let lastNumber = firstNumber + (maxShow - 1)
        // if (questions.current_page % (maxShow - 1) === 0) {
        // for (let index = questions.current_page; index < questions.current_page + maxShow -1; index++) {

        return questions.links.map((link, index) => {
            if (index === 0 || index === questions.last_page + 1) return <Link preserveState dangerouslySetInnerHTML={{ __html: link.label }} key={index} href={link.url} className="text-base font-normal border border-primary px-2 py-1 rounded-md flex justify-center items-center"></Link>
            // if (questions.current_page > maxShow && index >= questions.current_page - (questions.current_page - maxShow) && index <= questions.current_page + (questions.current_page - maxShow)) {
            //     return <Link preserveState dangerouslySetInnerHTML={{ __html: link.label }} key={index} href={link.url} className={`${index === questions.current_page ? 'bg-primary text-white' : 'text-primary'} text-base font-normal border border-primary px-2 py-1`}></Link>
            // } else if (index >= questions.current_page - (maxShow - questions.current_page) && index <= questions.current_page + (maxShow - questions.current_page)) {

            //     return <Link preserveState dangerouslySetInnerHTML={{ __html: link.label }} key={index} href={link.url} className={`${index === questions.current_page ? 'bg-primary text-white' : 'text-primary'} text-base font-normal border border-primary px-2 py-1`}></Link>
            // }

            if (index >= firstNumber && index <= lastNumber) {
                return <Link preserveState dangerouslySetInnerHTML={{ __html: link.label }} key={index} href={link.url} className={`${index === questions.current_page ? 'bg-primary text-white' : 'text-primary'} text-base font-normal border border-primary w-8 h-8 rounded-md flex justify-center items-center`}></Link>
            }


            // if (index >= questions.current_page - (questions.current_page - (maxShow - 1)) + questions.current_page - maxShow && index < questions.current_page + maxShow - (questions.current_page - maxShow)) return <Link preserveState dangerouslySetInnerHTML={{ __html: link.label }} key={index} href={link.url} className={`${index === questions.current_page ? 'bg-primary text-white' : 'text-primary'} text-base font-normal border border-primary px-2 py-1`}></Link>
        })
        // } else {
        //     return questions.links.map((link, index) => {
        //         if (index === 0 || index === questions.last_page + 1) return <Link preserveState dangerouslySetInnerHTML={{ __html: link.label }} key={index} href={link.url} className="text-base text-primary font-normal px-2 py-1 border border-primary"></Link>
        //         console.log(firstNumber)
        //         // if (index >= questions.current_page && index < questions.current_page + maxShow) return <Link preserveState dangerouslySetInnerHTML={{ __html: link.label }} key={index} href={link.url} className={`${index === questions.current_page ? 'bg-primary text-white' : 'text-primary'} text-base font-normal border border-primary px-2 py-1`}></Link>
        //         if (index >= firstNumber && index <= lastNumber) return <Link preserveState dangerouslySetInnerHTML={{ __html: link.label }} key={index} href={link.url} className={`${index === questions.current_page ? 'bg-primary text-white' : 'text-primary'} text-base font-normal border border-primary px-2 py-1`}></Link>
        //     })
        // }
    }

    return (
        <Layout auth={auth}>
            <Head title="Forum" />
            <AddQuestion majors={majors} handleChange={handleChange} />
<<<<<<< HEAD
            <Questions questions={questions.data} />
            <div className="flex flex-wrap gap-3 px-4 pb-12">
                {/* {questions.links.map((link, index) => (
                    <Link preserveState dangerouslySetInnerHTML={{ __html: link.label }} disabled={link.url == null ? true : false} key={index} href={link.url} className="text-base text-primary font-normal px-2 py-1 border border-primary"></Link>
                ))
                } */}
                {questions.data.length != 0 && paginationLinks(3)}
            </div>
        </Layout >
=======
            <Questions questions={questions} />
        </Layout>
>>>>>>> 0d44be5 (resolve conflict)
    );
}
