import React, { useState } from 'react';

const FilterPractice = () => {
    const [data, setData] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [searchQuery, setSearchQuery] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = { firstName, lastName, email };
        setData([...data, newData]);
    };
    const filterData = data.filter((item) => {
        const search = searchQuery;
        return (
            item.firstName.includes(search) ||
            item.lastName.includes(search) ||
            item.email.includes(search)
        )
    })

    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <form className='md:max-w-[600px] max-w-[350px] mx-auto shadow-xl rounded-xl md:p-10 p-4' onSubmit={handleSubmit}>
                <input type="text" placeholder='First Name' required className='border border-black placeholder:text-black text-black bg-transparent outline-none p-4 rounded-xl mb-4 w-full'
                    onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" placeholder='Last name' required
                    className='border border-black placeholder:text-black text-black outline-none p-4 bg-transparent rounded-xl mb-4 w-full'
                    onChange={(e) => setLastName(e.target.value)} />
                <input type="email" placeholder='Email' required
                    className='border border-black placeholder:text-black text-black outline-none p-4 bg-transparent rounded-xl mb-4 w-full'
                    onChange={(e) => setEmail(e.target.value)} />
                <button className='px-7 py-3 border rounded-xl flex mx-auto text-black hover:bg-green-600 hover:text-white bg-green-400 transition-all duration-500'>
                    Add </button>
            </form>
            <input type="text" placeholder="Search"
                className='border md:max-w-[500px] max-w-[300px] mx-auto border-black placeholder:text-black text-black outline-none p-4 mt-10 bg-transparent rounded-xl mb-5 w-full' onChange={(e) => setSearchQuery(e.target.value)} />
            <table className='mt-10 text-black border-collapse border border-gray-300'>
                <thead>
                    <tr>
                        <th className='px-4 py-2 border border-gray-300'>First Name</th>
                        <th className='px-4 py-2 border border-gray-300'>Last Name</th>
                        <th className='px-4 py-2 border border-gray-300'>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {filterData.length > 0 ? (
                        data.map((item, index) => (
                            <tr key={index}>
                                <td className='text-center border border-gray-300 px-4 py-2'>{item.firstName}</td>
                                <td className='text-center border border-gray-300 px-4 py-2'>{item.lastName}</td>
                                <td className='text-center border border-gray-300 px-4 py-2'>{item.email}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className='text-center text-red-600'>no match found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default FilterPractice;
