import React from 'react'
function Socials({ formData, socialFields, handleSocialChange }) {
    return (
        <>
            <div className="noCursor flex flex-col sm:flex-row sm:space-x-20 space-y-8 sm:space-y-0 my-8">
                <div class="flex-1 mt-8">
                    <h3 class="text-base font-semibold text-gray-200">Connect Your Socials</h3>
                    <p class="mt-3 font-light text-sm text-gray-500">Link your social media profiles to expand your online presence and professional network.</p>
                </div>

                <div className="noCursor flex-2 rounded-lg shadow bg-dashboardColor border border-jet">
                    <div class="px-6 py-8 sm:w-9/12">
                        {socialFields.map((field, index) => (
                            <div key={index} className="noCursor flex sm:gap-4 gap-3 items-center mt-2">
                                {field.icon}
                                <input style={{ backgroundColor: 'RGB(17, 19, 18)' }}
                                    type="text"
                                    name={field.name}
                                    value={formData.social[field.name]}
                                    placeholder={field.placeholder}
                                    onChange={handleSocialChange}
                                    className="noCursor placeholder:text-gray-600 border border-jet rounded px-3 py-[10px] w-full text-sm"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Socials;