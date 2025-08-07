import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Clock, Leaf, Utensils } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative h-[80vh] max-h-[800px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10">
            <Image
              src={"/hero.jpg"}
              alt="hero image"
              fill
              className="object-cover"
            />
            <div className="container relative flex flex-col items-center justify-center h-full z-20 text-start text-white text-2xl mx-4 px-12">
              <h1 className="text-3xl font-bold">Order food from the widest range of restaurants.</h1>
              <br />
              <span className="text-3xl text-green-500">Wider Range bigger choices, </span> Hurry Up...
              <p className="text-xl">Be our happy customer, By having our offer and testy food through our Foodyy.com</p>
              <div className="flex items-center gap-4">
                <Button className="mt-4 bg-green-400 hover:bg-green-600 text-white">
                  <Link href={"/menu"}>View Menu</Link>
                </Button>
                <Button className="mt-4 bg-green-400 hover:bg-green-600 text-white">
                  <Link href={"/reservation"}>Make Reservation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16 bg-secondary/10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="flex gap-5 items-center justify-center p-4 rounded-lg bg-background">
              <Clock className="h-10 w-10 text-primary"/>
              <h3 className="text-xl font-bold">Daily services</h3>
              <p className="text-muted-foreground">For you - 24 hrs</p>

            </div>

             <div className="flex gap-5 items-center justify-center p-4 rounded-lg bg-background">
              <Utensils className="h-10 w-10 text-primary"/>
              <h3 className="text-xl font-bold">Master Chef</h3>
              <p className="text-muted-foreground">For you - 50+ dishes</p>

            </div>

             <div className="flex gap-5 items-center justify-center p-4 rounded-lg bg-background">
              <Leaf className="h-10 w-10 text-primary"/>
              <h3 className="text-xl font-bold">Fresh Ingridents</h3>
              <p className="text-muted-foreground">For you - Locally organic product </p>

            </div>

          </div>

        </div>

        </section>

        {/* Menu priview section */}


        {/* testimonial section */}
        <Testimonials />

        {/* cta section */}
        <Cta />
      </main>
      <Footer/>
    </div>
  );
};

export default page;
