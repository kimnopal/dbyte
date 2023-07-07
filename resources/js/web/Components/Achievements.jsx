const Achievements = ({ user }) => {
    return (
        <section className="flex flex-col justify-center items-center py-12">
            <h1 className="text-2xl text-primary font-semibold mb-6 md:mb-7">Pencapaian</h1>
            <div className="w-full grid grid-cols-1 p-12 border border-primary rounded-lg gap-8 md:grid-cols-3">
                <div className="flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-xl text-center mb-1">Total Pertanyaan</h3>
                    <span className="text-lg">{user.questions.length}</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-xl text-center mb-1">Total Menjawab</h3>
                    <span className="text-lg">{user.answers.length}</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-xl text-center mb-1">Total Like</h3>
                    <span className="text-lg">{user.answers.map(answer => answer.voters_count).reduce((accumulator, currentValue) => accumulator + currentValue, 0)}</span>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
