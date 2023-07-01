import naufalImg from "./../../../../public/images/naufal.jpg"

const About = () => {
    return (
        <section className="py-12">
            <div className="">
                <h2 className="text-xl text-center text-primary font-semibold mb-6 md:text-2xl md:mb-7">Tentang Kami</h2>
                <div className="flex flex-col justify-center items-center sm:gap-7 sm:flex-row">
                    <div className="flex items-center gap-4 mb-5">
                        <div className="aspect-square min-w-[70px] max-w-[120px] rounded-full overflow-hidden sm:min-w-[100px] sm:max-w-[150px]"><img src={naufalImg} alt="" className="w-full" /></div>
                        <div className="aspect-square min-w-[70px] max-w-[120px] rounded-full overflow-hidden sm:min-w-[100px] sm:max-w-[150px]"><img src={naufalImg} alt="" className="w-full" /></div>
                        <div className="aspect-square min-w-[70px] max-w-[120px] rounded-full overflow-hidden sm:min-w-[100px] sm:max-w-[150px]"><img src={naufalImg} alt="" className="w-full" /></div>
                        {/* <div className="min-w-[70px] max-w-[120px] sm:max-w-[150px]"><img src={profileImg} alt="" className="w-full" /></div>
                        <div className="min-w-[70px] max-w-[120px] sm:max-w-[150px]"><img src={profileImg} alt="" className="w-full" /></div> */}
                    </div>
                    <p className="text-base text-primary text-center font-normal sm:max-w-[50%] sm:text-justify">Website ini dibuat untuk tujuan mengatasi para mahasiswa yang mengalami kesulitan dalam materi pembelajaran atau malu untuk bertanya. Disini para mahasiswa dapat saling berdiskusi satu sama lain tanpa harus malu.</p>
                </div>
            </div>
        </section>
    );
}

export default About;
