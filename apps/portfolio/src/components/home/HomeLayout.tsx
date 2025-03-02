import { HomeImage } from "./homeLayout/HomeImage"
import { Info } from "./homeLayout/Info"
import { MediaIcons } from "./homeLayout/MediaIcons"

export const HomeLayout = () => {
    return(
        <div
            className="flex justify-between"
        >
            <MediaIcons/>
            <Info/>
            <HomeImage/>
        </div>
    )
}