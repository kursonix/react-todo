import React from "react";
import "./menu.css";
import { FaDev, FaTasks } from "react-icons/fa";
import { Button } from "../Button/Button";
import { Logo } from "../logo/Logo";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

interface IMenu {
    isOpen: boolean,
    onOpen: () => void
}
export class Menu extends React.Component<IMenu> {


    render(): React.ReactNode {
        const sidebarClass = this.props.isOpen ? "sidebar open" : "sidebar";
        return (
            <div className={sidebarClass}>
                <div className="sidebar__content"><div><Logo onClick={this.props.onOpen}></Logo></div>
                    <div className="menu">
                        <Button icon={<FaTasks size={20} />} name="Zadania"></Button>
                        <Button icon={<FaTasks size={20} />} name="Zadania222"></Button>
                        <Button icon={<FaTasks size={20} />} name="Zadania333"></Button>
                    </div>
                    <div className="slide-button">
                        {
                            this.props.isOpen ? <BsFillArrowLeftCircleFill size={50} onClick={this.props.onOpen} /> : <BsFillArrowRightCircleFill size={50} onClick={this.props.onOpen} />
                        }
                    </div>
                </div>
            </div>
        )
    }
}