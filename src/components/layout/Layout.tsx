import React from "react";
import { Dashboard } from "../dashboard/Dashboard";
import { Menu } from "../menu/Menu";


interface ILayout { }
interface IState {
    isOpen: boolean
}
export class Layout extends React.Component<ILayout, IState> {
    constructor(props: ILayout) {
        super(props);
        this.state = {
            isOpen: true
        }
    }

    toggleSidebar = () => {
        this.setState(({ isOpen }) => ({
            isOpen: !isOpen
        }))
    }

    render(): React.ReactNode {
        return (
            <span>
                <Menu isOpen={this.state.isOpen} onOpen={this.toggleSidebar}></Menu>
                <Dashboard isOpen={this.state.isOpen}></Dashboard>
            </span>
        )
    }
}