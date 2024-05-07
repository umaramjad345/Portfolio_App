import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { FloatingLabel, Select, Textarea } from "flowbite-react";

const selectOptions = [
  "Web Application",
  "Mobile Application",
  "UI/UX Design",
  "Branding",
];

const HireMeModal = ({ onClose, onRequest }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
    >
      {/* Modal Backdrop */}
      <div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

      {/* Modal Content */}
      <main className="flex flex-col items-center justify-center h-full w-full">
        <div className="modal-wrapper flex items-center z-30">
          <div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
            <div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
              <h5 className=" text-primary-dark dark:text-primary-light text-xl">
                What project are you looking for?
              </h5>
              <button
                onClick={onClose}
                className="px-4 font-bold text-primary-dark dark:text-primary-light"
              >
                <FiX className="text-3xl" />
              </button>
            </div>
            <div className="p-5 w-full h-full">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="max-w-xl m-4 text-left flex flex-col gap-4"
              >
                <FloatingLabel variant="filled" label="Name" type="text" />
                <FloatingLabel variant="filled" label="Email" type="email" />

                <Select name="subject" required aria-label="Project Category">
                  {selectOptions.map((option) => (
                    <option className="text-normal sm:text-md" key={option}>
                      {option}
                    </option>
                  ))}
                </Select>
                <Textarea
                  className="rounded-bl-none rounded-br-none"
                  variant="filled"
                  cols="14"
                  rows="6"
                  placeholder="Write Your Message Here"
                  aria-label="Message"
                ></Textarea>
                <button
                  type="submit"
                  onClick={onClose}
                  className="text-lg text-nowrap text-indigo-700 dark:text-slate-100 hover:text-slate-100 w-1/2 p-2 py-2 border-2 border-indigo-600 transition-all duration-500 hover:bg-indigo-600 rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="max-w-xl w-full text-right">
              <button
                type="submit"
                onClick={onClose}
                className="text-lg text-slate-100 mx-8 w-1/4 px-2 py-2 rounded-lg bg-indigo-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default HireMeModal;
