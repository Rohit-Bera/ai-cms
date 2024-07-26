import { User } from "payload/dist/auth";
import { Access , FieldAccess } from "payload/types";

export const isAdmin: Access<any, User> = ({ req : { user } }) => {
    // returns true or false baased on the role of the admin 
    // console.log('user logged in :',user);

    return Boolean(user?.role?.includes('admin'));
}

export const isAdminFieldLevel : FieldAccess<{id: string} , unknown , User> = ({req : { user }}) => {
    // returns true or false baased on the role of the admin 
    // console.log('field access user : ', user);

    return Boolean(user?.role?.includes('admin'));
}