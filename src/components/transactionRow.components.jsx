import { useState } from "react"

const colorsEnum = {
    income: 'green',
    expense: 'red',
    invest: 'blue',
    recurring: 'yellow'
}

const rotationEnum = {
    income: 'rotate-90',
    expense: '-rotate-90',
    invest: 'rotate-180',
    recurring: 'rotate-0'
}

const signEnum = {
    income: '+',
    expense: '-',
    invest: '',
    recurring: '-'
}

export default function TransactionRow(props) {
    const transaction = useState(props.data)[0]
    transaction.timestamp = new Date(transaction.timestamp)

    const color = colorsEnum[transaction.type] || 'gray'
    const rotate = rotationEnum[transaction.type] || 'rotate-0'
    const sign = signEnum[transaction.type] || ''

    const li_classes = {
        income: 'border-green-300 hover:shadow-green-50',
        expense: 'border-red-300 hover:shadow-red-50',
        invest: 'border-blue-300 hover:shadow-blue-50',
        recurring: 'border-yellow-300 hover:shadow-yellow-50'
    }

    const svg_classes = {
        income: 'bg-green-100 border-green-400 fill-green-600',
        expense: 'bg-red-100 border-red-400 fill-red-600',
        invest: 'bg-blue-100 border-blue-400 fill-blue-600',
        recurring: 'bg-yellow-100 border-yellow-400 fill-yellow-600'
    }

    return (
        <li className={`${li_classes[transaction.type]} border flex flex-row mb-2 select-none cursor-pointer bg-gray-50 rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg drop-shadow`}>
            <svg viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' className={`${rotate} ${svg_classes[transaction.type]} mr-4 rounded-md w-10 h-10 border-2 border-dashed p-1`}><path d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z' fillRule='evenodd' clipRule='evenodd'></path>
            </svg>
            <div className="flex-1 pl-1 mr-16">
                <code className={`font-[600] ${'text-' + color + '-500'} tracking-wide`}>{sign + '₹' + transaction.amount.toLocaleString()}</code>
                <div className="text-gray-600 text-base">{transaction.title}</div>
            </div>
            <div className="text-gray-600 text-sm">
                <div>{transaction.timestamp.toLocaleDateString('en-us', { day: "numeric", month: "short" })}</div>
                <time>{transaction.timestamp.getHours() + ':' + transaction.timestamp.getMinutes()}</time>
            </div>
            {props.children}
        </li>
    )
};