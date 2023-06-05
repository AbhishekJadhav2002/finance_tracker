// import { useCarbonFootprint } from '@/hooks/dashboard.hooks'
import {
    ArcElement,
    CategoryScale,
    Chart as ChartJS,
    BarElement,
    LinearScale,
    Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
)

export default function ExpenseBarGraph() {
    // const { data, isLoading, error } = useCarbonFootprint()

    // if (isLoading) return <p className='pl-3 text-3xl text-neutral-500 font-bold'>Loading...</p>

    // if (error) return <p className='pl-3 text-3xl text-red-500 font-bold'>Something went wrong!</p>

    const options = {
        plugins: {
            title: {
                display: false,
                text: 'Carbon Footprint',
            },
        },
        legend: {
            display: false,
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false,
                }
            },
            y: {
                stacked: true,
                grid: {
                    display: false,
                }
            }
        },
        barPercentage: 0.8,
        categoryPercentage: 0.9,
    }

    const carbonFootprintData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                backgroundColor: 'rgb(250 204 21)',
                data: [1200, 503, 942, 593, 1200, 503, 942, 593, 1200, 503, 942, 593],
            },
            {
                backgroundColor: ' rgb(96 165 250)',
                data: [1200, 503, 942, 593, 1200, 503, 942, 593, 1200, 503, 942, 593],
            },
            {
                backgroundColor: 'rgb(248 113 113)',
                data: [1200, 503, 942, 593, 1200, 503, 942, 593, 1200, 503, 942, 593],
            },
            {
                backgroundColor: 'rgb(74 222 128)',
                data: [1200, 503, 942, 593, 1200, 503, 942, 593, 1200, 503, 942, 593],
                borderRadius: {
                    topLeft: 10,
                    topRight: 10,
                },
            }
        ],
    }

    // if (data) {
    //     carbonFootprintData.datasets[0].data = data.data.spinning
    //     carbonFootprintData.datasets[1].data = data.data.transportation
    //     carbonFootprintData.datasets[2].data = data.data.carding
    //     carbonFootprintData.datasets[3].data = data.data.heating_cooling
    // }

    return <Bar data={carbonFootprintData} options={options} />
}