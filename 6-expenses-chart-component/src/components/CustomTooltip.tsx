import { TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
	if (active) {
    return (
      <div className='p-4 bg-white rounded-[8px]  text-brown shadow-lg'>
        <p>{payload?.[0].value}</p>
      </div>
    )
  } else {
    return null;
  }
};
export default CustomTooltip;
