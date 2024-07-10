import { ReactNode } from "react";

interface IProps {
    children: ReactNode;
    className?: string;
    onClick?: ()=> void;
    
}

const Button = ({className, children, onClick, ...rest}: IProps) => {
    return (
        <button className={`${className} w-full h-11 rounded-lg text-white text-sm hover:shadow-lg focus:outline-none focus:ring-1 focus:shadow-xl transition-all`} onClick={onClick} {... rest}>{children}</button>
    )
}
export default Button;