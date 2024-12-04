import supabase from "./supabase"

export async function login (values){
    
const { data, error } = await supabase.auth.
signInWithPassword(values)

if(error) throw new Error (error.message);
console.log(data);
return data;
}