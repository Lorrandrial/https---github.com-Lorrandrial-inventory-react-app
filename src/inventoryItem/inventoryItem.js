import React from "react";

export default function InventoryItem(props) {
    return (
        <div class="inventory-item">
          <img src={props.item.url} alt={props.item.description} class="icon-item"/>
        </div>
    )
}