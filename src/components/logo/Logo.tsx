import React from "react";
import { FaDev } from "react-icons/fa";
import "./logo.css"

interface ILogo {
    onClick: () => void
}
export class Logo extends React.Component<ILogo> {
    render(): React.ReactNode {
        return (
            <div className="logo" onClick={this.props.onClick}>
                <FaDev size={60}></FaDev>
                <div className="logo__name">Logo</div>
            </div>
        )
    }
}