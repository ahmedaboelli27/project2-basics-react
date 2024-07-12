import { ReactNode, ButtonHTMLAttributes } from "react";


interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    
}

const Button = ({className, children, type, ...rest}: IProps) => {
    return (
        <button className={`${className} w-1/2 h-11 rounded-lg text-white text-sm hover:shadow-lg 
                    focus:outline-none focus:ring-1 focus:shadow-xl transition-all`}
                    {... rest}>
                    {children}
        </button>
    )
}
export default Button;