"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const DeleteMneuAction = async(id: string) =>{
    try {
        // Delete menuItem from the database
        await prisma.menuItem.delete({
            where: {
                id: id,
            },  
        })

    }catch(error:unknown){
        throw new Error("Failed to delete menu item");

    }

    revalidatePath("/admin/menu");
    redirect("/admin/menu");

}