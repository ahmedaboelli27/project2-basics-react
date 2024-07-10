import {InputHTMLAttributes} from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement>{}

const Input = ({... rest} :IProps) => {
    return (
        <input className="border rounded-md h-9 focus:outline-none focus:ring-1 focus:border-indigo-500 focus:shadow-xl pl-2 transition-all" {... rest}/>
    );
};
export default Input