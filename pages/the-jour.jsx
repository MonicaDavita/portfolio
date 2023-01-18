import React from 'react'
import Image from 'next/image'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { IoIosArrowBack } from 'react-icons/io'
import Link from 'next/link'

const theJour = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative bg'>
                <div className='z-10 relative top-0 left-0 w-full h-[50vh] bg bg-[#39375B]/70 bg-blend-overlay'>
                    <Image
                        className='opacity-10'
                        fill
                        style={{ objectFit: 'cover' }}
                        src='/../public/assets/the-jour.jpeg'
                        alt='/'
                    />
                    <div className='relative top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                        <h2 className='uppercase text-[24px] md:text-[48px] font-bold leading-[100%]'>The Jour.</h2>
                        <h3 className='uppercase text-[16px] md:text-[20px] font-semibold leading-[100%] mt-4'>ReactJS | Tailwind | GRAPHQL</h3>
                    </div>
                </div>

                <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                    <div className='col-span-4 lg:mr-12'>
                        <p className='uppercase text-[12px] md:text-[16px] font-semibold leading-[100%] mt-4 text-[#C682BE]'>
                            Project
                        </p>
                        <h2 className='py-4 uppercase text-[24px] md:text-[48px] font-bold leading-[100%] text-[#39375B]'>
                            Description
                        </h2>
                        <p className='text-justify'>
                            The Jour is a personal journal in a form of web-blog platform. Mostly build with ReactJS (using NextJS as the framework) and Tailwind for the fontend.
                            Also GraphQL and GraphCMS for the beckend. This blog contains of the writer's journey in every aspect, which are spiritual, social, academic, self-development, and many more.
                            In addition, this web will post about software-stuff especially in the field of Frontend Engineer and UI/UX. This project is the pioneer of my journey as a frontend developer and the UI/UX,
                            hopefully I can improve this platform so maybe others can also share their journey by being able to create an account and post it to the web.
                        </p>
                        
                        <a
                            href='https://github.com/MonicaDavita/the-jour'
                            target='_blank'
                            rel='noreferrer'>
                            <button className='px-8 py-2 mt-4 mr-8 text-[#39375B] bg-gradient-to-r from-[#C682BE] to-[#F7D8E4] font-bold rounded-3xl hover:-translate-y-1 hover:scale-105 duration-200'>Github</button>
                        </a>
                        <a
                            href='https://the-jour.vercel.app/'
                            target='_blank'
                            rel='noreferrer'>
                            <button className='px-8 py-2 mt-4 mr-8 text-white bg-gradient-to-r from-[#39375B] to-[#C682BE] font-bold rounded-3xl hover:-translate-y-1 hover:scale-105 duration-200'>Find Out</button>
                        </a>
                    </div>
                    <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 bg-gradient-to-b from-[#C682BE] to-[#F7D8E4] hover:scale-105 ease-in duration-300'>
                        <div className='p-2 ml-4'>
                            <p className='uppercase text-[16px] md:text-[20px] font-bold leading-[100%] text-[#39375B]'>SofTools</p>
                            <div className='grid grid-cols-3 md:grid-cols-1'>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <AiOutlineCheckCircle className='pr-1' />
                                    ReactJS
                                </p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <AiOutlineCheckCircle className='pr-1' />
                                    Tailwind
                                </p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <AiOutlineCheckCircle className='pr-1' />
                                    GraphQL
                                </p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <AiOutlineCheckCircle className='pr-1' />
                                    GraphCMS
                                </p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <AiOutlineCheckCircle className='pr-1' />
                                    Canva
                                </p>

                            </div>
                        </div>
                    </div>
                    <Link href='/#projects' className='animate-bounce flex items-start'>
                        <div className='flex justify-center items-center grid-cols-2 text-[#39375B]'>
                            <IoIosArrowBack />
                            <h3 className='mt-0'>Back</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default theJour