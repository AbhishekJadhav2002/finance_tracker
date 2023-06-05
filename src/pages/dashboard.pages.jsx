import { Link } from "react-router-dom";
import logo from '../assets/Microsoft_logo.svg';
import income_icon from '../assets/income-icon.svg';
import expense_icon from '../assets/expense-icon.svg';
import invest_icon from '../assets/invest-icon.svg';
import recurring_icon from '../assets/recurring-icon.svg';
import { ExpenseBarGraph } from "../components";

export default function Dashboard() {
    return (
        <div className="grid grid-cols-12 min-h-screen">
            {/* Sidebar */}
            <aside className="col-span-2 h-full bg-white text-black drop-shadow-lg p-4">
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

            <div className="fixed bottom-0 left-0 flex justify-center items-center h-48 w-48">
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
                    <Link to='' className='flex items-center gap-4'>
                        <svg width='20' height='20' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' className='rotate-180'><path d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z' fill='currentColor' fillRule='evenodd' clipRule='evenodd'></path>
                        </svg>
                        <span className="hidden sm:block">Go Back</span>
                    </Link>
                </nav>

                {/* Dashboard Content */}
                <main className="py-4 px-8">
                    <h1 className='text-4xl font-medium'>Dashboard</h1>
                    <div className='my-4 grid grid-cols-5 gap-6 md:gap-8'>
                        <div className='px-8 py-4 col-span-5'>
                            <h3 className='text-lg md:text-2xl font-medium'>Overview</h3>
                            <p className='text-gray-500 font-[500]'>You have spent <span className='text-red-500'>-₹300.4</span> and earned <span className='text-green-500'>+₹600.2</span> this month</p>
                            <div className='w-full grid grid-cols-2 md:grid-cols-4 auto-cols-max gap-4 mt-8'>
                                <div className='p-4 px-8 border border-gray-200 rounded-lg shadow-lg shadow-slate-500/10'>
                                    <img src={income_icon} alt="income-icon" className='w-6 h-6 mb-4' />
                                    <h3 className='text-xl font-medium'>+₹6,754.50</h3>
                                    <p className='text-gray-500 text-sm font-[500]'>Income</p>
                                </div>
                                <div className='p-4 px-8 border border-gray-200 rounded-lg shadow-lg shadow-slate-500/10'>
                                    <img src={expense_icon} alt="expense-icon" className='w-6 h-6 mb-4' />
                                    <h3 className='text-xl font-medium'>-₹1,232.50</h3>
                                    <p className='text-gray-500 text-sm font-[500]'>Expense</p>
                                </div>
                                <div className='p-4 px-8 border border-gray-200 rounded-lg shadow-lg shadow-slate-500/10'>
                                    <img src={invest_icon} alt="invest-icon" className='w-6 h-6 mb-4' />
                                    <h3 className='text-xl font-medium'>+₹2,053.50</h3>
                                    <p className='text-gray-500 text-sm font-[500]'>Invest</p>
                                </div>
                                <div className='p-4 px-8 border border-gray-200 rounded-lg shadow-lg shadow-slate-500/10'>
                                    <img src={recurring_icon} alt="recurring-icon" className='w-6 h-6 mb-4' />
                                    <h3 className='text-xl font-medium'>-₹1,232.50</h3>
                                    <p className='text-gray-500 text-sm font-[500]'>Recurring/Bills</p>
                                </div>
                            </div>
                        </div>
                        <div className='px-8 py-4 md:col-span-3 col-span-5 border rounded-lg'>
                            <div className='mb-8 flex flex-wrap justify-between items-center'>
                                <h3 className='text-lg md:text-2xl font-medium'>Expenses</h3>
                                <div className='grid grid-cols-4 text-sm md:text-lg'>
                                    <span className="flex items-center gap-2"><span className="h-2 w-2 bg-green-400 rounded-full"></span><p>Income</p></span>
                                    <span className="flex items-center gap-2"><span className="h-2 w-2 bg-red-400 rounded-full"></span><p>Expense</p></span>
                                    <span className="flex items-center gap-2"><span className="h-2 w-2 bg-blue-400 rounded-full"></span><p>Invest</p></span>
                                    <span className="flex items-center gap-2"><span className="h-2 w-2 bg-yellow-400 rounded-full"></span><p>Recurring/Bills</p></span>
                                </div>
                            </div>
                            <ExpenseBarGraph />
                        </div>
                        <div className='px-8 py-4 md:col-span-2 col-span-5 border'>
                            <div className="mb-8 flex flex-wrap justify-between items-center">
                                <h3 className='text-lg md:text-2xl font-medium'>Transactions</h3>
                                <Link to='/transactions' className='flex items-center gap-4'>
                                    <svg width='20' height='20' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z' fill='currentColor' fillRule='evenodd' clipRule='evenodd'></path>
                                    </svg>
                                    <span className="hidden sm:block">View More</span>
                                </Link>
                            </div>
                            <ul className="flex flex-col rounded-lg py-2 max-h-96 overflow-scroll scrollbar-hide">
                                <li className="border border-green-300 flex flex-row mb-2 select-none cursor-pointer bg-gray-50 rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg drop-shadow hover:shadow-green-50">
                                    <svg viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' className="rotate-90 mr-4 rounded-md w-10 h-10 bg-green-100 border-2 border-dashed border-green-400 fill-green-600 p-1"><path d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z' fillRule='evenodd' clipRule='evenodd'></path>
                                    </svg>
                                    <div className="flex-1 pl-1 mr-16">
                                        <code className="font-[600] text-green-500 tracking-wide">+₹100.0</code>
                                        <div className="text-gray-600">Dinner</div>
                                    </div>
                                    <div className="text-gray-600 text-sm">
                                        <div>11 Jan</div>
                                        <time>8:00 PM</time>
                                    </div>
                                </li>
                                <li className="border border-red-300 flex flex-row mb-2 select-none cursor-pointer bg-gray-50 rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg drop-shadow hover:shadow-red-50">
                                    <svg viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' className="-rotate-90 mr-4 rounded-md w-10 h-10 bg-red-100 border-2 border-dashed border-red-400 fill-red-600 p-1"><path d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z' fillRule='evenodd' clipRule='evenodd'></path>
                                    </svg>
                                    <div className="flex-1 pl-1 mr-16">
                                        <code className="font-[600] text-red-500 tracking-wide">-₹300.0</code>
                                        <div className="text-gray-600">Recharge</div>
                                    </div>
                                    <div className="text-gray-600 text-sm">
                                        <div>13 Jan</div>
                                        <time>9:00 PM</time>
                                    </div>
                                </li>
                                <li className="border border-blue-300 flex flex-row mb-2 select-none cursor-pointer bg-gray-50 rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg drop-shadow hover:shadow-blue-50">
                                    <svg viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' className="rotate-180 mr-4 rounded-md w-10 h-10 bg-blue-100 border-2 border-dashed border-blue-400 fill-blue-600 p-1"><path d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z' fillRule='evenodd' clipRule='evenodd'></path>
                                    </svg>
                                    <div className="flex-1 pl-1 mr-16">
                                        <code className="font-[600] text-blue-500 tracking-wide">₹100.0</code>
                                        <div className="text-gray-600">Barclays</div>
                                    </div>
                                    <div className="text-gray-600 text-sm">
                                        <div>2 Jan</div>
                                        <time>8:00 PM</time>
                                    </div>
                                </li>
                                <li className="border border-yellow-300 flex flex-row mb-2 select-none cursor-pointer bg-gray-50 rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg drop-shadow hover:shadow-yellow-50">
                                    <svg viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' className="mr-4 rounded-md w-10 h-10 bg-yellow-100 border-2 border-dashed border-yellow-400 fill-yellow-600 p-1"><path d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z' fillRule='evenodd' clipRule='evenodd'></path>
                                    </svg>
                                    <div className="flex-1 pl-1 mr-16">
                                        <code className="font-[600] text-yellow-500 tracking-wide">-₹199.0</code>
                                        <div className="text-gray-600">Netflix</div>
                                    </div>
                                    <div className="text-gray-600 text-sm">
                                        <div>1 Jan</div>
                                        <time>00:01 AM</time>
                                    </div>
                                </li>
                                <li className="border border-green-300 flex flex-row mb-2 select-none cursor-pointer bg-gray-50 rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                    <svg viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' className="rotate-90 mr-4 rounded-md w-10 h-10 bg-green-100 border-2 border-dashed border-green-400 fill-green-600 p-1"><path d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z' fillRule='evenodd' clipRule='evenodd'></path>
                                    </svg>
                                    <div className="flex-1 pl-1 mr-16">
                                        <code className="font-[600] text-green-500 tracking-wide">₹100.0</code>
                                        <div className="text-gray-600">Dinner</div>
                                    </div>
                                    <div className="text-gray-600 text-sm">
                                        <div>11 Jan</div>
                                        <time>8:00 PM</time>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}