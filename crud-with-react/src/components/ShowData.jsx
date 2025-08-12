import React from "react";

export default function ShowData({ items }) {

    return (
        <ul>
          {items.map((i, idx) => (
            <>
            <li key={idx}>Name {i.name} Password : {i.password}</li>    
            </>
          ))}
        </ul>
      );
}

