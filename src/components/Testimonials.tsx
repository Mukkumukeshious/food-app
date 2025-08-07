import { Star } from "lucide-react";
import React from "react";

const Testimonials = () => {
  const customerReviews = [
    {
      name: "Mukesh chaaudhary",
      review: "Amazing food and great service!",
      rating: 3,
    },
    {
      name: "yuji",
      review: "Loved the variety of dishes available.",
      rating: 4,
    },
    {
      name: "Alice Smith",
      review: "Quick delivery and delicious meals.",
      rating: 5,
    },
  ];
  return (
    <section className="container mx-auto px-4 py-16 bg-secondary/10">
      <div className="container">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Customer Review : </h1>
          <p className="text-muted-foreground">
            Satisfied customer and their thoughts for us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {customerReviews.map((item, index) => (
            <div className="p-6 bg-background rounded-lg shadow-md" key={index}>
              <div className="flex items-center gap-4 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < item.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <div className="text-muted-foreground mb-2">{item.review}</div>
              <div className="font-semibold text-lg">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
