import React from "react";
import "./dashboard.css"

interface IDashboard {
    isOpen: boolean
}

export class Dashboard extends React.Component<IDashboard> {
    render(): React.ReactNode {
        const contentClass = this.props.isOpen ? "content open" : "content";
        return (<div className={contentClass}>Dashboard</div>)
    }
}