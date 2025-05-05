"use server";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    title: "Refrigerator Cleaning",
    description: "Freshen up your fridge with a deep clean inside and out.",
    icon: (
      <img
        src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom4x2TuR5dAlomP7EFuMse5X0rqt64ZLkg13W9"
        alt="Refrigerator icon"
        width={56}
        height={56}
        className="text-primary"
      />
    ),
  },
  {
    title: "Oven Cleaning",
    description:
      "Choose between a quick self-clean cycle or a thorough deep clean for a like-new shine.",
    icon: (
      <img
        src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomKOzXep3UMQcNihESfqK8VPHRBylA7XtzCI2b"
        alt="Oven icon"
        width={56}
        height={56}
        className="text-primary"
      />
    ),
  },
  {
    title: "Steam Cleaning",
    description:
      "Remove dirt and allergens from mattresses and furniture ($50 per bed, $10 per piece of furniture).",
    icon: (
      <img
        src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomC9Xu2WmdS94e3Vt5PNnp8hM7jiI6fuBvsZxD"
        alt="Steam cleaning icon"
        width={56}
        height={56}
        className="text-primary"
      />
    ),
  },
  {
    title: "Patio Cleaning",
    description: "Keep your outdoor space neat and inviting.",
    icon: (
      <img
        src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomwjMi8gNQAijzTI0JpfGRs6WMerYKm743VoaB"
        alt="Patio cleaning icon"
        width={56}
        height={56}
        className="text-primary"
      />
    ),
  },
  {
    title: "Dishwashing",
    description: "Let us handle the dishes, so you don't have to.",
    icon: (
      <img
        src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlompKsg7OmIQG02vMEqiTUtkudb5jB1eo97yKV8"
        alt="Dishwashing icon"
        width={56}
        height={56}
        className="text-primary"
      />
    ),
  },
  {
    title: "Dog Waste Removal",
    description: "A cleaner yard for a happier home.",
    icon: (
      <img
        src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomnvVHiywNq3haW9IjyTl7dbP5tZX4mrvg1GQH"
        alt="Dog waste removal icon"
        width={56}
        height={56}
        className="text-primary"
      />
    ),
  },
  {
    title: "Watering Plants",
    description: "Keep your indoor plants thriving with regular care.",
    icon: (
      <img
        src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomZMaP1AqScL928NU7WORg5Vux30lHqPhzC6Ti"
        alt="Watering plants icon"
        width={56}
        height={56}
        className="text-primary"
      />
    ),
  },
];

const AdditionalServices = async () => (
  <div className="flex flex-col items-center justify-center py-16  bg-gray-100 px-4">
    <h2 className="text-3xl font-bold mb-2 text-accent text-center pb-16">
      Additional services for a deeper clean
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {services.map((service) => (
        <Card
          key={service.title}
          className="border-gray-100 overflow-hidden h-[280px] w-[180px]"
        >
          <CardContent>
            <div className="mb-4">{service.icon}</div>
            <CardTitle className="text-lg font-semibold text-secondary-foreground">
              {service.title}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {service.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default AdditionalServices;
