import React, { useState, useEffect } from 'react';

const Star = () => {
    const [name, setName] = useState([]);

    useEffect(() => {
        const rows = 4;
        const cols = 5;
        const result = [];
        for (let i = 0; i < rows; i++) {
            let row = "";
            for (let j = 0; j < cols; j++) {
                row += "* ";
            }
            result.push(row.trim());
        }

        setName(result);
    }, []);

    return (
        <div className='py-10'>
            <h2 className="text-4xl font-bold pb-4 text-center max-sm:text-lg">Star with nested loop</h2>
            <div className="text-center">
                {name.map((row, index) => (
                    <p key={index} className="text-3xl">{row}</p>
                ))}
            </div>
        </div>
    );
};

export default Star;
