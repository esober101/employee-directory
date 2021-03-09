import React from "react";
import "./style.css";

export default function SearchResults({ employees }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Photo</th>
                    <th onClick={employees.handlesort}>Name</th>
                    <th>Location</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>{employees[0] !== undefined && employees[0].name !== undefined ? (
                employees.map(({ login, picture, name, location, phone, email }) => {
                    return (
                        <tr key={login.uuid}>
                            <td><img alt={`employee`} src={picture.medium}></img></td>
                            <td>{name.first} {name.last}</td>
                            <td>{location.state}</td>
                            <td>{phone}</td>
                            <td><a href={"mailto:" + email}>{email}</a></td>
                        </tr>
                )})) : (<></>)}
            </tbody>
        </table>
    )
}