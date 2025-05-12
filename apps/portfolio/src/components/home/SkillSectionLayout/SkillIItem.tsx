import { FrankProgress } from "@frankjia9052/shared-ui"

type Props = {
    ariaLable: string,
    value: number,
    name: string,
}
export const SkillItem = ({
    ariaLable,
    value,
    name,
}:Props) => {
    return(
        <div>
            <div
                className="flex justify-between"
            >
                <span>
                    {name}
                </span>
                <span>
                    {value}%
                </span>
            </div>
            <FrankProgress
                ariaLabel={ariaLable}
                value={value}
                size="md"
            />
        </div>
    )
}