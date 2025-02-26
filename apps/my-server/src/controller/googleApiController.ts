import { Request, Response } from "express";

const autoComplete = async (req: Request, res: Response) => {
    const query = req.query.input;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&types=address&components=country:ca&key=${process.env.GOOGLE_API_KEY}`
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.status !== "OK") {
            throw new Error(data.error_message);
        }
        return res.json(data.predictions);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
export {
    autoComplete
}