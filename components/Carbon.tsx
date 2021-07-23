import _ from "lodash";
import React, { Component, useEffect, useState } from "react";

interface CarbonProps {
    name: string
    serve: string
    script?: string
    placement: string
    fallback: React.ReactNode
    showFallback: Boolean
}

export default function Carbon(props: CarbonProps) {
    const [forceUpdate, updateForceUpdate] = useState(0);
    let name = props.name || "pixelmobco";
    let serve = props.serve || "CK7I42Q7";
    let placement = props.placement || "";
    let fallback = props.fallback || null;
    let showFallback = false;

    const adShowing = () => document.getElementById(`${name} #carbonads`) !== null;

    useEffect(() => {
        let script = document.createElement("script");
        script.defer = !!script;
        script.async = true;
        script.id = "_carbonads_js";
        script.type = "text/javascript";
        script.src = `//cdn.carbonads.com/carbon.js?serve=${serve}&placement=${placement}`;
        script.onerror = () => {
            showFallback = true;
            updateForceUpdate(1);
        };
        script.addEventListener("load", () => {
            if (!adShowing) _.invoke((window as any)._carbonads, "refresh");
        });

        document.querySelector(`#${name}`).appendChild(script);
    }, [])

    if (showFallback && fallback) {
        return fallback;
    }
    return <div id={name} />;
}
