import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteItem, setEditItem} from '../stores/ItemSlice'

export default function ShowData() {

  const items = useSelector(state => state.item.items)
  console.log(items);
  const dispatch = useDispatch()

    return items && (
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
                        <button onClick={ () => dispatch(deleteItem(i.id)) }>Delete</button>
                      </td>
                      <td className="px-3">
                        <button onClick={ () => dispatch(setEditItem(i))}>Update</button>
                      </td>
                    </tr>
                  </tbody> 
              </table>
            </div>
          ))}
        </ul>
      );
}

