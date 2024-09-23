'use server'

import { ClientActionParams } from "../actionInterfaces";
import { connectToDb } from "../database"
import ClientModel from "../database/models/client.model";

// creating client

export const createClient = async (Client: ClientActionParams) => {
    try {
        await connectToDb();
        const newUser = await ClientModel.create(Client)
        return JSON.parse(JSON.stringify(newUser))
    }
    catch (err) {
        console.log('the error is:', err)
    }

}