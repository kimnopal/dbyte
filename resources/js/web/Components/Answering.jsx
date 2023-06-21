const Answering = () => {
    return (
        <div className="w-11/12 lg:w-full mb-12 mx-auto flex flex-col gap-4">
            <form>
                <textarea
                    className="w-full border border-primary px-4 py-2 rounded-lg"
                    placeholder="Tulis jawabanmu..."
                    rows={3}
                />
            </form>
            <button
                className="bg-primary py-2 px-4 text-white font-bold rounded-lg w-fit self-end"
                type="submit"
            >
                Jawab
            </button>
        </div>
    );
};

export default Answering;
