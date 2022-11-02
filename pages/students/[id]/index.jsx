import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Layout } from '../../../components/Layout';
import { useAuth } from '../../../context/AuthContext';
import { getStudent } from '../../../utils/firebase';


export default function Profile() {
    const { logout, user, userData, getUserData } = useAuth();

    const [userCourses, setUserCourses] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        (async () => {
            if (router.isReady) {
                const userData = await getStudent(router.query.id);
                const courses = [];
                console.log(userData.data());

                userData.data().courses.map((course) => {

                    for (const [key, carrera] of Object.entries(course)) {
                        carrera.map((materia, i) => {
                            if (materia.años) {
                                return;
                            }
                            courses.push(materia);
                        })
                    }
                })
                // sort courses by property "año"
                // courses.sort((a, b) => a.año - b.año);

                //group courses by year
                const groupedCourses = courses.reduce((r, a) => {
                    r[a.año] = [...r[a.año] || [], a];
                    return r;
                }, {});

                console.log(groupedCourses);
                setUserCourses(groupedCourses);

                // setUserCourses(courses);
                setIsLoading(false);
            }
        })()
    }, [router.isReady]);

    const handleLogout = async () => {
        try {
            await logout();
            router.push("/");
        } catch (error) {
            console.error(error.message);
        }
    };

    if (isLoading) {
        return (
            <Layout>
                <p>Loading...</p>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="w-full m-auto text-black border-l-rose-900 ">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    {user && <p className="text-xl mb-4">welcome {user.displayName || user.email}</p>}

                    <button
                        className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
                        onClick={handleLogout}
                    >
                        logout
                    </button>
                </div>

                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-xl mb-4">Mis materias</h1>
                    <div className="flex flex-col">
                        {userCourses && Object.entries(userCourses).map(([key, value]) => {
                            return (
                                <div key={key} className="flex flex-col mb-4">
                                    <h2 className="text-lg mb-2 font-bold">{key}º Año</h2>
                                    <div className="flex flex-col">
                                        {value.map((materia, i) => {
                                            return (
                                                //a card for each course
                                                <div key={i} className="flex flex-row mb-2 gap-10 border-4 border-pink-200 p-3">
                                                    <div className="flex flex-col w-1/2">
                                                        <p className="text-lg">{materia.name}</p>
                                                        <p className="text-sm">{materia.año}</p>
                                                    </div>
                                                    <div className="flex flex-col w-1/2">
                                                        <p className="text-lg">una info</p>
                                                        <p className="text-sm">otra info</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </Layout>
    );
}



