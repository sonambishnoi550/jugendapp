import React from "react";

const Table = () => {
    const table = 2;
    let result = [];

    for (let i = 1; i <= 10; i++) {
        result.push(`${table} × ${i} = ${table * i}`);
    }

    return (
        <div className="p-6">
            <h2 className="text-4xl font-bold pb-4 text-center max-sm:text-lg">For Loop</h2>
            <div className="text-lg text-gray-800 space-y-2 text-center max-sm:text-base">
                {result.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
        </div>
    );
};

export default Table;
