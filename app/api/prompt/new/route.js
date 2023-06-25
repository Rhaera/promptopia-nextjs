import Prompt from "@models/Prompt";
import { connectToDb } from "@utils/database";

export const POST = async (req) => {
    const { userId, prompt, tag } = await req.json()
    try {
        await connectToDb()
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })
        await newPrompt.save()
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (err) {
        return new Response("Failed to create a new prompt!", { status: 500 })
    }
}