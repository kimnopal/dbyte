import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import AddQuestion from "../Components/AddQuestion";
import Questions from "../Components/Questions";
import Layout from "../Layouts/Layout";

export default function Forum({ universities, questions, auth }) {
    const { data, setData } = useForm({
        search: ''
    })

    const handleChangeSearch = (e) => {
        setData('search', e.target.value)
        let data = { page: 1, search: e.target.value }
        if (route().params.university) data['university'] = route().params.university
        if (route().params.major) data['major'] = route().params.major
        router.get(route(route().current()), data, { preserveState: true })
    }

    const paginationLinks = (maxShow) => {
        let firstNumber = questions.current_page != questions.last_page ?
            (Math.ceil(questions.current_page / (maxShow - 1)) * (maxShow - 1)) - (maxShow - 1) + 1 :
            (Math.ceil((questions.current_page - 1) / (maxShow - 1)) * (maxShow - 1)) - (maxShow - 1) + 1

        let lastNumber = firstNumber + (maxShow - 1)
        return questions.links.map((link, index) => {
            if (index === 0 || index === questions.last_page + 1) return <Link preserveState dangerouslySetInnerHTML={{ __html: link.label }} key={index} href={link.url} className="text-base font-normal border border-primary px-2 py-1 rounded-md flex justify-center items-center"></Link>

            if (index >= firstNumber && index <= lastNumber) {
                return <Link preserveState dangerouslySetInnerHTML={{ __html: link.label }} key={index} href={link.url} className={`${index === questions.current_page ? 'bg-primary text-white' : 'text-primary'} text-base font-normal border border-primary w-8 h-8 rounded-md flex justify-center items-center`}></Link>
            }
        })
    }

    return (
        <Layout auth={auth}>
            <Head title="Forum" />
            <AddQuestion universities={universities} onChangeSearch={handleChangeSearch} />
            <Questions questions={questions.data} />
            <div className="flex flex-wrap gap-3 px-4 pb-12">
                {questions.data.length != 0 && paginationLinks(3)}
            </div>
        </Layout >
    );
}
