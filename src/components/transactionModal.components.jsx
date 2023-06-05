import { useState } from "react";
import income_icon from '../assets/income-icon.svg';
import expense_icon from '../assets/expense-icon.svg';
import invest_icon from '../assets/invest-icon.svg';
import recurring_icon from '../assets/recurring-icon.svg';
import { useAddTransaction } from "../hooks/transactions.hooks";

export default function TransactionModal({ setModalOpen }) {
    const [transactionType, setTransactionType] = useState("");
    const [transactionTitle, setTransactionTitle] = useState("");
    const [timestamp, setTimestamp] = useState("");
    const [amount, setAmount] = useState("");
    const { mutate, isLoading } = useAddTransaction();

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        mutate(data, {
            onSuccess: () => {
                setModalOpen(false)
            },
            onError: () => {
                alert('Error')
            }
        })
    };

    return (
        <div className="fixed inset-0 w-screen h-screen flex justify-center items-center backdrop-blur backdrop-brightness-50 z-40">
            <div className="fixed inset-0" onClick={() => setModalOpen(prevState => !prevState)}></div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white rounded-xl px-4 md:px-8 py-10 z-50">
                <div className='flex flex-wrap w-full items-center gap-4 sm:gap-8'>
                    <div className='inline-flex flex-col rounded-xl justify-center items-center text-gray-600'>
                        <input type='radio' name='transactionType' id='transactionType_income' value='income' checked={transactionType === "income"}
                            onChange={(e) => setTransactionType(e.target.value)} className='opacity-0 absolute' required />
                        <label htmlFor='transactionType_income' className={`flex flex-col justify-center items-center text-base self-center ${transactionType === "income" ? 'bg-green-300' : 'bg-slate-200'} text-lg p-2 outline-0 rounded-full cursor-pointer transition-all duration-300 hover:bg-green-200`}>
                            <img src={income_icon} alt='income' className='w-5 h-5' />
                        </label>
                        Income
                    </div>
                    <div className='inline-flex flex-col rounded-xl justify-center items-center text-gray-600'>
                        <input type='radio' name='transactionType' id='transactionType_expense' value='expense' checked={transactionType === "expense"}
                            onChange={(e) => setTransactionType(e.target.value)} className='opacity-0 absolute' required />
                        <label htmlFor='transactionType_expense' className={`flex flex-col justify-center items-center text-base self-center ${transactionType === "expense" ? 'bg-red-300' : 'bg-slate-200'} text-lg p-2 outline-0 rounded-full cursor-pointer transition-all duration-300 hover:bg-red-200`}>
                            <img src={expense_icon} alt='expense' className='w-5 h-5' />
                        </label>
                        Expense
                    </div>
                    <div className='inline-flex flex-col rounded-xl justify-center items-center text-gray-600'>
                        <input type='radio' name='transactionType' id='transactionType_invest' value='invest' checked={transactionType === "invest"}
                            onChange={(e) => setTransactionType(e.target.value)} className='opacity-0 absolute' required />
                        <label htmlFor='transactionType_invest' className={`flex flex-col justify-center items-center text-base self-center ${transactionType === "invest" ? 'bg-blue-300' : 'bg-slate-200'} text-lg p-2 outline-0 rounded-full cursor-pointer transition-all duration-300 hover:bg-blue-200`}>
                            <img src={invest_icon} alt='invest' className='w-5 h-5' />
                        </label>
                        Invest
                    </div>
                    <div className='inline-flex flex-col rounded-xl justify-center items-center text-gray-600'>
                        <input type='radio' name='transactionType' id='transactionType_recurring' value='recurring' checked={transactionType === "recurring"}
                            onChange={(e) => setTransactionType(e.target.value)} className='opacity-0 absolute' required />
                        <label htmlFor='transactionType_recurring' className={`flex flex-col justify-center items-center text-base self-center ${transactionType === "recurring" ? 'bg-yellow-300' : 'bg-slate-200'} text-lg p-2 outline-0 rounded-full cursor-pointer transition-all duration-300 hover:bg-yellow-200`}>
                            <img src={recurring_icon} alt='recurring' className='w-5 h-5' />
                        </label>
                        Recurring
                    </div>
                </div>
                <div>
                    <label htmlFor="title" className="block font-bold text-gray-600">
                        Title of Transaction
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="w-full bg-slate-100 border-b-2 border-gray-300 outline-none active:border-gray-500 hover:border-gray-500 p-2"
                        value={transactionTitle}
                        onChange={(e) => setTransactionTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="timestamp" className="block font-bold text-gray-600">
                        Data and Time
                    </label>
                    <input
                        type="datetime-local"
                        id="timestamp"
                        name="timestamp"
                        className="w-full bg-slate-100 rounded border-b-2 outline-none active:border-gray-500 hover:border-gray-500 p-2"
                        value={timestamp}
                        onChange={(e) => setTimestamp(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="amount" className="block font-bold text-gray-600">
                        Amount
                    </label>
                    <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        id="amount"
                        name="amount"
                        className="w-full bg-slate-100 border-b-2 border-gray-300 outline-none active:border-gray-500 hover:border-gray-500 p-2"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <button
                    className={`px-2 md:px-6 py-2 font-semibold focus:outline-0 transition-[border-style] duration-400 rounded-md bg-green-100 border-2 border-dashed border-green-400 hover:border-solid ${false && 'cursor-no-drop'}`}
                    disabled={isLoading}
                >
                    {isLoading ?
                        <>
                            <svg className='inline spin_loader -ml-2 mr-2 h-6 w-6 text-white will-change-transform' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                                <circle className='opacity-25' cx='12' cy='12' r='10' stroke='#2563eb' strokeWidth='4'></circle>
                                <path className='opacity-75' fill='#f2a30f' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                            </svg>
                            Processing...
                        </>
                        :
                        <div>
                            <span className="text-xl text-green-500 font-bold leading-none mr-2">+</span>
                            Add Transaction
                        </div>
                    }
                </button>
            </form>
        </div>
    );
};