export interface PostProps{
    userId:number;
    id:number;
    title:string;
    body:string;

}


export interface UserProps{
    id: number;
    name: string;
    email:string;
    address:{
        street:string;
        suite:string;
        city:string;
        zipcode:string;
        geo:{
            lat: string;
            lng:string
        }
    },
    phone:number;
    website:string;
    company:{
        name:string;
        catchPhrase:string;
        bs:string;
    }

}