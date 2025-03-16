import { Spacer } from "@heroui/react"
import { AvatarImage } from "./heroSectionLayout/AvatarImage"
import { Info } from "./heroSectionLayout/Info"
import { MediaIcons } from "./heroSectionLayout/MediaIcons"

export const HeroSectionLayout = () => {
    return (
        <div
            className=""
        >
            <div
                className="flex justify-between items-center lg:gap-[120px] md:gap-[60px] gap-[60px]"
            >
                <MediaIcons />
                <div
                    className="hidden md:block"
                >
                    <Info />
                </div>
                <div
                    className="mr-20 md:mr-0"
                >
                    <AvatarImage />
                </div>
            </div>

            <div
                className="md:hidden"
            >
                <Spacer y={5}/>
                <Info />
            </div>
        </div>
    )
}