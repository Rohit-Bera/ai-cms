import { Access } from "payload/config";

export const isAdminOrHasSiteAccessOrPublished: Access = ({req : {user}}) => {

    // if the user is logged in.
    if(user){
        // if the user is admin , can access all the pages.
        if(user.role?.includes('admin')) return true

        // if the user is not admin , can access only those pages
        // which it has access to the sites.
        // return a query constraint to restrict the documents this user can edit.
        // returns those sites , which the user is assigned or can access to the sites.
        if(user.role?.includes('editor')){
            return {
                or:[
                    {
                        site:{
                            in: user.sites
                        }
                    },
                    {
                        site:{
                            exists: false
                        }
                    }
                ]
            }
        }

    }

    // non logged in users can only see published docs
    return{
        _status:{
            equals: 'published'
        }
    }
}