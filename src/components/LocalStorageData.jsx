import React, { useState, useEffect } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: ""
    });

    const [tableData, setTableData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("userTableData")) || [];
        const filteredData = storedData.map(({ phoneNumber, ...rest }) => rest);
        localStorage.setItem("userTableData", JSON.stringify(filteredData));
        setTableData(filteredData);
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("userTableData", JSON.stringify(tableData));
        }
    }, [tableData, isLoaded]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(formData).every(value => value.trim() !== "")) {
            setTableData((prevTableData) => {
                const newData = [...prevTableData, formData];
                localStorage.setItem("userTableData", JSON.stringify(newData));
                return newData;
            });
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                address: ""
            });
        } else {
            alert("Please fill in all fields.");
        }
    };
    const handleDelete = () => {
        localStorage.removeItem("userTableData");
       setTableData([]);
    };


    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-700">User Form</h2>
                <form onSubmit={handleSubmit}>
                    {Object.keys(formData).map((field, index) => (
                        <div key={index} className="mb-4">
                            <label className="block mb-2 capitalize text-gray-600">
                                {field}
                            </label>
                            <input
                                type={field === "email" ? "email" : "text"}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>
                    ))}
                    <div className="flex gap-10">
                        <button
                            type="submit"
                            className="w-full text-center bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 mt-4"
                        >
                            Submit
                        </button>
                        <button onClick={handleDelete}
                            type="submit"
                            className="w-full text-center bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 mt-4"
                        >
                            Delete
                        </button>
                    </div>
                </form>
            </div>
            {tableData.length > 0 && (
                <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">User Data Table</h3>
                    <table className="w-full table-auto border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                {Object.keys(formData).map((field, index) => (
                                    <th key={index} className="border p-2 capitalize">{field}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((data, index) => (
                                <tr key={index} className="text-center">
                                    {Object.values(data).map((value, i) => (
                                        <td key={i} className="border p-2">{value}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
