import { Access } from "payload/config";
import { User } from "payload/dist/auth";

export const isLoggedIn : Access<any , User> = ({ req: { user } }) => {

    // return true is user is logged in or not.
    return Boolean(user);
}