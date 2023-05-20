import React from "react";
import "./Table.css";
const Table=(array)=>{
    let arr =array.array;
     console.log(arr);
return(
    
    <table>
        <thead>
        <tr>
        <th>name</th>
        <th>id</th>
        <th>image</th>
        <th>symbol</th>
        <th>current_price</th>
        <th>total_volume</th>
        </tr>
        </thead>
        <tbody>
        {arr.map((value,index) => (
    <tr key={index}>
        <td >{value.name}</td>
        <td >{value.id}</td>
        <td ><img className="image" src={value.image} alt={value.name}/></td>
        <td >{value.symbol}</td>
        <td >{value.current_price}</td>
        <td >{value.total_volume}</td>
    </tr>
        ))}
        </tbody>    
    </table>
);
}

export default Table;