import { useEffect, useState } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Cell, Tooltip } from 'recharts';

import { DayStat } from 'src/types';
import CustomTooltip from './CustomTooltip';

const Chart = () => {
	const [data, setData] = useState<DayStat[]>([]);

	useEffect(() => {
		fetch('src/data/data.json')
			.then(data => data.json())
			.then((data: DayStat[]) => {
				setData(data);
			});
	}, []);

	return (
		<ResponsiveContainer
			width='100%'
			height='100%'>
			<BarChart data={data}>
				<Bar
					dataKey='amount'
					fill='#ec775f'
					radius={4}>
					{data.map((_, index) => (
						<Cell fill={index === 2 ? '#76b5bc' : '#ec775f'} />
					))}
				</Bar>
				<XAxis
					dataKey='day'
					axisLine={false}
					tickLine={false}
					dy={10}
					tick={{ fontSize: 16 }}
				/>
				<Tooltip
					cursor={false}
					content={<CustomTooltip />}
				/>
			</BarChart>
		</ResponsiveContainer>
	);
};
export default Chart;
