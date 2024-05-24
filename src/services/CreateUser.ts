/**
 * For creating: name, email, password
 */

interface CreateUserData { 

}

export default function createUser({name = '', email: string, password:string}) {
    const user = { 
        name,
        email,
        password
    }

}