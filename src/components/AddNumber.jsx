import React, { useState, useEffect } from 'react';
const AddNumber = () => {
    const [Sum, setSum] = useState(0);
    useEffect(() => {
        function addNumbers(num1, num2) {
            return num1 + num2;
        }
        let result = addNumbers(5, 15);
        setSum(result);
    }, []);
    return (
        <div className='py-10'>
            <h2 className="text-4xl max-sm:text-lg font-bold pb-4 text-center">Multiply Two Numbers with Function</h2>
            <p id="result" className='text-center font-medium text-3xl max-sm:text-base'> Total : {Sum}</p>
        </div>
    );
};
export default AddNumber;