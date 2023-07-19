import { Component, ReactNode } from "react";

export interface ContainerProps {
    readonly className?: string;
    readonly layout: "none" | "grid" | "flex";
    readonly children?: ReactNode;
}

export default class Container extends Component<ContainerProps> {
    render() {
        const { layout, className, children } = this.props;

        let layoutClassName = "my-6";
        switch (layout) {
            case "grid":
                layoutClassName = "mt-5 gap-4 grid grid-cols-1 md:grid-cols-2";
                break;
            case "flex":
                layoutClassName = "mt-5 gap-4 flex flex-row flex-wrap";
                break;
            default:
                break;
        }

        return (
            <div className={`${layoutClassName} ${className}`}>{children}</div>
        );
    }
}