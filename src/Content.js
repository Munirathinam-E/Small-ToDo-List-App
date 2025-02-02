import React from "react";
import { ItemsList } from "./ItemsList";

export const Content = ({ items, handleCheck, handleDelete }) => {
   return (
       <main>
           {items.length ? (
               <ItemsList
                 items={items}
                 handleCheck={handleCheck}
                 handleDelete={handleDelete}
               />
           ) : (
               <p>Your List is Empty</p>
           )}
       </main>
   );
};
