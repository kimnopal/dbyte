import { useForm } from "@inertiajs/react";
import DropdownInput from "./DropdownInput";

const QuestionEdit = ({ question, universities }) => {
    const { data, setData, post, errors } = useForm({
        university_id: question.university.id,
        major_id: question.major.id,
        content: question.content,
        _method: 'put'
    })

    const submit = (e) => {
        e.preventDefault()
        post(`/forum/${question.slug}`, { preserveScroll: true })
    }

    const handleChangeUniversity = (e) => setData(prevData => ({ ...prevData, university_id: e.target.value, major_id: '' }))
    const handleChangeMajor = (e) => setData('major_id', e.target.value)

    return (
        <section className="pt-20 pb-6 md:pb-12">
            <form onSubmit={submit} className="w-full flex flex-col gap-3">
                <label
                    className="text-secondary font-bold text-lg"
                    htmlFor="pertanyaan"
                >
                    Ubah Pertanyaanmu
                </label>
                <div className="w-full">
                    <textarea value={data.content} onChange={(e) => setData('content', e.target.value)} className={`border ${errors.content ? 'border-red-500' : 'border-primary'} w-full rounded-lg mb-1`} rows={5} />
                    <p className="font-normal text-sm text-red-500">{errors.content}</p>
                </div>
                <div className="w-full flex justify-between flex-wrap gap-3 md:flex-row">
                    <DropdownInput
                        datas={universities}
                        label={"Pilih Universitas"}
                        name={"university_id"}
                        error={errors.university_id}
                        value={data.university_id}
                        onChange={handleChangeUniversity}
                    />
                    <DropdownInput
                        datas={universities[data.university_id - 1]?.majors ?? []}
                        label={"Pilih Jurusan"}
                        name={"major_id"}
                        error={errors.major_id}
                        value={data.major_id}
                        onChange={handleChangeMajor}
                    />
                </div>
                <button
                    className="bg-primary py-2 px-4 w-fit text-white font-bold rounded-lg self-end"
                    type="submit"
                >
                    Kirim Pertanyaan
                </button>
            </form>
        </section>
    );
}

export default QuestionEdit;
