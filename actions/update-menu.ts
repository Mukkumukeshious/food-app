"use server"
import { prisma } from "@/lib/prisma";
import { error } from "console";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {promise, z} from "zod";

export type UpdateMenuFormState = {
    errors: {
        name?: string[];
        description?: string[];
        price?: string[];
        category?: string[];
        formError?: string[];
    }
}

const UpdateMenuSchema = z.object(
    {
        name: z.string().min(4, {message: "Name must be at least 4 characters long"}),
        description: z.string().min(7, {message: "Description must be at least 7 characters long"}),
        price: z.string().min(0.01, {message: "Price must be at least $0.01"}),
        category: z.string().min(1, {message: "Category is required"}),

    }
)
export const UpdateMenuAction = async (intitalState: UpdateMenuFormState, formData:FormData, id:string): Promise<UpdateMenuFormState> =>{
    const result = UpdateMenuSchema.safeParse({
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        price: formData.get("price") as string,
        category: formData.get("category") as string,
    })

    if(!result.success){
        return {
            errors :result.error.flatten().fieldErrors,
        }
    } 

    try {
        //save data to the database
        await prisma.menuItem.update({
            where: {
                id: id,
            },
            data:{
                name: result.data.name,
                description: result.data.description,
                price: parseFloat(result.data.price),
                category: result.data.category,
            }
        })

    }catch(error:unknown){
        if(error instanceof Error){
            return {
                errors: {
                    formError : [error.message]
                
                }
            }

        }else{
            return {
                errors: {
                    formError: ["An unexpected error occurred."]
                }
            }
            }


    }

    revalidatePath("/admin/menu")
    return {
        errors: {}
    }

}