function convertHexToRGBA(hex: string, opacity: number) {
    let r = 0, g = 0, b = 0;

    if (hex.startsWith("#")) {
        const hexWithoutHash = hex.slice(1);
        if (hexWithoutHash.length === 3) {
            // Expand shorthand hex (#RGB -> #RRGGBB)
            r = parseInt(hexWithoutHash[0] + hexWithoutHash[0], 16);
            g = parseInt(hexWithoutHash[1] + hexWithoutHash[1], 16);
            b = parseInt(hexWithoutHash[2] + hexWithoutHash[2], 16);
        } else if (hexWithoutHash.length === 6) {
            r = parseInt(hexWithoutHash.substring(0, 2), 16);
            g = parseInt(hexWithoutHash.substring(2, 4), 16);
            b = parseInt(hexWithoutHash.substring(4, 6), 16);
        }
    }

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export {
    convertHexToRGBA
}