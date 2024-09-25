export default function Competitions() {
  const recentCompetitions = [
    {
      name: "Deutsche Meisterschaft AK16 Jungen 2024",
      link: "https://www.golf.de/sport/turnierkalender/dgv-turniere.html#/turniere/490002401278/ergebnisse/1",
      venue: "Westfälischer Golf-Club Gütersloh",
      date: "06.09.24",
      rank: "7",
      r1: "74",
      r2: "72",
      r3: "75",
      r4: "",
      points: "996.63",
    },
    {
      name: "German International Youth Trophy (GJG) 2024",
      link: "https://globaljuniorgolflive.com/gjgdb/2021liveScoringresponsive.php?tournamentid=251&gender=1&ak=0&",
      venue: "Semlin am See",
      date: "06.08.24",
      rank: "1",
      r1: "69",
      r2: "68",
      r3: "70",
      r4: "",
      points: "1237.68",
    },
    {
      name: "DM Vorausscheid AK16 Jungen 2024",
      link: "https://www.golf.de/sport/turnierkalender/dgv-turniere.html#/turniere/490002401237/ergebnisse/1",
      venue: "Golf-Club Neuhof",
      date: "26.07.24",
      rank: "5",
      r1: "74",
      r2: "72",
      r3: "",
      r4: "",
      points: "1298.75",
    },
    {
      name: "Hanseatic International Youth Open 2024",
      link: "https://www.hiyo-golf.de/_files/ugd/c5cbb0_b040f29889914710b833c84cf91de790.pdf",
      venue: "Gut Kaden (A+B)",
      date: "10.07.24",
      rank: "29",
      r1: "76",
      r2: "74",
      r3: "81",
      r4: "",
      points: "179.83",
    },
    {
      name: "DGV-GVBB 2. AK16/18 Jungen 2024",
      link: "https://www.gvbb.de/fileadmin/content/Dokumente/Ergebnisse_2024/E24_NEU_Ergebnisliste_AK14_16_18AK.pdf",
      venue: "Golfclub Dresden Elbflorenz",
      date: "11.05.24",
      rank: "5",
      r1: "73",
      r2: "77",
      r3: "",
      r4: "",
      points: "216.25",
    },
    {
      name: "Dresden Juniors International Boys 2024",
      link: "https://globaljuniorgolflive.com/gjgdb/2021liveScoringresponsive.php?tournamentid=256&gender=1&ak=0&",
      venue: "Golfclub Dresden Elbflorenz",
      date: "28.04.24",
      rank: "23",
      r1: "83",
      r2: "82",
      r3: "80",
      r4: "",
      points: "103.49",
    },
    {
      name: "DGV-GVBB 1. AK16/18 Jungen 2024",
      link: "https://www.gvbb.de/fileadmin/content/Dokumente/Ergebnisse_2024/1.Qualifikation_DV_in_der__2._Runde_-_Ergebnisse.PDF",
      venue: "Golfclub Dresden Elbflorenz",
      date: "28.04.24",
      rank: "30",
      r1: "80",
      r2: "79",
      r3: "",
      r4: "",
      points: "0.00",
    },
    {
      name: "GolfData24 Open (GJGT) 2024",
      link: "https://livescoring.golfdata24.com/leaderboard/018e9f4f-fbf5-21cf-e574-58e1feb3f40b#start",
      venue: "Berliner Golfclub Stolper Heide (West)",
      date: "03.04.24",
      rank: "8",
      r1: "75",
      r2: "77",
      r3: "77",
      r4: "75",
      points: "305.86",
    },
  ];

  return (
    <section
      id="competitions"
      className="py-16 scroll-mt-8 bg-green-100 bg-header bg-no-repeat bg-cover bg-center bg-fixed"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-green-800">
          Ranking
        </h2>
        <div className="bg-white shadow-md rounded p-4 max-w-2xl mx-auto mb-8">
          <div className="p-4 bg-gray-100 rounded-md">
            <h3 className="text-lg font-semibold mb-2">
              Ranking
              <a
                className="text-blue-500 hover:underline ml-2"
                href="https://www.europeangolfrankings.com/tours/German_jungen_u18/ranking"
                rel="noopener nofollow"
              >
                <i>German Jungen U18</i>
              </a>
            </h3>
            <div className="grid grid-cols-[160px_1fr] gap-2 text-sm">
              <p className="font-bold text-blue-500">Country:</p>
              <p>Germany</p>
              <p className="font-bold text-blue-500">Golf Club:</p>
              <p>Berlin Wannsee</p>
              <p className="font-bold text-blue-500">Age Group:</p>
              <p>U16</p>
              <p className="font-bold text-blue-500">Tournaments Played:</p>
              <p>8</p>
              <p className="font-bold text-blue-500">Ranking:</p>
              <p>27</p>
              <p className="font-bold text-blue-500">Points:</p>
              <p>4338.48</p>
              <p className="font-bold text-blue-500">Average Score:</p>
              <p>75.59</p>
              <p className="font-bold text-blue-500">Avg. to CR:</p>
              <p>73.89</p>
            </div>
          </div>
        </div>
        <h3 className="text-3xl font-semibold mb-2 text-center text-white">
          2024 Competitions
        </h3>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full hidden md:table">
            <thead className="bg-green-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Tournament</th>
                <th className="py-3 px-4 text-left">Venue</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">R1</th>
                <th className="py-3 px-4 text-left">R2</th>
                <th className="py-3 px-4 text-left">R3</th>
                <th className="py-3 px-4 text-left">R4</th>
                <th className="py-3 px-4 text-left">Points</th>
                <th className="py-3 px-4 text-left">Rank</th>
              </tr>
            </thead>
            <tbody>
              {recentCompetitions.map((competition, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-green-50" : "bg-white"}
                >
                  <td className="py-3 px-4 items-center">
                    <a
                      className="hover:text-blue-800"
                      href={competition.link}
                      rel="noopener nofollow"
                    >
                      {competition.name}
                    </a>
                  </td>
                  <td className="py-3 px-4 items-center">
                    {competition.venue}
                  </td>
                  <td className="py-3 px-4 items-center">{competition.date}</td>
                  <td className="py-3 px-4">{competition.r1}</td>
                  <td className="py-3 px-4">{competition.r2}</td>
                  <td className="py-3 px-4">{competition.r3}</td>
                  <td className="py-3 px-4">{competition.r4}</td>
                  <td className="py-3 px-4">{competition.points}</td>
                  <td className="py-3 px-4">{competition.rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="block border divide-y md:hidden">
            {recentCompetitions.map((competition, index) => (
              <div
                key={index}
                className={`p-4 ${
                  index % 2 === 0 ? "bg-green-50" : "bg-white"
                }`}
              >
                <p className="font-bold text-blue-500">
                  <a
                    href={competition.link}
                    className="hover:text-blue-800"
                    rel="noopener nofollow"
                  >
                    {competition.name}
                  </a>
                </p>
                <p>
                  <strong>Venue:</strong> {competition.venue}
                </p>
                <p>
                  <strong>Date:</strong> {competition.date}
                </p>
                <p>
                  <strong>R1:</strong> {competition.r1}
                </p>
                <p>
                  <strong>R2:</strong> {competition.r2}
                </p>
                <p>
                  <strong>R3:</strong> {competition.r3}
                </p>
                {competition.r4 && (
                  <p>
                    <strong>R4:</strong> {competition.r4}
                  </p>
                )}
                <p>
                  <strong>Points:</strong> {competition.points}
                </p>
                <p>
                  <strong>Rank:</strong> {competition.rank}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 px-4 pt-6 pb-4 bg-white w-full  md:w-3/4 mx-auto rounded-md">
          <a
            className="flex justify-center font-semibold hover:text-blue-600 px-4 text-center"
            href="https://globaljuniorgolflive.com/tournament/german-international-youth-trophy-germany/"
            rel="noopener nofollow"
          >
            German International Youth Trophy - Golfresort Semlin
            <br />
            Score: (-9) - 1. Platz
          </a>
          <div className="grid grid-flow-row md:grid-flow-col justify-center items-center">
            <img
              className="h-72 md:h-auto w-full object-cover"
              src="/assets/GIYT_Logo.png"
              alt="GIYT"
            />
            <img
              className="w-full h-80 object-contain"
              src="/assets/giyt-winner.jpg"
              alt="Gewinner GIYT 2024"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
