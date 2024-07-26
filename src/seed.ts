import { Payload } from "payload";
import { User} from "./payload-types";

export const Seed = async(Payload: Payload) : Promise<void> => {
    await Payload.create<User>({
        collection: 'users',
        data: {
            email:'admin@payloadcms.com',
            password:'admin@123',
            firstName:'admin',
            lastName:'payload',
            role: ['admin']
        }
    })
}