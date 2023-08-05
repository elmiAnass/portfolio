import { FiMail } from "react-icons/fi"

const Contact = () => {
    return (
        <>
            <div className="head3 text-center ">

                <h1 className="  text-white font-boldout sm:text-9xl text-5xl ml-12  sm:ml-20  mb-16 mt-52 opacity-80 "> Contact <span className="text-[#0aff9d]">.</span> </h1>

                <div className="flex items-center ml-16  justify-center">
                    <FiMail className="text-white w-6 h-8" />
                    <p><a href='' className="text-[#0aff9d] ml-2 text-lg sm:text-2xl font-face ">anasselmissaoui@gmail.com</a></p>
                </div>
            </div>

        </>
    )
}
export default Contact