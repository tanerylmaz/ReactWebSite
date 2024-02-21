import { useContext, useState } from "react";
import AppContext from "../../AppContext";

function MenuItem(props) {
    var ctx = useContext(AppContext);
    var cn = ctx.pageClicked == props.numara ? "aktif" : "";

    function aClick() {
        ctx.pageChanger(props.page);
        ctx.pageClick(props.numara);
    }
    return (
        <li><a className={cn} href={props.href} onClick={aClick}>{props.text}</a></li>
    );
}
export default MenuItem;