"use client";

import React, { useRef, useState } from "react";
import Input from "../getrates/components/input";
import SelectInput from "../getrates/components/selectInput";
import TextArea from "../getrates/components/textArea";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { validateContactForm } from "@/lib/utilities/validationHelper";
import Image from "next/image";
import { Saira } from "next/font/google";
import SuccessNotification from "../components/notification";


const saira = Saira({
  weight: ["100", "400", "700", "900"],
  subsets: ["latin"],
});
gsap.registerPlugin(useGSAP);

export interface ContactFormData {
  name: string;
  email: string;
  phone: number;
  enquiryType: string;
  message: string;
}
const ContactUs = () => {
  const formRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [showNotification, setShowNotification] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: NaN,
    enquiryType: "",
    message: "",
  });
  const [erroData, setErrorData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  });

  useGSAP(() => {
    if (formRef.current) {
      gsap.fromTo(formRef.current, { x: 100 }, { x: 0, duration: 1 });
    }
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault();
    const validate = validateContactForm(formData);
    setErrorData(validate.error);
    if (validate.isError) return;

    const response = await fetch('https://script.google.com/macros/s/AKfycbxsQsR_6aX9ffS4-UAcK9qLdwcamDZTtu_g56M9b-0RPOVlp1sKd5DhBgxut3ujn5GKbw/exec',{
      method:'POST',
      headers:{"Content-Type":"application/x-www-form-urlencoded"},
      body:`Name=${formData.name}&Email=${formData.email}&Phone=${formData.phone}&Option=${formData.enquiryType}&Time=${new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Dubai",dateStyle:"short",timeStyle:"medium"}).format(new Date)}&Message=${formData.message}`
    })
     await response.text()
    setShowNotification(true)
    setFormData({
      name: "",
      email: "",
      phone: NaN,
      enquiryType: "",
      message: "",
    })
  };

  return (
    <div className="px-3 sm:px-10">
      <h2 className=" mb-6 w-full text-center text-4xl font-extrabold">
        Contact Us
      </h2>
      <div
        className="flex sm:flex-row flex-col-reverse rounded-lg min-h-[80vh] "
        style={{
          backgroundImage: "url(/intor.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "0",
        }}
      >
        <div className="w-full flex flex-col items-center justify-center  text-black">
          <div ref={headingRef} className="flex flex-col p-2  items-center rounded-xl bg-[#ffffff85]">
          <Image alt="ol" src={"/rwp.png"} width={350} height={350} />

            <div
              id="heading"
              className={`${saira.className} md:text-5xl text-4xl text-center md:text-start font-bold  mb-8`}
            >
              ROYAL WOOD PACKERS
            </div>
          </div>
        </div>

        <div
          ref={formRef}
          className="px-2 flex items-center justify-center w-full  sm:px-6 bg-[#00000099] rounded-lg  "
        >
          <div className="w-full">
            <div>
              <p className="mt-2 bg-slate-900 rounded-lg p-1 py-3 text-center text-lg">
              We would love to hear from you. Please fill out this form.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="mt-5 space-y-6 shadow-md rounded  "
            >
              <div className="rounded-md shadow-sm space-y-5">
                <Input
                  handleChange={handleChange}
                  value={formData.name}
                  name="name"
                  placeHolder="Full Name"
                  error={erroData.name}
                  type="text"
                />
                <Input
                  handleChange={handleChange}
                  value={formData.email}
                  name="email"
                  placeHolder="Email address"
                  error={erroData.email}
                  type="email"
                />
                <Input
                  handleChange={handleChange}
                  value={formData.phone}
                  name="phone"
                  placeHolder="Phone Number (optional)"
                  error={erroData.phone}
                  type="number"
                />
                <SelectInput
                  defaultOption="Select an option"
                  handleChange={handleChange}
                  err={erroData.enquiryType}
                  value={formData.enquiryType}
                  name="enquiryType"
                  options={[
                    { label: "Pallets", value: "Pallets" },
                    { label: "Crates", value: "Crates" },
                    { label: "Plywood", value: "Plywood" },
                    { label: "Box", value: "Box" },
                    { label: "Others", value: "Others" },
                  ]}
                />
                <TextArea
                  error={erroData.message}
                  handleChange={handleChange}
                  name="message"
                  placeHolder="Your message"
                  value={formData.message}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-blue-700 text-white  hover:animate-scale-bounce-1_02 duration-500 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        {showNotification && (
        <SuccessNotification
          message="Your message was sent successfully!"
          onClose={() => setShowNotification(false)}
        />
      )}
      </div>
    </div>
  );
};

export default ContactUs;
