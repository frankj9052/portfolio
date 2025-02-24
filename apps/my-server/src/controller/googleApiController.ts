import { Request, Response } from "express";

const GOOGLE_API_KEY = 'AIzaSyAkJzQN2ya1n0Dd77ExG8i4nS8wmWUOhss'
const autoComplete = async (req:Request, res:Response) => {
    const query = req.query.input;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&types=address&components=country:ca&key=${GOOGLE_API_KEY}`
    const response = await fetch(url);  
    const data = await response.json();  
    console.log("response check ===> ", data);
    res.json(data);
}
export {
    autoComplete
}