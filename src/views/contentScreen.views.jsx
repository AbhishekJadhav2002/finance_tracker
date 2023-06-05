import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/Microsoft_logo.svg';
import { TransactionModal } from "../components";

export default function ContentScreenView({ children }) {
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate()

    return (
        <>
            {modalOpen && <TransactionModal setModalOpen={setModalOpen} />}
            <div className="md:fixed inset-0 top-0 z-10 grid md:grid-cols-12 grid-cols-1 min-h-screen">
                {/* Sidebar */}
                <aside className="col-span-2 h-fit md:h-full bg-white text-black drop-shadow-lg p-4">
                    <div className="flex items-center mb-4">
                        <img src={logo} alt="Company Logo" className="h-8 w-8 mr-2" />
                        <span className="font-medium text-2xl">Finance Tracker</span>
                    </div>
                    <hr className="my-4" />
                    <ul className="space-y-4 text-lg px-2">
                        <li>
                            <Link to="/">Dashboard <svg className='inline-block mr-1' xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path><polyline points='15 3 21 3 21 9'></polyline><line x1='10' y1='14' x2='21' y2='3'></line></svg>
                            </Link>
                        </li>
                        <li>
                            <Link to="/transactions">Transactions <svg className='inline-block mr-1' xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path><polyline points='15 3 21 3 21 9'></polyline><line x1='10' y1='14' x2='21' y2='3'></line></svg></Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile <svg className='inline-block mr-1' xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path><polyline points='15 3 21 3 21 9'></polyline><line x1='10' y1='14' x2='21' y2='3'></line></svg></Link>
                        </li>
                    </ul>
                </aside>

                <div className="fixed bottom-0 left-0 flex justify-center items-center h-48 w-48 z-30 drop-shadow-xl backdrop-blur-sm cursor-pointer" onClick={() => setModalOpen(true)}>
                    <svg className="absolute-center h-56 w-56" viewBox="0 0 500 500">
                        <defs>
                            <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
                                id="textcircle_top">
                                <animate attributeName="transform" begin="0s" dur="20s" type="rotate" from="0 250 250"
                                    to="360 250 250" attributeType="XML" repeatCount="indefinite" />
                            </path>
                        </defs>
                        <text className="font-[600] uppercase text-4xl fill-green-700" dy="70" textLength="1220">
                            <textPath xlinkHref="#textcircle_top">
                                | ADD TRANSACTION | ADD TRANSACTION
                            </textPath>
                        </text>
                    </svg>
                    <div>
                        <strong className="text-6xl text-green-400">+</strong>
                    </div>
                </div>

                <div className="col-span-10 grid grid-rows-[60px,auto]">
                    {/* Navbar */}
                    <nav className="flex items-center border-b border-gray-300 px-8">
                        <div className='flex items-center gap-4 cursor-pointer' onClick={() => navigate(-1)}>
                            <svg width='20' height='20' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' className='rotate-180'><path d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z' fill='currentColor' fillRule='evenodd' clipRule='evenodd'></path>
                            </svg>
                            <span className="hidden sm:block">Go Back</span>
                        </div>
                    </nav>

                    {/* Content */}
                    <div className="md:absolute inset-0 left-[240px] top-[60px] overflow-auto z-20">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}