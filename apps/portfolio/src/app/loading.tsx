'use client';
import { FrankLoadingSignature } from "@frankjia9052/shared-ui";
import { useEffect } from "react";

const Loading = () => {
    useEffect(() => {
        console.log("loading page...")
    }, [])
    return (
        <div
            className="absolute top-0 left-0 right-0 bottom-0 z-[999] bg-white"
        >
            <div
                className="flex items-center justify-center h-full"
            >
                {/* 加入 Loading 文字 */}
                <p
                    className="text-lg font-semibold"
                >
                    Loading...
                </p>
                <FrankLoadingSignature />
                
            </div>
        </div>
    )
}

export default Loading;