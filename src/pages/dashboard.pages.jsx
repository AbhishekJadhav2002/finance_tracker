import { Link } from "react-router-dom";
import income_icon from '../assets/income-icon.svg';
import expense_icon from '../assets/expense-icon.svg';
import invest_icon from '../assets/invest-icon.svg';
import recurring_icon from '../assets/recurring-icon.svg';
import { ExpenseBarGraph, TransactionRow } from "../components";
import { useGetTransactions } from '../hooks/transactions.hooks';

export default function Dashboard() {
    const { data, loading, error } = useGetTransactions()

    return (
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
                    {loading ?
                        <div className="flex justify-center items-center h-96">
                            <svg className="animate-spin h-10 w-10 text-slate-500" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                            </svg>
                        </div>
                        :
                        <ul className="flex flex-col rounded-lg py-2 max-h-96 overflow-scroll scrollbar-hide">
                            {data && data?.data.slice(0, 5).map(transaction => <TransactionRow key={transaction.id} data={transaction} />)}
                        </ul>
                    }
                </div>
            </div>
        </main>
    );
}