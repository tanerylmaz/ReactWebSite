import { useState } from "react";

function MenuItem(props) {
    const [classValue, setClassValue] = useState("");
    function aClick() {
        setClassValue("aktif");
    }
    return (
        <li><a onClick={aClick}
            className={classValue}>{props.text}</a></li>
    );
}
export default MenuItem;