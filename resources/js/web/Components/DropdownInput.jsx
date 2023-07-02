const DropdownInput = ({ datas, label, name, error, value, onChange }) => {
    return (
        <div className="w-full md:w-auto">
            <div className="flex flex-col gap-2 flex-wrap justify-between mb-2 md:flex-row md:gap-4 md:items-center">
                <label className="font-bold whitespace-nowrap">
                    {label}
                </label>
                <select
                    className={`border ${error ? 'border-red-500' : 'border-primary'} px-4 py-2 rounded-lg text-center font-bold appearance-none`}
                    name={name}
                    value={value}
                    onChange={onChange}
                >
                    <option value="">Semua</option>
                    {datas.map(data => (
                        <option key={data.id} value={data.id}>{data.name}</option>
                    ))}
                </select>
            </div>
            <p className="font-normal text-sm text-red-500">{error}</p>
        </div>
    );
}

export default DropdownInput;
