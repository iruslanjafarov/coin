'use client';

import { FC } from 'react';

import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Tooltip,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Tooltip
);

interface IChartProps {
	labels: string[];
	data: number[];
	colorState: 'up' | 'down' | 'same';
}

/**
 * Chart component for visualizing price data using a line graph.
 *
 *
 * @param labels - Array of timestamps used for the x-axis (hidden)
 * @param data - Array of numerical price values
 * @param colorState - Trend state of the chart line: 'up', 'down', or 'same'
 *
 * @returns A styled Line chart visualizing price data.
 */

const Chart: FC<IChartProps> = ({ labels, data, colorState }) => {
	const lineColor =
		colorState === 'up'
			? '#22c55e'
			: colorState === 'down'
			? '#ef4444'
			: '#6b7280';

	const chartData = {
		labels,
		datasets: [
			{
				label: '',
				data,
				borderColor: lineColor,
				backgroundColor: 'transparent',
				pointRadius: 0,
				tension: 0,
				borderWidth: 2,
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: { display: false },
			tooltip: {
				mode: 'index' as const,
				intersect: false,
				backgroundColor: '#1f2937',
				titleColor: '#fff',
				bodyColor: '#fff',
				callbacks: {
					title: () => '',
				},
			},
		},
		scales: {
			x: {
				display: false,
				grid: {
					display: false,
				},
			},
			y: {
				display: true,
				grid: {
					display: true,
				},
			},
		},
		elements: {
			line: {
				fill: false,
			},
		},
	};

	return <Line data={chartData} options={options} />;
};

export default Chart;
