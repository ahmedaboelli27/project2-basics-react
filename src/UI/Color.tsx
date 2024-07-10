
interface IProps {
    className?: string;
}
const Color = ({className}: IProps) => {
    return (
        <span className={`${className} w-3 h-3 rounded-full`} ></span>
    )

}
export default Color;