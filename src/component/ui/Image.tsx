interface IProps {
    alt: string,
    className: string
    imageUrl: string
}

export default function Image({imageUrl, alt, className}:IProps){
    return <img src={imageUrl} alt={alt} className={className}/>
}