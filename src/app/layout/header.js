import HeadMain from './section'

export default function Header() {
    return (

<div className="flex " >
        <div className="bg-[#080808] h-[100vh] w-16 sticky top-0 left-0 " id="sidebar">
                <div className="ml-4 mt-6">
                    <h1 className=' text-white font-primary  text-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'>A<span className=" text-green-300">.</span></h1>
                    <ul className="text-white items-center flex leading-6 mt-16 text-md  font-light  space-y-16" id="textv">
                        <li className="opacity-60 hover:text-[#0aff9d] hover:  text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[8px] ">propos</li>
                        <li className="opacity-60 hover:text-[#0aff9d]   font-medium text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] ">Projects</li>
                        <li className="opacity-60  hover:text-[#0aff9d]  font-medium text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] ">Expérience</li>
                        <li className="opacity-60  hover:text-[#0aff9d]  font-medium text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] ">Contact</li>
                    </ul>
                </div>
        </div>
       <HeadMain/>
       

</div>

    )
}