import React from "react";
import { FiHome } from 'react-icons/fi'

export default function UrlmapComponent(props) {
    return (
        <div style={{ width: "100%", height: "40px", display: "flex", alignItems: "center", gap: "5px" }}>
            <a style={{ color: 'silver', textDecoration: "none" }} href="/"><FiHome></FiHome> Home</a>
            <a style={{ color: 'silver', textDecoration: "none" }} href={props.url}>{props.urlname}</a>
        </div>
    )
}