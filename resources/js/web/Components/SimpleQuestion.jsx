import { Link, router, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";

const SimpleQuestion = ({ question, user }) => {
    const [isToggle, setIsToggle] = useState(false)
    const optionQuestion = useRef()

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isToggle && optionQuestion.current && !optionQuestion.current.contains(e.target)) {
                setIsToggle(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isToggle])

    const submit = (e) => {
        e.preventDefault()
        router.delete(`/forum/${question.slug}`)
    }

    return (
        <div className="flex border-2 border-secondary p-4 rounded-lg gap-3">
            <div className="w-full flex flex-col">
                <div className="flex flex-col mb-4 md:flex-row gap-4 md:gap-6">
                    <div className="w-full flex flex-col gap-3">
                        <Link href={`/forum/${question.slug}`} className="font-semibold text-xl w-fit">
                            {question.content.length > 20 ? question.content.slice(0, 70) + '...' : question.content}{" "}
                        </Link>
                        <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-3">
                            <Link href={`/forum?university=${question.university.slug}`} className="text-secondary text-sm w-fit md:text-base">
                                {question.university.name}
                            </Link>
                            <div className="hidden w-[5px] h-[5px] rounded-full bg-secondary md:block"></div>
                            <Link href={`/forum?major=${question.major.slug}`} className="text-secondary text-sm w-fit md:text-base">
                                {question.major.name}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <span className="text-secondary text-xs">
                        {question.created_at}
                    </span>
                </div>
            </div>
            {usePage().props.auth.user?.id === user.id && (
                <div ref={optionQuestion} className="h-fit leading-[0px] relative">
                    <button type="button" className="h-fit" onClick={() => setIsToggle(!isToggle)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-three-dots w-5 md:w-6" viewBox="0 0 16 16">
                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                        </svg>
                    </button>
                    <div className={`${isToggle ? 'visible opacity-100 !top-[120%]' : 'invisible'} opacity-0 flex flex-col gap-5 absolute top-[110%] right-0 transition-all px-3 py-3 rounded-md bg-white shadow-xl border border-secondary`}>
                        <Link href={`/forum/${question.slug}/edit`} className="flex items-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-pencil-fill w-4" viewBox="0 0 16 16">
                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                            </svg>
                            {/* <p className="">edit</p> */}
                        </Link>

                        <form onSubmit={submit} className="flex items-center cursor-pointer">
                            <button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-trash3-fill w-4" viewBox="0 0 16 16">
                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                </svg>
                            </button>
                            {/* <p>hapus</p> */}
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SimpleQuestion;
