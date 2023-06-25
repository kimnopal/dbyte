import { Link, useForm, usePage } from "@inertiajs/react";

const BioEdit = ({ user, universities }) => {
    const { data, setData, put } = useForm({
        username: user.username,
        photo: user.photo,
        photo: user.photo,
        university_id: user.university_id,
        major_id: user.major_id,
        description: user.description
    })

    const submit = (e) => {
        e.preventDefault()
        put(`/profile/${user.username}`)
    }
    console.log(universities)
    console.log(data)

    return (
        <section className=" px-4 pt-20 pb-6 md:pb-12">
            <form onSubmit={submit} className="flex flex-col lg:flex-row gap-y-3">
                <div className="w-full lg:w-3/5 flex flex-col gap-y-2">
                    <div className="w-full flex flex-row gap-4">
                        <img
                            className="w-24 h-24"
                            src="/images/profile.png"
                            alt=""
                        />
                        <div className="flex flex-col gap-2 justify-center">
                            <input
                                type="text"
                                className="border border-secondary px-2 py-1 rounded-md"
                                placeholder="Username"
                                defaultValue={data.username}
                                onChange={(e) => setData('username', e.target.value)}
                            />
                            <input type="file" />
                        </div>
                    </div>
                    <div className="w-full lg:w-5/12 flex flex-row justify-between items-center">
                        <select
                            className="border border-primary px-4 py-2 rounded-lg text-center font-bold appearance-none"
                            name="university_id"
                            value={data.university_id || ''}
                            onChange={(e) => setData((prevData => ({ ...prevData, university_id: e.target.value || null, major_id: null })))}
                        >
                            <option value="">Belum Dipilih</option>
                            {universities.map(university => (
                                <option
                                    key={university.id}
                                    value={university.id}
                                >
                                    {university.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="w-full lg:w-5/12 flex flex-row justify-between items-center">
                        <select
                            className="border border-primary px-4 py-2 rounded-lg text-center font-bold appearance-none"
                            name="major_id"
                            onChange={(e) => setData('major_id', e.target.value || null)}
                            value={data.major_id || ''}
                        >
                            <option value="">Belum Dipilih</option>
                            {universities.map(university => {
                                if (university.id == data.university_id) {
                                    return university.majors.map(major => (
                                        <option
                                            key={major.id}
                                            value={major.id}
                                        >{major.name}
                                        </option>
                                    ))
                                }
                            })}
                        </select>
                    </div>
                </div>
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="w-full lg:w-2/5 border border-secondary p-4 rounded-lg"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                ></textarea>
                <button type="submit" className="bg-primary text-white px-3 py-1 rounded-lg">Simpan Perubahan</button>
            </form>
        </section>
    );
};

export default BioEdit;
