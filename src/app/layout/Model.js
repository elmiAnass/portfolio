'use client'
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";

const ExampleWrapper = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mt-6">
      <button
        onClick={() => setIsOpen(true)}
        className="text-[#0aff9d] font-face hover:text-white  rounded hover:opacity-90 transition-opacity"
      >
       En savoir plus {'->'}
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} props={props.Title}/>
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen ,props}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur  fixed inset-0 z-50 cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className=" bg-[#0aff9d] rounded-lg w-full h-96 shadow-xl cursor-default relative overflow-hidden  "
          >
  
            <div className="relative  z-10 ">
             
              <h3 className="p-6 text-3xl font-bold  mt-18 text-center font-face text-white">
               {props.Title}
              </h3>
              <p className="font-mono mb-48 text-center">
               {props.desc}
                
              </p>
              <div className="flex ">
               
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-black font-semibold w-full py-2 rounded"
                >
                  x
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExampleWrapper;