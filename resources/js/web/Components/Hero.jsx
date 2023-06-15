import heroImg from "./images/hero.png"

const Hero = () => {
    return (
        <section className="px-4">
            <div className="flex">
                <div>
                    <h1>Kamu merasa bingung?</h1>
                    <h3>Ajukan pertanyaanmu disini</h3>
                    <form action="">
                        <input type="text" />
                    </form>
                </div>
                <div>
                    <img src={heroImg} alt="" />
                </div>
            </div>
        </section>
    );
}

export default Hero;