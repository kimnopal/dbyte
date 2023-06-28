import { useForm } from "@inertiajs/react";

const Answering = ({ question }) => {
    const { data, setData, post, errors } = useForm({
        content: '',
        question_id: question.id
    })

    const submit = (e) => {
        e.preventDefault()
        post('/answer', { preserveState: false })
    }

    return (
        <div className="w-11/12 lg:w-full mb-12 mx-auto">
            <form onSubmit={submit} className="flex flex-col gap-4">
                <textarea
                    className="w-full border border-primary px-4 py-2 rounded-lg"
                    placeholder="Tulis jawabanmu..."
                    rows={3}
                    value={data.answer}
                    onChange={(e) => setData('content', e.target.value)}
                />
                <button
                    className="bg-primary py-2 px-4 text-white font-bold rounded-lg w-fit self-end"
                    type="submit"
                >
                    Jawab
                </button>
            </form>
        </div>
    );
};

export default Answering;
