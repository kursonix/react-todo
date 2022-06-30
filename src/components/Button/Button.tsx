import React from "react";
import "./button.css"

interface IButton {
    name: string;
    icon: any
}

export class Button extends React.Component<IButton> {
    render(): React.ReactNode {
        return (
            <button className="button">
                <span className="button__icon">
                    {this.props.icon}
                </span>
                <span>
                    {this.props.name}
                </span>
            </button>
        )
    }
}