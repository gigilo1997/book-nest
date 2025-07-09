import type { Actions } from "./$types";

interface RegisterReturnObject {
    success: boolean;
    errors: string[]
}

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();

        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        const returnObject: RegisterReturnObject = {
            success: true,
            errors: []
        }
        
        if (!email.length)
            returnObject.errors.push("Email is required");

        if (!password.length)
            returnObject.errors.push("Password is required");

        if (returnObject.errors.length) {
            returnObject.success = false;
            return returnObject;
        }

        return returnObject;
    }
}