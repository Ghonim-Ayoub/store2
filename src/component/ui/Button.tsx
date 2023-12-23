import {ButtonHTMLAttributes, ReactNode} from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode,
    className?: string
    width?: 'w-full' | 'w-fit'
}
export default function Button({children, className, width ="w-full",  ...rest}: IProps){
    return <div>
        <button className={`${className} ${width} rounded-md p-1 text-white`}
          {...rest}>{children}</button>
    </div>
}