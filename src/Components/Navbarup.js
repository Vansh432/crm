import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { IoMailOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";



function Navbarup(props) {
   const {setWidthinner,width}=props;
   function setInnerWidth(){
    setWidthinner();
   }
    return <>
        <nav className={`fixed top-0 right-0 flex justify-between items-center  h-[70px] px-[30px] py-[13px] bg-white] transotion duration-[0.4s]`} style={{width:width?"100%":"83.25%", background:"#fff",zIndex:"1000"}}>
            <div className="flex  justify-between items-center ">
                <CiMenuBurger  className="text-2xl cursor-pointer font-semibold" onClick={setInnerWidth} />
                <h2  className="text-3xl font-bold ml-[40px] ">Vansh 👋</h2>
            </div>
            <div className="flex  justify-between items-center">
                <div className="relative h-fit w-[255px] ">
                    <input type="text" placeholder="Search Here..."  className="w-full h-[35px] pl-[10px] rounded-[30px] text-[.876rem] outline-[#ff7f50] border-[1px] border-[#878a99] border-solid"/>
                    <CiSearch className="absolute top-[18%] right-[10px] text-[1.4rem] text-[#878a99]  cursor-pointer"/>
                </div>
                <div className="flex justify-center items-center ml-[28px]">
                    <TfiWorld className="text-[1.3rem] text-[#878a99]  cursor-pointer"/>
                    <span className="ml-[10px] text-[14px] cursor-pointer">English</span>
                </div>
                <div className="ml-[20px]">
                    <IoMailOutline className="text-[1.4rem] text-[#878a99] cursor-pointer" />
                </div>
                <div>
                    <IoIosNotificationsOutline className="text-[1.4rem] text-[#878a99]  ml-[20px] cursor-pointer"  />

                </div>
                <div className="flex ml-[28px] justify-center items-center cursor-pointer">
                    <div className="flex w-[40px] h-[40px] rounded-full">
                        <img src="https://html.bdevs.net/manez.prev/assets/images/avatar/avatar.png" alt="profile  navbar" className="rounded-full"  />
                    </div>
                    <div className="ml-[10px] pointer">
                        <h2 className="font-[500]">Jhon Smith</h2>  
                        <h4 className="relative pl-[8px] text-[.88rem] text-[#878a99]"><div className="w-[7px] h-[7px] rounded-[50%] absolute bottom-[1px]   left-[-1px] bg-[#4ae80b] "></div> online </h4>
                    </div>
                    <div>
                            <MdKeyboardArrowDown className="ml-[10px] text-[1.4rem] text-[#878a99] "/>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Navbarup;