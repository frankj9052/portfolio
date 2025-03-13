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

// type AddressAutoCompletePredictionReturnType = {
//     key: string | undefined,
//     title: string | undefined,
//     address: string | undefined,
//     city: string | undefined,
//     province: string | undefined,
//     country: string | undefined,
// }
// export async function addressAutoCompletePrediction({ address }: { address: string }): Promise<ActionResult<AddressAutoCompletePredictionReturnType[]>> {

//     if (!address && address.length < 1) {
//         return { status: 'success', data: [] };
//     }

//     const url = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';

//     try {
//         const response = await fetch(`${url}?input=${address}&types=geocode&key=${process.env.GOOGLE_MAPS_API_KEY}&input=${address}&components=country:US|country:CA`);

//         const result = await response.json()

//         if (result.error_message && result.error_message.length > 0) {
//             throw new Error(result.error_message)
//         }

//         if (result.predictions) {
//             const { predictions } = result;
//             if (predictions) {
//                 const predictionResult: AddressAutoCompletePredictionReturnType[] = predictions.map((item: any) => {

//                     const { terms } = item;

//                     const [country, province, city] = terms.reverse()
//                     return {
//                         key: item?.place_id,
//                         title: item?.description,
//                         address: item?.structured_formatting.main_text,
//                         city: city?.value,
//                         province: province?.value,
//                         country: country?.value,
//                     }

//                 })
//                 return { status: 'success', data: predictionResult }
//             } else {
//                 return { status: 'success', data: [] }
//             }
//         }
//         else {
//             return { status: 'success', data: [] }
//         }
//     } catch (error) {        
//         if (error instanceof Error) {
//             console.error('Address autoComplete prediction failed', error.message);
//             return { status: 'error', error: error.message }
//         } else {
//             console.error('Address autoComplete prediction failed', error);
//             return { status: 'error', error: 'Unknown error' }
//         }
//     }
// };