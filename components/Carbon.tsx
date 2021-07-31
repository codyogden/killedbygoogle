import _ from "lodash";
import React, { useEffect, useState } from "react";
import { FallbackAd } from './List';

interface CarbonProps {
    name: string
    serve: string
    script?: string
    placement: string
    fallback: React.ReactNode
}

export default function Carbon(props: CarbonProps) {
    const [forceUpdate, updateForceUpdate] = useState(0);
    const [showFallback, updateShowFallback] = useState(false);
    let name = props.name || "pixelmobco";
    let serve = props.serve || "CK7I42Q7";
    let placement = props.placement || "";
    let fallback = props.fallback || null;

    const adShowing = () => document.getElementById(`${name} #carbonads`) !== null;

    useEffect(() => {
        let script = document.createElement("script");
        script.defer = !!script;
        script.async = true;
        script.id = "_carbonads_js";
        script.type = "text/javascript";
        script.src = `//cdn.carbonads.com/carbon.js?serve=${serve}&placement=${placement}`;
        script.onerror = () => {
            updateShowFallback(true);
        };
        script.addEventListener("load", () => {
            if (adShowing()) {
                _.invoke((window as any)._carbonads, "refresh")
                updateForceUpdate(1);
            }
        });

        document.querySelector(`#${name}`)?.appendChild(script);
    }, [])

    if (showFallback) {
        return <FallbackAd />;
    }
    return <div id={name} />;
}
