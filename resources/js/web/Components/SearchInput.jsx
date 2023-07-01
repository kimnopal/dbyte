const SearchInput = ({ onChange }) => {
    return (
        <input
            className="w-full border-2 border-secondary placeholder:text-secondary placeholder:font-medium px-4 py-2 rounded-full"
            type="text"
            placeholder="Cari pertanyaan..."
            onChange={onChange}
        />
    );
}

export default SearchInput;
