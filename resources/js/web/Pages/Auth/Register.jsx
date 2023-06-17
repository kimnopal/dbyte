import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="flex flex-col w-full min-h-screen items-center my-8 ">
            <img className="w-24 my-2" src="/images/dByteRounded.png" alt="" />
            <h1 className="text-center font-bold text-xl my-2">
                Tunggu Apalagi?
                <br />
                Ayo bergabung dengan kami
            </h1>
            <div className="border border-primary rounded-lg w-5/6 lg:w-1/2 p-4 lg:px-24 lg:py-16 my-2">
                <h1 className="text-center font-bold text-xl">Daftar</h1>
                <form className="flex flex-col p-8 justify-evenly ">
                    <div className="w-full ">
                        <input
                            className="p-2 rounded-lg my-2 w-full border border-solid border-slate-700"
                            name="user_name"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                        />
                        <div class="input-icon">
                            <i class="fa fa-user"></i>
                        </div>
                    </div>

                    <div className="w-full ">
                        <input
                            className="p-2 rounded-lg my-2 w-full border border-solid border-slate-700"
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                        <div class="input-icon">
                            <i class="fa fa-user"></i>
                        </div>
                    </div>

                    <div className="w-full ">
                        <input
                            className="p-2 rounded-lg my-2 w-full border border-solid border-slate-700"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                        <div class="input-icon">
                            <i class="fa fa-user"></i>
                        </div>
                    </div>

                    <p className="text-sm">
                        Sudah punya akun?{" "}
                        <Link className="text-sky-500">Masuk disini</Link>
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
