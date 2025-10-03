"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { motion } from "framer-motion";
import {
  CheckCircledIcon,
  CrossCircledIcon,
  EnvelopeClosedIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { FormEvent, useState } from "react";
import { Web3FormApi } from "@/lib/utils";
import services from "@/public/assets/services.png";

const Contact = () => {
  const [Loading, setLoading] = useState(false);
  const [AlertBox, setAlertBox] = useState({
    isDisplayed: false,
    message: "",
    success: false,
  });

  setTimeout(() => {
    if (AlertBox.isDisplayed) {
      setAlertBox({ ...AlertBox, isDisplayed: false });
    }
  }, 2500);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const result = await Web3FormApi(e);
    if (result.success) {
      setAlertBox({
        isDisplayed: true,
        message: result.message,
        success: true,
      });
    } else {
      setAlertBox({ ...AlertBox, isDisplayed: true, message: result.message });
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen text-white flex flex-col items-center pt-20">
      <main className="flex-grow container mx-auto px-4">
        <div className="bg-black rounded-[50px] md:rounded-[100px] px-16 max-w-6xl py-16 mx-auto my-20 shadow-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="hidden lg:flex flex-col justify-between m-10 rounded-[30px] md:px-7 py-10 bg-gradient-to-t from-gradientColor  to-[#0F1015]">
              <div>
                <h2 className="text-5xl font-bold mb-3 text-white Aeonik-bold-fatface-regular">
                  Talk to us!
                </h2>
                <p className="mb-4 text-xl Aeonik-regular">
                  Ask us anything or just say hi...
                </p>
              </div>
              <div className="">
                <div className="flex items-center mb-2 Aeonik-regular">
                  <EnvelopeClosedIcon className="text-white w-6 h-6 mr-3" />
                  <span>onlydevsofficial@gmail.com</span>
                </div>
                <div className="flex items-center mb-2">
                  <InstagramLogoIcon className="text-white w-6 h-6 mr-3" />
                  <span>@onlydev.s</span>
                </div>
                <div className="flex items-center mb-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 116 104"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3 w-6 h-6"
                  >
                    <path
                      d="M91.3013 0H108.944L70.4 44.0533L115.744 104H80.24L52.432 67.6427L20.6133 104H2.95999L44.1867 56.88L0.687988 0H37.0933L62.2293 33.232L91.3013 0ZM85.1093 93.44H94.8853L31.7813 10.0053H21.2907L85.1093 93.44Z"
                      fill="white"
                    />
                  </svg>
                  <span>@onlydevsoffic_</span>
                </div>
                <div className="flex items-center">
                  <LinkedInLogoIcon className="text-white w-6 h-6 mr-3" />
                  <span>onlydevsofficial</span>
                </div>
              </div>
            </div>
            <div className="md:p-7">
              <h1 className="text-center text-3xl mb-10  font-bold  aeonik-bold">
                Contact Us
              </h1>
              <form onSubmit={handleSubmit} className="Aeonik-regular">
                <div className="mb-6">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full p-3 border border-gray-700 rounded-full bg-black focus:border-gradientColor focus:ring-gradientColor"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full p-3 border border-gray-700 rounded-full bg-black focus:border-gradientColor focus:ring-gradientColor"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-700 rounded-3xl bg-black focus:border-gradientColor focus:ring-gradientColor"
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    className="bg-gradient-to-r from-gradientColor rounded-full to-[#222225] text-white font-bold py-3 px-8 focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
                    type="submit"
                  >
                    {Loading ? "Loading..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </servicesCarousel>
      </main>

      {AlertBox.isDisplayed && (
        <Alert className="bg-gradientColor absolute w-auto rounded-xl right-2 bottom-2 md:right-8 md:bottom-8">
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {AlertBox.success && <CheckCircledIcon className="w-5 h-5" />}
            {!AlertBox.success && <CrossCircledIcon className="w-5 h-5" />}
            <div>
              <AlertTitle>
                {AlertBox.success ? "Success!" : "Failed :("}
              </AlertTitle>
              <AlertDescription>{AlertBox.message}</AlertDescription>
            </div>
          </motion.div>
        </Alert>
      )}
    </div>
  );
};


export default Contact;
