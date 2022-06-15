import React from "react";
import Draggable from "react-draggable";
import InventoryItems from "../inventoryItems/inventoryItems";

export default function InventoryMainInterface(props) {
    return (
        <Draggable>
            <div class="inventory-main">
                <div class="inventory-header">
                    <div class="header inventory-icon">
                        <img
                            class="inventory header-image"
                            alt=""
                            src="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-rpg-esports-soft-fill-soft-fill-juicy-fish-2.png"
                        />
                    </div>
                    <div class="header inventory-label">{props.label}</div>
                    <div
                        class="header header-close"
                        title="Закрыть"
                        tabindex="0"
                        role="button"
                    >
                        <img
                            src="https://img.icons8.com/stickers/100/000000/delete-sign.png"
                            class="icon-close"
                            alt="close"
                        />
                    </div>
                </div>
                <div class="inventory-body">
                    <InventoryItems items={props.items_list} />
                </div>
                <div class="inventory-footer">
                    <div class="footer-info">Элементов: {props.items_list.length}</div>
                </div>
            </div>
        </Draggable>
    )
}