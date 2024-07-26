import { Access } from "payload/config";
import { User } from "payload/dist/auth";
import { FieldAccess } from "payload/types";

export const isAdminOrSelf : Access = ({req : {user} }) => {

    // need to be login
    if(user){
        // if user is admin can access everything.
        if(user?.role.includes('admin')){
            return true;
        }

        // if other than admin has only access to the themselves
        return {
            id: {
                equals: user.id
            }
        }
    }

    // reject every one.
    return false;
}

export const isAdminOrSelfFieldLevel : FieldAccess<{id: string} , unknown , User> = ({req : { user }}) => {
    // need to be login
    if(user){
        console.log('user :',user);
        // if user is admin can access everything.
        if(user?.role.includes('admin')){
            return Boolean(user?.role.includes('admin'));
        }

        // if other than admin has only access to the themselves
        return Boolean({
            id: {
                equals: user.id
            }

        })
    }

    // reject every one.
    // this should return a Boolean
    return Boolean(false);
}