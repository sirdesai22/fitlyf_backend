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
    const prompt = `Extract the total calories, protein, carbs, and fat from the foods listed in ${journalEntry}. The foods may be individual ingredients or full meals. Summarize the meal in a short description.
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