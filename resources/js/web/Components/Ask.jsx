const Ask = () => {
    return (
        <form className="w-full flex flex-col gap-3">
            <label
                className="text-secondary font-bold text-lg"
                for="pertanyaan"
            >
                Tulis Pertanyaanmu
            </label>
            <textarea className="border border-primary rounded-lg" rows={5} />
            <div className="w-full flex flex-row justify-between flex-wrap gap-2">
                <div className="w-full lg:w-5/12 flex flex-row justify-between items-center">
                    <label className="font-bold" for="jurusan">
                        Pilih Jurusan
                    </label>
                    <select
                        className="border border-primary px-4 py-2 rounded-lg text-center font-bold appearance-none"
                        name="jurusan"
                    >
                        <option value="Semua">Semua</option>
                        <option value="Teknik Elektro">Teknik Elektro</option>
                        <option value="Teknik Sipil">Teknik Sipil</option>
                        <option value="Teknik Geologi">Teknik Geologi</option>
                        <option value="Teknik Industri">Teknik Industri</option>
                        <option value="Teknik Informatika">
                            Teknik Informatika
                        </option>
                    </select>
                </div>
                <div className="w-full lg:w-5/12 flex flex-row justify-between items-center">
                    <label className="font-bold" for="universitas">
                        Pilih Universitas
                    </label>
                    <select
                        className="border border-primary px-4 py-2 rounded-lg text-center font-bold appearance-none"
                        name="universitas"
                    >
                        <option value="Semua">Semua</option>
                        <option value="UNSOED">UNSOED</option>
                        <option value="UMP">UMP</option>
                        <option value="ITT">ITT</option>
                        <option value="UIN">UIN</option>
                    </select>
                </div>
            </div>
            <button
                className="bg-primary py-2 px-4 w-fit text-white font-bold rounded-lg self-end"
                type="submit"
            >
                Jawab
            </button>
        </form>
    );
};

export default Ask;
