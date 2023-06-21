const Asked = () => {
    return (
        <div className="flex flex-col mt-20 mb-6 md:mb-12 gap-y-3 border border-primary rounded-lg px-8 py-4 h-fit justify-between w-11/12 lg:w-full mx-auto">
            <div className="flex flex-col-reverse lg:flex-row w-full justify-between">
                <h1 className="font-bold text-xl">
                    Cuy Infokan Cover Praktikum Instru, Kuis Meslis juga yang di
                    OCW
                </h1>
                <span className="text-secondary text-sm">1 Juni 2023</span>
            </div>
            <span className="text-secondary text-sm">
                Teknik Elektro - Universitas Jenderal Soedirman
            </span>
            <div className="flex items-center gap-2 mt-8 flex-wrap">
                <img className="w-8 h-8" src="/images/profile.png" alt="" />
                <h1 className="font-bold text-xl">Bagus Andhika</h1>
                <span className="font-light text-secondary text-sm">
                    Teknik Elektro - Universitas Jenderal Soedirman
                </span>
            </div>
        </div>
    );
};

export default Asked;
