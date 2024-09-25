export default function About() {
  return (
    <section id="about" className="py-16 scroll-mt-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
          Um mich
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <p className="text-gray-700 leading-relaxed">
              Ich bin der Sohn eines leidenschaftlichen PGA Trainers, André
              Putzar. Golf ist ein Teil meines Lebens, seit ich denken kann.
              <br /> Golf ist für mich mehr als ein Spiel – es ist eine
              Leidenschaft und eine Herausforderung, die mich formt und
              antreibt. Der Golfplatz ist mein zweites Zuhause.
              <br /> Mit der Unterstützung meiner Familie und meinem Vater an
              meiner Seite trainiere ich weiter, um meinen Traum zu
              verwirklichen: eines Tages in der PGA zu spielen, mit meinem Vater
              als meinem ewigen Caddy.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3 justify-items-center">
              <img
                className="h-52 w-full object-cover rounded-sm"
                src="/assets/kind.jpg"
                alt="with daddy driving range"
              />
              <img
                className="h-52 w-full object-cover rounded-sm"
                src="/assets/kind2.jpg"
                alt="driving range"
              />
              <img
                className="h-52 w-full object-cover rounded-sm"
                src="/assets/kind3.png"
                alt="course"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/assets/lucas.jpg"
              alt="Lucas Schmidt"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
