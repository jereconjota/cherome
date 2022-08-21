import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/Layout'
import { inicial_2022 } from '../../inicial_2022.js'

function show() {

    return (
        <Layout>
            <h1 className='text-3xl py-8 text-center'>Marcelo Martinelli</h1>
            <h2 className='text-center overline decoration-pink-500 text-3xl'>Profesorado de Educacion Inicial</h2>
            {inicial_2022.map(({ anio, anuales, primer_cuatrimestre, segundo_cuatrimestre }, index) => {

                return (
                    <div key={anio}>
                        <div className="container mx-auto px-4 sm:px-8 ">
                            <div className="py-8">
                                <h3 className='mb-2 font-bold text-xl'>{anio}º Año</h3>
                                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py- overflow-x-auto">
                                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                        <table className="min-w-full leading-normal border-2">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="px-3 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                        Asignatura
                                                    </th>
                                                    <th scope="col" className="px-3 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                        Parciales
                                                    </th>
                                                    <th scope="col" className="px-3 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                        Recuperatorios
                                                    </th>
                                                    <th scope="col" className="px-3 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                        Final - Primer turno
                                                    </th>
                                                    <th scope="col" className="px-3 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                        Final - Segundo turno
                                                    </th>
                                                    <th scope="col" className="px-3 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                        Final - Tercer turno
                                                    </th>
                                                    <th scope="col" className="px-3 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                        Estado
                                                    </th>
                                                    <th scope="col" className="px-3 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                        Observaciones
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                    {anuales.map((item, index) => {
                                                    return (
                                                        <tr key={item}>
                                                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                    {item}
                                                                </p>
                                                            </td>
                                                            <td className="px-1 py-3 border-b border-gray-200 bg-white text-sm">
                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                    17/4 - nota : 6 <br />
                                                                    17/8 - nota : 6 <br />
                                                                </p>
                                                            </td>
                                                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                    12/09/2020 <br />
                                                                    asdasdasdasd <br />
                                                                    asdasdasdasdas <br />
                                                                </p>
                                                            </td>
                                                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm text-center">
                                                                <p>3</p>
                                                            </td>
                                                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm text-center">
                                                                <p>4</p>
                                                            </td>
                                                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm text-center">
                                                                <p>8</p>
                                                            </td>
                                                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                                                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                    <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                                                    </span>
                                                                    <span className="relative">
                                                                        Aprobado
                                                                    </span>
                                                                </span>
                                                            </td>
                                                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                                                                <p>esto es una observacion</p>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                                {primer_cuatrimestre.map((item, index) => {
                                                    return (
                                                        <tr key={item}>
                                                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                    {item}
                                                                </p>
                                                            </td>
                                                            <td className="px-1 py-3 border-b border-gray-200 bg-white text-sm">
                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                    17/4 - nota : 6 <br />
                                                                    17/8 - nota : 6 <br />
                                                                </p>
                                                            </td>
                                                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                    12/09/2020 <br />
                                                                    asdasdasdasd <br />
                                                                    asdasdasdasdas <br />
                                                                </p>
                                                            </td>
                                                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm text-center">
                                                                <p>3</p>
                                                            </td>
                                                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm text-center">
                                                                <p>4</p>
                                                            </td>
                                                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm text-center">
                                                                <p>8</p>
                                                            </td>
                                                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                                                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                    <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                                                    </span>
                                                                    <span className="relative">
                                                                        Aprobado
                                                                    </span>
                                                                </span>
                                                            </td>
                                                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                                                                <p>esto es una observacion</p>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                                {segundo_cuatrimestre.map((item, index) => {
                                                    return (
                                                        <tr key={item}>
                                                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                    {item}
                                                                </p>
                                                            </td>
                                                            <td className="px-1 py-3 border-b border-gray-200 bg-white text-sm">
                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                    17/4 - nota : 6 <br />
                                                                    17/8 - nota : 6 <br />
                                                                </p>
                                                            </td>
                                                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                    12/09/2020 <br />
                                                                    asdasdasdasd <br />
                                                                    asdasdasdasdas <br />
                                                                </p>
                                                            </td>
                                                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm text-center">
                                                                <p>3</p>
                                                            </td>
                                                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm text-center">
                                                                <p>4</p>
                                                            </td>
                                                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm text-center">
                                                                <p>8</p>
                                                            </td>
                                                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                                                                <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                                                    <span aria-hidden="true" className="absolute inset-0 bg-red-200 opacity-50 rounded-full">
                                                                    </span>
                                                                    <span className="relative">
                                                                        Desaprobado
                                                                    </span>
                                                                </span>
                                                            </td>
                                                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                                                                <p>esto es una observacion</p>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            )}
        </Layout>
    )
}


export default show