import { User } from '../entities/User'


const dto = (data: User[]) => {

    const newList = data.map((value) => {
   
        var newObject = {
            Name: value.name,
            Email: value.email,
            Created_at: value.created_at,
            Updated_at: value.updated_at,
            Admin: value.admin
        };
        
        return newObject;
    })
    return newList;
}

export { dto };