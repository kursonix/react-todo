import React from "react";
import "./menu.css";

interface IMenu {
    isOpen: boolean,
    onOpen: () => void
}
export class Menu extends React.Component<IMenu> {


    render(): React.ReactNode {
        const sidebarClass = this.props.isOpen ? "sidebar open" : "sidebar";
        return (
            <div className={sidebarClass}>
                <div> I slide into view </div>
                <div> Me Too! </div>
                <div> Me Three! </div>
                <button onClick={this.props.onOpen} className="sidebar-toggle">
                    Toggle Sidebar
                </button>
            </div>
        )
    }
}