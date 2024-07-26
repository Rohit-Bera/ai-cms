import { Access } from "payload/config";

export const isAdminOrHasSiteAccess =
  (SiteID: string = "site"): Access =>
  ({ req: { user } }) => {
    // if valid user then logged in
    if (user) {
      // if role is admin , can access every thing.
      if (user.role?.includes("admin")) return true;

      // if user has role of editor then can access the site.
      // returns a constraint of those site this user can access and edit them or
      // returns if no site assigned.

      // If user has role of 'editor' and has access to a site,
      // return a query constraint to restrict the documents this user can edit
      // to only those that are assigned to a site, or have no site assigned
      if (user.role?.includes("editor")) {
        // Otherwise, we can restrict it based on the `site` field
        return {
          or: [
            {
              [SiteID]: {
                in: user.sites,
              },
            },
            {
              [SiteID]: {
                exists: false,
              },
            },
          ],
        };
      }
    }
    // reject if not logged in. and returns nothing.
    return false;
  };
