const Achievements = ({ user }) => {
    return (
        <section className="flex flex-col justify-center items-center pb-36 pt-8 gap-y-8 mx-8 lg:mx-0">
            <h1 className="font-bold text-2xl">Pencapaian</h1>
            <div className="w-full grid-cols-1 lg:grid-cols-3 grid p-12 border border-primary rounded-lg justify-evenly gap-8">
                <div className="flex flex-col justify-center items-center">
                    <h3 className="font-bold text-xl">Total Pertanyaan</h3>
                    <span className="text-lg">{user.questions_count}</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h3 className="font-bold text-xl">Total Menjawab</h3>
                    <span className="text-lg">{user.answers.length}</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h3 className="font-bold text-xl">Total Like</h3>
                    <span className="text-lg">{user.answers.map(answer => answer.voters_count).reduce((accumulator, currentValue) => accumulator + currentValue, 0)}</span>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
