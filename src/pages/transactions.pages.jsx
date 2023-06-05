import { TransactionRow } from "../components";
import { useGetTransactions } from "../hooks/transactions.hooks";

export default function Transactions() {
    const { data, loading, error } = useGetTransactions()

    return (
        <main className="py-4 px-8">
            <h1 className='text-4xl font-medium'>Transactions</h1>
            {loading ?
                <div className="flex justify-center items-center h-96">
                    <svg className="animate-spin h-10 w-10 text-slate-500" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="4"></circle>
                        <path cl assName="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                </div>
                :
                <ul className="flex flex-col gap-4 my-4 rounded-lg py-2 overflow-scroll scrollbar-hide">
                    {data && data?.data.map(transaction => <TransactionRow key={transaction.id} data={transaction}>
                        <div className="flex gap-8 px-8 text-slate-500">
                            <strong>|</strong>
                            <span><strong> ✏️ </strong>Edit</span>
                            <strong>|</strong>
                            <span><strong> ❌ </strong>Delete</span>
                        </div>
                    </TransactionRow>
                    )}
                </ul>
            }
        </main>
    );
}