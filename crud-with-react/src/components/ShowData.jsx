import React,{useEffect} from "react";

export default function ShowData({ items, handleDelete, handleUpdate}) {
    return (
        <ul>
          {items.map((i, idx) => (
            <div className="nth-of-type-4:underline">
              <table className="table-auto md:table-fixed text-center">
                <thead className="mb-3">
                  <tr className="px-3">
                    <th className="px-3">Id</th>
                      <th className="px-3">Name</th>
                      <th className="px-3">Password</th>
                      <th className="px-3">Delete</th>
                      <th className="px-3">Update</th>
                  </tr>
                </thead>
                  <tbody>
                    <tr>
                    <td className="px-3">{i.id}</td>
                      <td className="px-3">{i.name}</td>
                      <td className="px-3">{i.password}</td>
                      <td className="px-3">
                        <button onClick={ () => handleDelete(i.id)}>Delete</button>
                      </td>
                      <td className="px-3">
                        <button onClick={ () => handleUpdate(i)}>Update</button>
                      </td>
                    </tr>
                  </tbody> 
              </table>
            </div>
          ))}
        </ul>
      );
}

