import { TransactionRow } from "../components";
import { db } from '../data'

export default function Transactions() {
    return (
        <main className="py-4 px-8">
            <h1 className='text-4xl font-medium'>Transactions</h1>
            <ul className="flex flex-col gap-4 my-4 rounded-lg py-2 overflow-scroll scrollbar-hide">
                {db.map(({ id, type, amount, timestamp, title }) => <TransactionRow key={id} type={type} amount={amount} title={title} timestamp={timestamp}>
                    <div className="flex gap-8 px-8 text-slate-500">
                        <strong>|</strong>
                        <span><strong> ✏️ </strong>Edit</span>
                        <strong>|</strong>
                        <span><strong> ❌ </strong>Delete</span>
                    </div>
                </TransactionRow>)}
            </ul>
        </main>
    );
}