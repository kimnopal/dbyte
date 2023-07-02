import { useForm } from "@inertiajs/react";
import DropdownInput from "./DropdownInput";
import { useRef } from "react";

const BioEdit = ({ user, universities }) => {
    const { data, setData, post, errors } = useForm({
        username: user.username,
        university_id: user.university_id,
        major_id: user.major_id,
        description: user.description || '',
        _method: 'put',
    })

    const photoPreview = useRef()
    const handlePhotoChange = (e) => {
        setData(prevData => ({ ...prevData, photo: e.target.files[0] }))
        photoPreview.current.src = URL.createObjectURL(e.target.files[0])
        photoPreview.current.onload = function () {
            URL.revokeObjectURL(photoPreview.current.src)
        }
    }

    const handleDeletePhoto = () => {
        setData(prevData => ({ ...prevData, photo: '' }))
        photoPreview.current.src = '/images/profile.png'
    }

    const handleChangeUniversity = (e) => setData(prevData => ({ ...prevData, university_id: e.target.value || null, major_id: null }))
    const handleChangeMajor = (e) => setData('major_id', e.target.value || null)

    const submit = (e) => {
        e.preventDefault()
        post(`/profile/${user.username}`)
    }

    return (
        <section className="pt-20 pb-6 md:pb-12">
            <form onSubmit={submit} className="flex flex-col">
                <div className="flex flex-col gap-5 mb-4 md:flex-row">
                    <div className="w-full flex flex-col gap-2 md:w-3/5">
                        <input name="_method" type="hidden" value="PUT" />
                        <div className="flex flex-col gap-2 mb-4">
                            <div className="w-full flex gap-4">
                                <img
                                    className="w-24 h-24 rounded-full"
                                    src={`${user.photo ? `/images/${user.photo}` : '/images/profile.png'}`}
                                    alt=""
                                    ref={photoPreview}
                                />
                                <div className="flex flex-col gap-2 justify-center">
                                    <input
                                        type="text"
                                        className="w-full border border-secondary px-4 py-2 rounded-lg"
                                        placeholder="Username"
                                        value={data.username}
                                        onChange={(e) => setData('username', e.target.value)}
                                    />
                                    <input type="file" className="w-full file:cursor-pointer file:bg-secondary/30 file:text-primary file:py-2 file:px-4 file:rounded-lg file:border-0" onChange={handlePhotoChange} />
                                </div>
                            </div>
                            <button type="button" onClick={handleDeletePhoto} className="w-full px-4 py-2 rounded-lg bg-primary text-white text-center">Hapus Gambar</button>
                        </div>
                        <div className="w-full flex flex-col justify-between gap-2">
                            {/* <div className="w-full lg:w-5/12 flex flex-col justify-between items-center"> */}
                            <DropdownInput
                                datas={universities}
                                label={"Pilih Universitas"}
                                name={"university_id"}
                                error={""}
                                value={data.university_id}
                                onChange={handleChangeUniversity}
                            />
                            <DropdownInput
                                datas={universities.filter(university => university.id == data.university_id)[0]?.majors ?? []}
                                label={"Pilih Jurusan"}
                                name={"major_id"}
                                error={""}
                                value={data.major_id}
                                onChange={handleChangeMajor}
                            />
                        </div>
                        {/* <select
                            className="w-full border border-primary px-4 py-2 rounded-lg text-center font-bold appearance-none"
                            name="university_id"
                            value={data.university_id || ''}
                            onChange={(e) => setData(prevData => ({ ...prevData, university_id: e.target.value || null, major_id: null }))}
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
                        </select> */}
                        {/* </div> */}
                        {/* <div className="w-full lg:w-5/12 flex flex-row justify-between items-center">
                        <select
                            className="w-full border border-primary px-4 py-2 rounded-lg text-center font-bold appearance-none"
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
                    </div> */}
                    </div>
                    <div className="flex flex-col gap-2 md:w-2/5">
                        <label className="font-bold whitespace-nowrap">
                            Deskripsi
                        </label>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            className="w-full border border-secondary p-4 rounded-lg"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                        ></textarea>
                    </div>
                </div>
                <button type="submit" className="bg-primary text-white px-4 py-2 rounded-lg self-end">Simpan Perubahan</button>
            </form>
        </section>
    );
};

export default BioEdit;
