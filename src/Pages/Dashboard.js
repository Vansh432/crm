import {StatCard,MeetingSchedule,Calendar,Leaves,Notifications,Activity,Announcement} from '../Components/Main'
import '../Assets/styles/Pages/Dashboard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt, faCheckCircle, faTasks, faCalendarCheck ,faTicket,faClipboardList} from "@fortawesome/free-solid-svg-icons";

function Dashboards(){
  const stats = [
    { title: 'New Tickets',icon:<FontAwesomeIcon icon={faTicket} style={{fontSize:"1.5rem",color:"#ff7f50"}}/> ,count: 313, comparison: 'Than Last Year' },
    { title: 'Ticket Resolved', icon:<FontAwesomeIcon  icon={faCheckCircle} style={{fontSize:"1.5rem", color:"#ff7f50"}} />, count: 55, comparison: 'Than Last Month' },
    { title: 'Project Assigned', icon:<FontAwesomeIcon icon={faTasks} style={{fontSize:"1.5rem", color:"#ff7f50"}} />, count: 313, comparison: 'Than Last Month' },
    { title: 'Available Leaves',icon:<FontAwesomeIcon icon={faCalendarCheck} style={{fontSize:"1.5rem", color:"#ff7f50"}} />, count: 150, comparison: 'Than Last Month', percentageChange: '-6.5%' }
  ];
   return <>
    <div className="dashUpper">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          icon={stat.icon}
          title={stat.title}
          count={stat.count}
          comparison={stat.comparison}
          percentageChange={stat.percentageChange}
        />
      ))}
     
    </div>
    <div className='flex mb-[15px]'>
    <div className='mr-[10px] w-[43%]'>
    <MeetingSchedule/>
    <Leaves/>
    <Notifications/>

    </div>
    <div className='w-[57%]'>
    <Calendar/>
    <Activity/>
    </div>
    </div>
    <Announcement/>

   </>
}

export default Dashboards;