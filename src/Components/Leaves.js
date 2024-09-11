import Dropdown from 'react-dropdown';
import { eachYearOfInterval, format } from 'date-fns';
import 'react-dropdown/style.css';
import '../Assets/styles/Components/Leaves.css'

function Leaves(){
const startYear = 2000;
const endYear = 2024;
const yearsArray = eachYearOfInterval({
    start: new Date(startYear, 0, 1),
    end: new Date(endYear, 0, 1)
  }).map(year => format(year, 'yyyy'));

    
    return <>
        <div className="leavesBox p-[20px]">
        <div className='flex justify-between items-center mb-[20px]'>
        <h2 className='text-[20px] text-[#444050] font-[600]'>Leaves</h2>
            <Dropdown options={yearsArray}/>
            </div>
            <div className='flex justify-around items-center'>
            <div>
                    <h3 className='text-[40px] font-semibold text-[#008aee]'>
                        10
                    </h3>
                    <h4 className='text-[#878a99] text-[.9rem]'>Total Leaves</h4>
                </div>
                <div>
                    <h3  className='text-[40px] text-[#15e500] font-semibold'>
                        10
                    </h3>
                    <h4  className='text-[#878a99] text-[.9rem]' >Leaves Taken</h4>   
                </div>
                <div>
                    <h3  className='text-[40px] text-[#ff7f50] font-semibold'>
                        10
                    </h3>
                    <h4 className='text-[#878a99] text-[.9rem]'>Pending Approval</h4>
                </div>
                <div>
                    <h3  className='text-[40px] font-semibold'>
                        10
                    </h3>
                    <h4 className='text-[#878a99] text-[.9rem] '>Loss of Pay</h4>
                </div>
            </div>
        </div>
    </>
}

export default Leaves;