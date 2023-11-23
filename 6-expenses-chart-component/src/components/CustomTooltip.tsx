import { TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
	if (active) {
    return (
      <div className='px-3 py-2 rounded-[8px] bg-brown text-white shadow-lg'>
        <p>{payload?.[0].value}</p>
      </div>
    )
  } else {
    return null;
  }
};
export default CustomTooltip;
