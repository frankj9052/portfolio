import { ReactNode } from "react"

type Props = {
    icon: ReactNode,
    title: string,
    subTitle: string,
}

export const AccordionTitleCard = ({
    icon,
    title,
    subTitle,
}:Props) => {
    return(
        <div
            className="flex"
        >
            {/* icon */}
            <div>
                {icon}
            </div>
            {/* Text */}
            <div>
                <h1>
                    {title}
                </h1>
                <p>
                    {subTitle}
                </p>
            </div>
        </div>
    )
}