import Prompt from "@models/Prompt";
import { connectToDb } from "@utils/database";

export const GET = async (req) => {
    try {
        await connectToDb()
        const prompts = await Prompt.find({})
                                    .populate('creator')
        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (err) {
        return new Response('Failed to fetch all prompts!', { status: 500 })
    }
}
