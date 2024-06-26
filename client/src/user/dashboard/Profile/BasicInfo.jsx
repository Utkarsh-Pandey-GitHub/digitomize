import { useUserAuth } from "../../../context/UserAuthContext";
import { useState } from "react";
import React from 'react'
import ImageUploader from "../../../components/ImageUploader";
import { useLoaderData } from 'react-router-dom';
import { submitUserFormData } from "../../../../api";
import { toast, ToastContainer } from 'react-toastify';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";



function BasicInfo({ formData, setFormData, handleInputChange, handleInputChangeObjData }) {

    // const { personal_data, social } = useLoaderData();
    // const [isDisabled, setIsDisabled] = useState(false);
    // const [formData, setFormData] = useState({
    //     email: personal_data.email,
    //     username: personal_data.username,
    //     name: personal_data.name || "",
    //     picture: personal_data.picture,
    //     dateOfBirth: {
    //         data: personal_data.dateOfBirth.data || "",
    //         showOnWebsite: personal_data.dateOfBirth.showOnWebsite || true,
    //     },
    //     bio: {
    //         data: personal_data.bio.data || "",
    //         showOnWebsite: personal_data.bio.showOnWebsite || true,
    //     },
    //     phoneNumber: {
    //         data: personal_data.phoneNumber.data || "",
    //         showOnWebsite: personal_data.phoneNumber.showOnWebsite || true,
    //     },
    // });

    // const dobChange = (date) => {
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         dateOfBirth: {
    //             ...prevData.dateOfBirth,
    //             data: dayjs(date),
    //         },

    //     }));
    // };


    // const handleInputChangeObjData = (event) => {
    //     console.log("EVENT:", event);
    //     const { name, value } = event.target;
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [name]: {
    //             ...prevData[name],
    //             data: value,
    //         },
    //     }));
    // };
    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // };
    // async function handleSubmit(event) {
    //     event.preventDefault();
    //     setIsDisabled(true);
    //     const res = await submitUserFormData(formData)
    //         .then(() => {
    //             toast.success("updated successfully!", {
    //                 position: "top-left",
    //                 autoClose: 1500,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "colored",
    //             });
    //             setIsDisabled(false);
    //         })
    //         .catch((err) => {
    //             toast.error(err.response.data.message, {
    //                 position: "top-left",
    //                 autoClose: 1500,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "colored",
    //             });
    //             console.log(err);
    //             setIsDisabled(false);
    //         });

    // console.log(res);
    // }
    // const { user } = useUserAuth();
    const BIO_LIMIT = 250;

    return (
        <>
            <div className="noCursor flex flex-col sm:flex-row sm:space-x-20 space-y-8 sm:space-y-0 my-8">
                <div class="flex-1 mt-8">
                    <h3 class="text-base font-semibold text-gray-200">Basic account information</h3>
                    <p class="mt-3 font-light text-sm text-gray-500">Please enter your full name, or a display name you are comfortable with.</p>
                    <p class="mt-3 font-light text-sm text-gray-500">Click on the avatar to upload a custom one from your files..</p>
                </div>

                <div className="noCursor flex-2 rounded-lg shadow bg-dashboardColor border border-jet">
                    <div className="noCursor px-6 py-8 border-b border-jet">
                        <div className="noCursor flex flex-col sm:flex-row sm:space-x-5 items-center">

                            <div className="noCursor flex-0 px-4 flex flex-col justify-center items-center h-28">
                                <div className="noCursor relative text-center">
                                    <img src={formData.picture} alt="profile" className="noCursor w-16 rounded-full" />
                                    <label class="mt-5 text-xs font-medium text-secondary text-center">Upload</label>
                                </div>
                            </div>


                            <div class="flex-1 w-full">
                                <label class="ml-1 mt-5 text-xs font-medium text-secondary" htmlFor="firstName">Display Name</label>
                                <input style={{ backgroundColor: 'RGB(17, 19, 18)' }} placeholder="Bill" class="border border-jet rounded px-3 py-[10px] w-full mt-2 text-sm" required="required" type="text" value={formData.name} name="name" id="name" onChange={handleInputChange} maxLength={25} />
                            </div>

                        </div>

                    </div>
                    <div class="px-6 py-8 border-b border-jet">
                        <div class="sm:w-9/12">
                            <label class="ml-1 mt-5 text-xs font-medium text-secondary" htmlFor="email">E-mail</label>
                            <input readOnly style={{ backgroundColor: 'RGB(17, 19, 18)' }} placeholder="bill.gates@example.com" autocomplete="email" value={formData.email} class="placeholder:text-gray-600 border border-jet rounded px-3 py-[10px] w-full mt-2 text-sm" type="email" name="email" id="email" />
                        </div>
                        <div class="mt-5">
                            <div class="sm:w-9/12">
                                <div class="mt-5">
                                    <label htmlFor="phoneNumber" class="ml-1 text-xs font-medium text-secondary">Phone</label>
                                    <input required style={{ backgroundColor: 'RGB(17, 19, 18)' }} type="tel" placeholder="+32 460 23 47 50" name="phoneNumber" max={12} class="placeholder:text-gray-600 border border-jet rounded px-3 py-[10px] w-full mt-2 text-sm" id="phoneNumber" value={formData.phoneNumber.data} onChange={handleInputChangeObjData} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="px-6 py-8">
                        <div className="noCursor sm:w-9/12">
                            <div className="noCursor label">
                                <label class="text-xs font-medium text-secondary">Brief bio</label>
                                <label class="ml-1 text-xs font-medium text-secondary">{formData.bio?.data?.length || 0}/{BIO_LIMIT}</label>
                            </div>
                            <textarea style={{ backgroundColor: 'RGB(17, 19, 18)' }} className="noCursor placeholder:text-gray-600 textarea textarea-bordered h-24 w-full" placeholder="Ex: Developer @ digitomize" maxLength={BIO_LIMIT} onChange={handleInputChangeObjData} value={formData.bio.data} name="bio" id="bio" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BasicInfo;