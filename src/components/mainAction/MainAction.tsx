import React from "react";
import { BsPatchPlusFill } from 'react-icons/bs';
import "./mainAction.css"

export class MainAction extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="mainAction">
                <h2>Stwórz zadanie</h2>
                <div className="mainAction__icon">
                    <BsPatchPlusFill size={65} />
                </div>
            </div>
        )
    }
}