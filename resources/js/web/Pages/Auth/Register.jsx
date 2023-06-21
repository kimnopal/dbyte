import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { useEffect, useRef } from "react";

export default function Register({ csrf_token, session, errors }) {
    const { data, setData, post } = useForm({
        username: '',
        email: '',
        password: '',
    });

    const submit = (e) => {
        e.preventDefault()
        post('/register', {
            preserveState: false,
        })
    }

    useEffect(() => {
        const inputs = Object.keys(session.old).filter(input => !errors.hasOwnProperty(input))
        const newState = {}
        inputs.forEach(input => newState[input] = session.old[input])
        setData((prevState) => ({
            ...prevState,
            ...newState
        }))
    }, [])

    return (
        <div className="flex flex-col w-full min-h-screen items-center my-8 ">
            <Head title="Register" />
            <img className="w-24 my-2" src="/images/dByteRounded.png" alt="" />
            <h1 className="text-center font-bold text-xl my-2">
                Tunggu Apalagi?
                <br />
                Ayo bergabung dengan kami
            </h1>
            <div className="border border-primary rounded-lg w-5/6 lg:w-1/2 p-4 lg:px-24 lg:py-16 my-2">
                <h1 className="text-center font-bold text-xl">Daftar</h1>
                <form className="flex flex-col p-8 justify-evenly" onSubmit={submit}>
                    <input type="hidden" name="_token" value={csrf_token} />
                    <div className={`w-full flex flex-row items-center px-2 border border-solid ${errors.username ? 'border-red-500' : 'border-primary'} rounded-lg my-2`}>
                        <img
                            className="h-8 relative"
                            src="/images/profile.png"
                            alt=""
                        />
                        <input
                            className="p-2 my-2 w-full !outline-none"
                            name="username"
                            type="text"
                            value={data.username}
                            onChange={(e) => setData('username', e.target.value)}
                            placeholder="Username"
                            autoFocus={errors.username ? true : Object.keys(session.old).length === 0 ? true : false}
                        />
                    </div>
                    {errors.username && <p className="text-red-500 font-normal text-sm mb-2">{errors.username}</p>}

                    <div className={`w-full flex flex-row items-center px-2 border border-solid ${errors.email ? 'border-red-500' : 'border-primary'} rounded-lg my-2`}>
                        <img
                            className="h-8 relative"
                            src="/images/profile.png"
                            alt=""
                        />
                        <input
                            className="p-2 my-2 w-full !outline-none"
                            name="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="Email"
                            autoFocus={errors.email && !errors.username ? true : false}
                        />
                    </div>
                    {errors.email && <p className="text-red-500 font-normal text-sm mb-2">{errors.email}</p>}

                    <div className={`w-full flex flex-row items-center px-2 border border-solid ${errors.password ? 'border-red-500' : 'border-primary'} rounded-lg my-2`}>
                        <img
                            className="h-8 relative"
                            src="/images/profile.png"
                            alt=""
                        />
                        <input
                            className="p-2 my-2 w-full !outline-none"
                            name="password"
                            type="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Password"
                            autoFocus={errors.password && !errors.username && !errors.password ? true : false}
                        />
                    </div>
                    {errors.password && <p className="text-red-500 font-normal text-sm mb-2">{errors.password}</p>}

                    <p className="text-sm mb-2">
                        Sudah punya akun?{" "}
                        <Link href="/login" className="text-sky-500">Masuk disini</Link>
                    </p>
                    <button
                        className="bg-primary py-2 px-4 text-white rounded lg:w-24 lg:self-end"
                        type="submit"
                    >
                        Daftar
                    </button>
                </form>
            </div>
        </div>
    );
}
