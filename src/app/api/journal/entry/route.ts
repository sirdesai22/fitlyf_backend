import { NextRequest, NextResponse } from "next/server"
import { GoogleGenAI, Type } from "@google/genai"

const gemini = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
})

async function getAIResponse(journalEntry: string) {
    console.log(journalEntry);
    if (!journalEntry) {
        return "Please provide a journal entry";
    }
    const prompt = `Generate sum of calories, protein, carbs, and fat of all the foods mentioned in ${journalEntry} and provide small info about mentioned meal using this JSON schema:

    Meal = {'calories': number, 'protein': number, 'carbs': number, 'fat': number, 'mealInfo': string}
    Return: Array<Meal>
    
    Remember the meal can me as small as 1 item or as large as 10 items so provide the above information for the meal.

    JUST PROVIDE JSON DATA!
    `;

    const response = await gemini.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
        config: {
            responseMimeType: 'application/json',
            responseSchema: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        'calories': {
                            type: Type.NUMBER,
                            description: 'Calories of the meal',
                            nullable: false,
                        },
                        'protein': {
                            type: Type.NUMBER,
                            description: 'Protein of the meal',
                            nullable: false,
                        },
                        'carbs': {
                            type: Type.NUMBER,
                            description: 'Carbs of the meal',
                            nullable: false,
                        },
                        'fat': {
                            type: Type.NUMBER,
                            description: 'Fat of the meal',
                            nullable: false,
                        },
                        'mealInfo': {
                            type: Type.STRING,
                            description: 'Info about the meal',
                            nullable: false,
                        },
                    },
                    required: ['calories', 'protein', 'carbs', 'fat', 'mealInfo'],
                },
            },
        },
    });
    return response.text;
}


export const POST = async (req: NextRequest) => {
    const data = await req.json();
    const result = await getAIResponse(data.journalEntry);
    return new NextResponse(result)
}