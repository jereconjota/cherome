import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { Alert } from "./Alert";

export default function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const { login, loginWithGoogle, resetPassword, userData } = useAuth();
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            // if exist 'admin' in the url, login as admin
            if (router.pathname.includes("admin")) {
                const admin = await login(user.email, user.password, true);
                router.push("/admin/[id]", `/admin/${admin.uid}`);
            } else {
                const loggedUser = await login(user.email, user.password);
                router.push('/students/[id]', `/students/${loggedUser.user.uid}`);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const handleChange = ({ target: { value, name } }) => setUser({ ...user, [name]: value });

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!user.email) return setError("Write an email to reset password");
        try {
            await resetPassword(user.email);
            setError('We sent you an email. Check your inbox')
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="w-full max-w-md">
            {error && <Alert message={error} />}

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="estudiante@email.com"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="*************"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Iniciar Sesion
                    </button>
                    <a
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        href="#!"
                        onClick={handleResetPassword}
                    >
                        Olvidaste tu contrase??a?
                    </a>
                </div>
            </form>
        </div>
    );
}
