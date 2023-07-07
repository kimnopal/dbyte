import { router, useForm } from "@inertiajs/react";
import heroImg from "./../../../../public/images/hero.svg"
import SearchInput from "./SearchInput";

const Hero = () => {
    const { data, setData } = useForm({
        search: ''
    })

    const handleChangeSearch = (e) => {
        setData('search', e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        router.get(route('forum.index'), data, { preserveState: true })
    }

    return (
        <section className="pt-16 pb-6 md:pb-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
                <div className="order-3 sm:order-1">
                    <h1 className="text-2xl text-primary font-semibold mb-1 md:text-3xl md:mb-2">Kamu merasa bingung?</h1>
                    <h3 className="text-lg text-primary font-medium mb-4 md:text-2xl md:mb-5">Cari pertanyaanmu disini</h3>
                    <form onSubmit={handleSubmit}>
                        <SearchInput onChange={handleChangeSearch} />
                    </form>
                </div>
                <div className="order-2 self-center">
                    <div className="min-w-[240px] max-w-[320px] md:w-[370px]">
                        <img src={heroImg} alt="" className="w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
