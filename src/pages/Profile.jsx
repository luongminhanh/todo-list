import React from 'react'
import ProfileData from '../data/ProfileData'

const Profile = () => {
    return (
        <div className='flex w-full'>
            <div className='bg-gray-300 w-[15%] h-[100vh]'>
                <div className='logo flex justify-center pt-[30px] mb-[30px]'>
                    <svg
                        className='mt-[15px] mr-[5px] '
                        width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="20" height="20" rx="10" fill="#9C69E2" />
                    </svg>
                    <svg width="20" height="35" viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="20" height="35" rx="10" fill="#F063B8" />
                    </svg>
                </div>
                <div className='p-5'>
                    <p>Posts</p>
                    <p>Logout</p>
                </div>
            </div>
            <div className='right-container w-full'>
                <div className='navbar-add-search flex justify-between w-[100%]'>
                    <button
                        className='mt-[50px]  ml-[50px] mb-[30px] inline-block rounded-full bg-indigo-600 py-3 px-10 text-[15px] font-medium leading-normal text-white shadow-[0_4px_9px_-4px_purple] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
                    >Add new</button>
                    <div className='search flex items-center justify-center px-[50px]'>
                        <input
                            type="text"
                            placeholder="Title"
                            className='p-2.5 h-[40px] border border-black mr-[30px]'
                        ></input>
                        <input
                            type="text"
                            placeholder="Tag"
                            className='p-2.5 h-[40px] border border-black'
                        ></input>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-[80%]">
                        <table class="w-full text-sm text-left text-gray-500 ">
                            <thead class="text-xs text-gray-700 uppercase ">
                                <tr>
                                    <th scope="col" class="px-6 py-3 bg-gray-50 border text-center">
                                        ID
                                    </th>
                                    <th scope="col" class="px-6 py-3 bg-gray-50 border text-center">
                                        Title
                                    </th>
                                    <th scope="col" class="px-6 py-3 bg-gray-50 border text-center">
                                        Description
                                    </th>
                                    <th scope="col" class="px-6 py-3 bg-gray-50 border text-center">
                                        Tags
                                    </th>
                                    <th scope="col" class="px-6 py-3 bg-gray-50 border text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {ProfileData.length > 0 && ProfileData.map(item =>
                                    <tr class="border-b border-gray-200 dark:border-gray-700">
                                        <th class="px-6 py-4 text-center bg-gray-50 border">
                                            {item.id}
                                        </th>
                                        <td class="px-6 py-4 bg-gray-50 border text-center">
                                            {item.title}
                                        </td>
                                        <td class="px-6 py-4 bg-gray-50 border text-center">
                                            {item.description}
                                        </td>
                                        <td class="px-6 py-4 bg-gray-50 border text-center">
                                            {item.tags}
                                        </td>
                                        <td class="px-6 py-4 bg-gray-50 border">
                                            <div className='flex gap-x-10 justify-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <button className='py-3 px-10 bg-gray-300 ml-[70%] mt-[50px] mb-[100px]'>Phần phân trang</button>
            </div>
        </div>
    )
}

export default Profile