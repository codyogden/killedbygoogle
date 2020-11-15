import _ from "lodash";
import React, { Component } from "react";

class Carbon extends Component {
    constructor(props) {
        super(props);

        this.name = this.props.name || "pixelmobco";
        this.serve = this.props.serve || "CK7I42Q7";
        this.script = this.props.script || null;
        this.placement = this.props.placement || "";
        this.fallback = this.props.fallback || null;
        this.showFallback = false;
    }

    adShowing = () => document.getElementById(`${this.name} #carbonads`) !== null;

    componentDidMount = () => {
        let script = document.createElement("script");
        script.defer = !!this.script;
        script.async = true;
        script.id = this.script ? "" : "_carbonads_js";
        script.type = "text/javascript";
        script.src =
            this.script ||
            `//cdn.carbonads.com/carbon.js?serve=${this.serve}&placement=${this.placement
            }`;
        script.onerror = () => {
            this.showFallback = true;
            this.forceUpdate();
        };
        script.addEventListener("load", () => {
            if (!this.adShowing) _.invoke(window._carbonads, "refresh");
        });

        document.querySelector(`#${this.name}`).appendChild(script);
    };

    render() {
        if (this.showFallback && this.fallback) {
            return this.fallback;
        }
        return <div id={this.name} />;
    }
}

export default Carbon;