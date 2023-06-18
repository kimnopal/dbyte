import { Link } from "@inertiajs/react";
import Major from "./Major";

export default function AddQuestion() {
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
            <Link
                href="#"
                className="bg-primary text-white rounded-lg py-2 px-4 w-56 text-center"
            >
                + Ajukan Pertanyaan
            </Link>
        </section>
    );
}
