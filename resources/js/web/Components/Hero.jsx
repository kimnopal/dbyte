import heroImg from "./../../../../public/images/hero.png"

const Hero = () => {
    return (
        <section className="px-4 pt-20">
            <div className="flex flex-col gap-4">
                <div className="order-2">
                    <h1 className="text-2xl text-primary font-semibold mb-1">Kamu merasa bingung?</h1>
                    <h3 className="text-lg text-primary font-medium mb-4">Ajukan pertanyaanmu disini</h3>
                    <form action="">
                        <input type="text" placeholder="Tulis Pertanyaanmu..." className="w-full border border-[#BABABA] px-4 py-2 rounded-full" />
                    </form>
                </div>
                <div className="order-1 self-center">
                    <div className="w-[240px]">
                        <img src={heroImg} alt="" className="w-100" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;