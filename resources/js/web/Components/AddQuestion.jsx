import { Link } from "@inertiajs/react";
import Major from "./Major";
import { useState } from "react";
import Ask from "./Ask";

export default function AddQuestion() {
    const [ask, setAsk] = useState(false);
    return (
        <section className="px-4 pt-16 pb-6 md:pb-12 flex flex-col gap-y-3">
            <form action="">
                <input
                    className="w-full border-2 border-secondary placeholder:text-secondary placeholder:font-medium px-4 py-2 rounded-full"
                    type="text"
                    placeholder="Tulis pertanyaanmu..."
                />
            </form>
            <Major />
            <Link className="text-center w-full">Lebih banyak jurusan...</Link>
            <button
                className="bg-primary text-white rounded-lg py-2 px-4 w-full lg:w-fit text-center"
                onClick={() => setAsk(!ask)}
            >
                + Ajukan Pertanyaan
            </button>
            {ask ? <Ask /> : null}
        </section>
    );
}
