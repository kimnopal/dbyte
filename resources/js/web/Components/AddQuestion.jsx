import MajorList from "./MajorList";
import Ask from "./Ask";
import { useState } from "react";
import SearchInput from "./SearchInput";


export default function AddQuestion({ universities, majors, handleChange }) {
    const [ask, setAsk] = useState(false);
    return (
        <section className="pt-20 pb-6 md:pb-12 flex flex-col gap-y-3">
            <form>
                <SearchInput handleChange={handleChange} />
            </form>
            <button
                className="bg-primary text-white rounded-lg py-2 px-4 w-full lg:w-fit text-center"
                onClick={() => setAsk(!ask)}
            >
                + Ajukan Pertanyaan
            </button>
            {ask && <Ask universities={universities} />}
        </section>
    );
}
