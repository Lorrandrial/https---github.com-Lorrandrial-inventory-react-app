import React from "react";
import InventoryItem from "../inventoryItem/inventoryItem";

export default function InventoryItems(props) {
    return (
        <div>
            {props.items.map(function(element, index, array){ 
                return <InventoryItem item = {element}/>
             })}
        </div>
    )
}