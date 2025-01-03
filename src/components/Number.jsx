import React, { useState, useEffect } from 'react';

const Number = () => {
    const [Multiply, setMultiply] = useState(0);

    useEffect(() => {
        function MultiplyNumbers(num1, num2) {
            return num1 * num2;
        }
        let result = MultiplyNumbers(5, 15);
        setMultiply(result);
    }, []);

    return (
        <div className='py-10'>
            <h2 className="text-4xl max-sm:text-lg font-bold pb-4 text-center">Multiply Two Numbers with Function</h2>
            <p id="result" className='text-center font-medium text-3xl max-sm:text-base'> Total : {Multiply}</p>
        </div>
    );
};

export default Number;