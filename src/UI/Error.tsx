import {HTMLAttributes} from 'react';
interface IProps extends HTMLAttributes<HTMLSpanElement> {
    msg: String;
}
const Error = ({msg, ...rest} :IProps) => {
    return (
        
           msg ? <span className="text-red-600 text-xs" {...rest}>{msg}</span> : null 
        
    )
}
export default Error