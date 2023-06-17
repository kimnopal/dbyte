import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="flex flex-col w-full min-h-screen items-center my-8 ">
            <img className="w-24 my-2" src="/images/dByteRounded.png" alt="" />
            <h1 className="text-center font-bold text-xl my-2">
                Tunggu Apalagi?
                <br />
                Ayo bergabung dengan kami
            </h1>
            <div className="border border-primary rounded-lg w-5/6 lg:w-1/2 p-4 lg:px-24 lg:py-16 my-2">
                <h1 className="text-center font-bold text-xl">Masuk</h1>
                <form className="flex flex-col p-8 justify-evenly ">
                    <div className="w-full flex flex-row items-center px-2 border border-solid border-slate-700 rounded-lg my-2">
                        <img
                            className="h-8 relative"
                            src="/images/profile.png"
                            alt=""
                        />
                        <input
                            className="p-2 my-2 w-full !outline-none"
                            name="user_name"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                        />
                    </div>

                    <div className="w-full flex flex-row items-center px-2 border border-solid border-slate-700 rounded-lg my-2">
                        <img
                            className="h-8 relative"
                            src="/images/profile.png"
                            alt=""
                        />
                        <input
                            className="p-2 my-2 w-full !outline-none"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                    <p className="text-sm">
                        Belum punya akun?{" "}
                        <Link className="text-sky-500">Daftar disini</Link>
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
