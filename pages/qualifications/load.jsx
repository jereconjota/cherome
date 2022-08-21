import { Layout } from '../../components/Layout'
import { inicial_2022 } from '../../inicial_2022.js'

const load = () => {
    return (
        <Layout>
            <div className=" relative">
                <label className="text-gray-700 pr-3 w-20">
                    Documento
                </label>
                <input type="text" id="name-with-label" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="12345678" />
            </div>

            {inicial_2022.map(({ anio, anuales, primer_cuatrimestre, segundo_cuatrimestre }, index) => (
                <div key={anio} className='mt-2 pl-4'>
                    <div className="px-4 py-5 border-b rounded-t sm:px-6">
                        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
                            <h3 className='m-3 font-bold text-xl'>{anio}º Año</h3>
                            <ul className="divide-y divide-gray-200">
                                {anuales.map(( item, i) => (
                                    <li key={item}>
                                        <a className="block hover:bg-gray-50 dark:hover:bg-gray-900">
                                            <div className="px-4 py-4 sm:px-6">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-md text-gray-700 dark:text-white md:truncate">
                                                        {item}
                                                    </p>
                                                </div>
                                                <div className="mt-2 sm:flex sm:justify-between">
                                                    <div className="sm:flex">
                                                        <p className="flex items-center text-md font-light text-gray-500 dark:text-gray-300">
                                                            ...
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                                {primer_cuatrimestre.map(( item, i) => (
                                    <li key={item}>
                                        <a className="block hover:bg-gray-50 dark:hover:bg-gray-900">
                                            <div className="px-4 py-4 sm:px-6">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-md text-gray-700 dark:text-white md:truncate">
                                                        {item}
                                                    </p>
                                                </div>
                                                <div className="mt-2 sm:flex sm:justify-between">
                                                    <div className="sm:flex">
                                                        <p className="flex items-center text-md font-light text-gray-500 dark:text-gray-300">
                                                            January 7, 2020
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                                {segundo_cuatrimestre.map(( item, i ) => (
                                    <li key={item}>
                                        <a className="block hover:bg-gray-50 dark:hover:bg-gray-900">
                                            <div className="px-4 py-4 sm:px-6">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-md text-gray-700 dark:text-white md:truncate">
                                                        {item}
                                                    </p>
                                                </div>
                                                <div className="mt-2 sm:flex sm:justify-between">
                                                    <div className="sm:flex">
                                                        <p className="flex items-center text-md font-light text-gray-500 dark:text-gray-300">
                                                            January 7, 2020
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}


        </Layout >
    )
}

export default load