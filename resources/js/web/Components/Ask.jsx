import { useForm } from "@inertiajs/react";

const Ask = ({ universities }) => {
    const { data, setData, post, errors } = useForm({
        university_id: '',
        major_id: '',
        content: '',
    })

    const submit = (e) => {
        e.preventDefault()
        post('/forum')
    }

    return (
        <form onSubmit={submit} className="w-full flex flex-col gap-3">
            <label
                className="text-secondary font-bold text-lg"
                htmlFor="pertanyaan"
            >
                Tulis Pertanyaanmu
            </label>
            <textarea value={data.content} onChange={(e) => setData('content', e.target.value)} className={`border ${errors.content ? 'border-red-500' : 'border-primary'} rounded-lg`} rows={5} />
            <p className="font-normal text-sm text-red-500">{errors.content}</p>
            <div className="w-full flex flex-row justify-between flex-wrap gap-2">
                <div>
                    <div className="w-full lg:w-5/12 flex flex-row justify-between items-center mb-2">
                        <label className="font-bold" htmlFor="jurusan">
                            Pilih Jurusan
                        </label>
                        <select
                            className={`border ${errors.major_id ? 'border-red-500' : 'border-primary'} px-4 py-2 rounded-lg text-center font-bold appearance-none`}
                            name="university_id"
                            value={data.university_id}
                            onChange={(e) => setData(prevData => ({ ...prevData, university_id: e.target.value, major_id: '' }))}
                        >
                            <option value="">Pilih Universitas</option>
                            {universities.map(university => (
                                <option key={university.id} value={university.id}>{university.name}</option>
                            ))}
                        </select>
                    </div>
                    <p className="font-normal text-sm text-red-500">{errors.major_id}</p>
                </div>
                <div>
                    <div className="w-full lg:w-5/12 flex flex-row justify-between items-center">
                        <label className="font-bold" htmlFor="universitas">
                            Pilih Universitas
                        </label>
                        <select
                            className={`border ${errors.university_id ? 'border-red-500' : 'border-primary'} px-4 py-2 rounded-lg text-center font-bold appearance-none`}
                            name="major_id"
                            value={data.major_id}
                            onChange={(e) => setData('major_id', e.target.value)}
                        >
                            <option value="">Pilih Jurusan</option>
                            {universities.map(university => {
                                if (university.id == data.university_id) {
                                    return university.majors.map(major => (
                                        <option key={major.id} value={major.id}>{major.name}</option>
                                    ));
                                }
                            })}
                        </select>
                    </div>
                    <p className="font-normal text-sm text-red-500">{errors.major_id}</p>
                </div>
            </div>
            <button
                className="bg-primary py-2 px-4 w-fit text-white font-bold rounded-lg self-end"
                type="submit"
            >
                Ajukan Pertanyaan
            </button>
        </form>
    );
};

export default Ask;
