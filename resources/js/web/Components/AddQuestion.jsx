import MajorList from "./MajorList";
import Ask from "./Ask";
import { useState } from "react";
import SearchInput from "./SearchInput";
import DropdownInput from "./DropdownInput";
import { router, useForm, useRemember } from "@inertiajs/react";


export default function AddQuestion({ universities, onChangeSearch }) {
    const [ask, setAsk] = useState(false);
    // const { data, setData } = useForm({
    //     university_id: '',
    //     major_id: '',
    // })

    const handleChangeUniversity = (e) => {
        // setData(() => ({ university_id: e.target.value, major_id: '' }))
        const university = universities.filter(university => university.id == e.target.value)[0]
        router.get(route(route().current()), { university: university?.slug ?? '' })
    }

    const handleChangeMajor = (e) => {
        // setData('major_id', e.target.value)
        const university = universities.filter(university => university.id == getUniversityID())[0]
        const major = university?.majors.filter(major => major.id == e.target.value)[0]
        router.get(route(route().current()), {
            university: university?.slug ?? '',
            major: major?.slug ?? ''
        })
    }

    const getUniversityID = () => {
        return route().params.university ? universities
            .filter(university => university.slug == route().params.university)[0]?.id : ""
    }

    const getMajorID = () => {
        return route().params.major ? universities
            .filter(university => university.id == getUniversityID())[0]?.majors
            .filter(major => major.slug == route().params.major)[0]?.id : ""
    }

    return (
        <section className="pt-20 pb-6 md:pb-12 flex flex-col gap-y-3">
            <form>
                <SearchInput onChange={onChangeSearch} />
                <div className="w-full flex justify-between flex-wrap gap-3 mt-5 md:flex-row">
                    <DropdownInput
                        datas={universities}
                        label={"Pilih Universitas"}
                        name={"university_id"}
                        error={""}
                        value={getUniversityID()}
                        onChange={handleChangeUniversity}
                    />
                    <DropdownInput
                        datas={universities.filter(university => university.id == getUniversityID())[0]?.majors ?? []}
                        label={"Pilih Jurusan"}
                        name={"major_id"}
                        error={""}
                        value={getMajorID()}
                        onChange={handleChangeMajor}
                    />
                </div>
            </form>
            <button
                className="bg-primary text-white text-center rounded-lg py-2 px-4 w-full md:w-fit"
                onClick={() => setAsk(!ask)}
            >
                + Ajukan Pertanyaan
            </button>
            {ask && <Ask universities={universities} />}
        </section>
    );
}
