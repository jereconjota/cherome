import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Layout } from '../components/Layout'
import { useAuth } from "../context/AuthContext";
import { users } from '../utils/students';
import { saveStudent, updateStudent } from '../utils/firebase';

export default function Home() {
    const { logout, user } = useAuth();
    const router = useRouter();

    useEffect(() => {

        // users.forEach((student) => {
        //     if ( student.email === user.email ) {
        //         updateStudent(user.uid, student);
        //     }
        // })

    }, []);


    const handleLogout = async () => {
        try {
            await logout();
            router.push("/");
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <Layout>
            <div className="w-full max-w-xs m-auto text-black">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    {user && <p className="text-xl mb-4">welcome {user.displayName || user.email}</p>}
                    <button
                        className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
                        onClick={handleLogout}
                    >
                        logout
                    </button>
                </div>
            </div>
        </Layout>
    );
}