import React from "react";
import { MainAction } from "../mainAction/MainAction";
import "./dashboard.css"

interface IDashboard {
    isOpen: boolean
}

export class Dashboard extends React.Component<IDashboard> {
    render(): React.ReactNode {
        const contentClass = this.props.isOpen ? "content open" : "content";
        return (<div className={contentClass}>
            <MainAction />
        </div>)
    }
}