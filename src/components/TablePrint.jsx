import React from "react";
const TablePrint = () => {
    const table = 2;
    let result1 = [];

    for (let i = 1; i <= 10; i++) {
        result1.push(`${table} × ${i} = ${table * i}`);
    }
    const arr = "radial code in hisar for development"
    const name = arr.split("")
    console.log(name);
    const value = arr.toUpperCase()
    console.log(value[0])
    let name1 = ""
    for (let i = 1; i < 7; i++) {
        name1 += name[i]
    }
    console.log(value[0] + name1)

    let name2 = ""
    for (let i = 8; i < 12; i++) {
        name2 += name[i]
    }
    console.log(value[7] + name2)
    let name3 = ""
    for (let i = 13; i < 15; i++) {
        name3 += name[i]
    }
    console.log(value[12] + name3)

    let name4 = ""
    for (let i = 16; i < 21; i++) {
        name4 += name[i]
    }
    console.log(value[15] + name4)

    let name5 = ""
    for (let i = 22; i < 25; i++) {
        name5 += name[i]
    }
    console.log(value[21] + name5)

    let name6 = ""
    for (let i = 26; i < arr.length; i++) {
        name6 += name[i]
    }
    console.log(value[25] + name6)
    console.log(value[0] + name1 + value[7] + name2 + value[12] + name3 + value[15] + name4 + value[21] + name5 + value[25] + name6)

    const arrName = ["radial code in hisar for development"]
    const result = arrName.split("")
    result[0] = result[0].toUpperCase()
    for (let i = 0; i < result.length; i++) {
        if (result[i - 1] === " ") {
            result[i] = result[i].toUpperCase()
        }
    }
    console.log(result.join(""))

    return (
        <div className="p-6">
            <h2 className="text-4xl font-bold pb-4 text-center max-sm:text-lg">For Loop</h2>
            <div className="text-lg text-gray-800 space-y-2 text-center max-sm:text-base">
                {result.map((line, index) => (
                    <p className="text-center font-medium text-3xl max-sm:text-base" key={index}>{line}</p>
                ))}
            </div>
        </div>
    );
};
export default TablePrint;
