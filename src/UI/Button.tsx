import { ReactNode } from "react";

interface IProps {
    children: ReactNode;
    className?: string;
}

const Button = ({className, children}: IProps) => {
    return (
        <button className={`${className} w-1/2 h-11 rounded-lg text-white transition-colors text-sm`}>{children}</button>
    )
}
export default Button;