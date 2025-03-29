import { Tab, Tabs } from "@heroui/react";

export function FrankTabs() {
    return (
        <div>
            <Tabs
                aria-label="Options"
                classNames={{
                    tabList: "p-0",
                    tabWrapper: "rounded-none"
                }}
                radius="sm"
            >
                <Tab
                    key="photos"
                    title="Photos"                    
                >
                    {/* <div>Photos</div> */}
                </Tab>
                <Tab
                    key="music"
                    title="Music"
                >
                    {/* <div>Music</div> */}
                </Tab>
                <Tab
                    key="Videos"
                    title="Videos"
                >
                    {/* <div>Videos</div> */}
                </Tab>
            </Tabs>
        </div>
    )
}

export default FrankTabs;
