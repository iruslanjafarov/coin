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
	Tooltip,
);

interface IChartProps {
	labels: string[];
	data: number[];
	colorState: 'up' | 'down' | 'same';
}

/**
 * Компонент графика для визуализации ценовых данных в виде линейного графика.
 *
 * @param labels - Массив меток времени для оси X (скрытой).
 * @param data - Массив числовых значений цен.
 * @param colorState - Состояние тренда линии графика: 'up' (рост), 'down' (падение) или 'same' (без изменений).
 *
 * @returns Стилизованный линейный график, отображающий данные о ценах.
 */

export const Chart: FC<IChartProps> = ({ labels, data, colorState }) => {
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
