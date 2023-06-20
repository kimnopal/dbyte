import { Link, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

// router.post('/login', { _token: this.$page.props.csrf_token, })
export default function Login({ csrf_token, session }) {
    const { data, setData, post, errors } = useForm({
        username: '',
        password: '',
    });

    const submit = (e) => {
        e.preventDefault()
        post('/login', {
            preserveState: false
        })
    }

    return (
        <div className="flex flex-col w-full min-h-screen items-center my-8 ">
            <img className="w-24 my-2" src="/images/dByteRounded.png" alt="" />
            <h1 className="text-center font-bold text-xl my-2">
                Tunggu Apalagi?
                <br />
                Ayo bergabung dengan kami
            </h1>
            {session.error && <p className="w-5/6 text-white font-normal text-sm text-center mb-2 bg-red-500 px-4 py-2 rounded-lg md:text-base lg:w-1/2">{session.error}</p>}
            {session.success && <p className="w-5/6 text-white font-normal text-sm text-center mb-2 bg-green-500 px-4 py-2 rounded-lg md:text-base lg:w-1/2">{session.success}</p>}
            <div className="border border-primary rounded-lg w-5/6 lg:w-1/2 p-4 lg:px-24 lg:py-16 my-2">
                <h1 className="text-center font-bold text-xl">Masuk</h1>
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
                            autoFocus={true}
                        />
                    </div>
                    {errors.username && <p className="text-red-500 font-normal text-sm mb-2">{errors.username}</p>}


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
                        />
                    </div>
                    {errors.password && <p className="text-red-500 font-normal text-sm mb-4">{errors.password}</p>}
                    <p className="text-sm mb-2">
                        Belum punya akun?{" "}
                        <Link href="/register" className="text-sky-500">Daftar disini</Link>
                    </p>
                    <button
                        className="bg-primary py-2 px-4 text-white rounded lg:w-24 lg:self-end"
                        type="submit"
                    >
                        Masuk
                    </button>
                </form>
            </div>
        </div>
    );
}
