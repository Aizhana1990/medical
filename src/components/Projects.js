import React, {useState, useEffect}from 'react';
import Layout from "./Layout";
import ProjectCard from "./ProjectCard";
import data from "../project-data"
import {useForm} from "react-hook-form"

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [showModal, setShowModal] = useState()
    const { register, handleSubmit, formState:{ errors },reset } = useForm()

    const onSave = (data)=>{
        data.id = projects[projects.length-1].id + 1
        setProjects([...projects,data])
        setShowModal(false)
        reset()
    }
    useEffect(() => {
        setProjects(data)
    },[])

    return (
        <Layout>
            <h3 className="uppercase text-purple-900 text-3xl">Проекты</h3>
            <div className="flex justify-between mt-3">
                <h5 className="uppercase text-lg">Список проектов</h5>
                <div>
                    <button className="bg-purple-900 hover:bg-purple-600 text-white px-2 py-2" onClick={()=> setShowModal(true)}>Добавить проект
                    </button>
                    <div
                        className=" text-sm text-gray-500 leading-none rounded-full text-right">
                        <button
                            className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full py-2 active">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="fill-current w-4 h-4 mr-2">
                                <rect x="3" y="3" width="7" height="7"></rect>
                                <rect x="14" y="3" width="7" height="7"></rect>
                                <rect x="14" y="14" width="7" height="7"></rect>
                                <rect x="3" y="14" width="7" height="7"></rect>
                            </svg>
                        </button>
                        <button
                            className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-r-full py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="fill-current w-4 h-4 mr-2">
                                <line x1="8" y1="6" x2="21" y2="6"></line>
                                <line x1="8" y1="12" x2="21" y2="12"></line>
                                <line x1="8" y1="18" x2="21" y2="18"></line>
                                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                <line x1="3" y1="18" x2="3.01" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3">

                {
                    projects.map(project => <ProjectCard project={project} key={project.id}/>)
                }
            </div>
            {
                showModal &&
                <div className="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800 bg-opacity-50">
                    <div className="bg-white rounded-lg w-1/2">
                        <div className="flex flex-col items-start p-4">
                            <div className="flex items-center w-full">
                                <div className="text-gray-900 font-medium text-lg">Проект</div>
                                <svg className="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer" onClick={()=> setShowModal(false)}
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" >
                                    <path
                                        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                                </svg>
                            </div>
                            <hr/>

                            <form className="bg-white rounded w-full" onSubmit={handleSubmit(onSave)}>
                                <div className="mt-2">
                                    <label className=" block text-sm text-gray-600"
                                           htmlFor="name">Имя проекта</label>
                                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                           id="name"  type="text" {...register("title", { required: true })}/>
                                    {errors.title && <span className='text-red-600'>Введите имя проекта</span>}
                                </div>

                                <div className="mt-2">
                                    <label className=" block text-sm text-gray-600"
                                           htmlFor="manager-name">Имя менеджера</label>
                                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                           id="manager-name"  type="text"
                                           {...register("manager", { required: true })}/>
                                    {errors.manager && <span className='text-red-600'>Введите имя менеджера</span>}
                                </div>

                                <div className="mt-2">
                                    <label className="block text-sm text-gray-600"
                                           htmlFor="administrator-name">Имя администратора</label>
                                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                           id="administrator-name"  type="text"
                                           {...register("administrator", { required: true })}/>
                                    {errors.administrator && <span className='text-red-600'>Введите имя администратора</span>}
                                </div>

                                <div className="inline-block mt-2 w-1/2 pr-1">
                                    <label className=" text-sm text-gray-600"
                                           htmlFor="date-start">Дата начала</label>
                                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                           id="date-start"  type="date"
                                           {...register("dateStart", { required: true })}/>
                                    {errors.dateStart && <span className='text-red-600'>Введите дату начало</span>}
                                </div>

                                <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                                    <label className="text-sm text-gray-600"
                                           htmlFor="date-end">Дата окончания</label>
                                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                           id="date-end" type="date"
                                           {...register("dateEnd", { required: true })}
                                    />
                                    {errors.dateEnd && <span className='text-red-600'>Введите дату окочания*</span>}
                                </div>
                                <button
                                    className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Добавить проект
                                </button>
                            </form>
                            <hr/>
                        </div>
                    </div>
                </div>
            }
        </Layout>

    );
};

export default Projects;


