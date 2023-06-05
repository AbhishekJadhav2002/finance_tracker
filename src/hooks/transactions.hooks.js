import { useMutation, useQuery } from '@tanstack/react-query';
import { addTransaction, getTransactions } from '../api';

function useGetTransactions() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['transactions'],
        queryFn: getTransactions,
    })

    return { data, isLoading, error }
}

function useAddTransaction() {
    const { mutate, isLoading, isSuccess, isError, data, error } = useMutation(addTransaction)
    return { mutate, isLoading, isSuccess, isError, data, error }
}

export { useAddTransaction, useGetTransactions }