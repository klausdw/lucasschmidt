import { Card, CardContent } from "@/components/ui/card";

export default function Sponsors() {
  const sponsors = [
    { name: "golfrange", logo: "/assets/golfrange.png" },
    { name: "wannsee", logo: "/assets/wannsee.png" },
  ];

  return (
    <section
      id="sponsors"
      className="py-16 scroll-mt-8 bg-green-100 bg-header bg-no-repeat bg-cover bg-center bg-fixed"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
          Sponsoren
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sponsors.map((sponsor, index) => (
            <Card key={index} className="text-center pt-6 w-2/3 mx-auto">
              <CardContent>
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-32 h-32 object-contain mx-auto"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
