import DeleteMenuButton from "@/components/DeleteMenuButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UpdateMenuButton from "@/components/UpdateMenuButton";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";

const page = async () => {
  const menuItems = await prisma.menuItem.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="container mx-auto px-2 sm:px-2 my-4 w-full">
      <div className="flex justify-between">
        {" "}
        <h1 className="font-bold text-xl sm:text-2xl">Menu</h1>
        <Link href={"/admin/menu/create"} className="font-bold px-4">
          <Button
            variant={"link"}
            className="text-blue-500 hover:text-blue-700"
          >
            Add Menu
          </Button>
        </Link>
      </div>
      <Card className="my-2">
        <CardHeader>
          <CardTitle>Current Menu</CardTitle>
          <CardContent className="overflow-x-auto p-0">
            <Table className="min-w-[600px] w-full">
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead className="whitespace-nowrap">Name</TableHead>
                  <TableHead className="whitespace-nowrap">
                    Description
                  </TableHead>
                  <TableHead className="whitespace-nowrap">Category</TableHead>
                  <TableHead className="whitespace-nowrap">Price</TableHead>
                  <TableHead className="text-right whitespace-nowrap">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {menuItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell className="font-medium">
                      {item.description}
                    </TableCell>
                    <TableCell className="font-medium">
                      {item.category}
                    </TableCell>
                    <TableCell className="font-medium">{item.price}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <UpdateMenuButton item={item} />
                        <DeleteMenuButton id={item.id} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default page;
