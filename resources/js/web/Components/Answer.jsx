const Answer = () => {
    return (
        <div className="flex flex-col w-11/12 lg:w-full my-6 gap-y-3 pl-8 mx-auto">
            <div className="flex items-center gap-2 flex-wrap">
                <img className="w-8 h-8" src="/images/profile.png" alt="" />
                <h1 className="font-bold text-xl">Ferry Cuy</h1>
                <span className="font-light text-secondary text-sm">
                    Teknik Elektro - Universitas Jenderal Soedirman
                </span>
            </div>
            <div className="w-full border border-primary rounded-lg p-4 h-24 self-end">
                GPT ae cuy
            </div>
        </div>
    );
};

export default Answer;
