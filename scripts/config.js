// Made by yours truly, Peter

/* Date format:

    MM DD, YYYY 00:00

    Hvis man vil kan man også sætte sekunder på hvis det skal være mere præcist

    MM DD, YYYY 00:00:00

*/


const tournamentStartDelayMinutes = 5; // Hvor mange minutter "Starter NU!" skal stå når turneringen når 0 i countdownen

const tournaments = [
  {
    name: "Sten, Saks\nog Papir",
    imagePath: "./assets/images/StenSaksPapir.png",
    date: "January 18, 2026 18:15",
  },
  {
    name: "Rocket League\n2v2",
    imagePath: "./assets/images/RocketLeague.png",
    date: "January 18, 2026 19:30",
  },
  {
    name: "League of Legends\n2v2",
    imagePath: "./assets/images/LeagueOfLegends.png",
    date: "January 18, 2026 21:00",
  },
  {
    name: "Counter Strike 2\n2v2",
    imagePath: "./assets/images/MorgenMad.png",
    date: "January 18, 2026 22:30",
  },
  {
    name: "Morgenmad\n\n",
    imagePath: "./assets/images/CSGO.png",
    date: "January 19, 2026 10:00",
  },
  {
    name: "Ovwérwatch\n3v3",
    imagePath: "./assets/images/Overwatch.png",
    date: "January 19, 2026 11:00",
  },
  {
    name: "UNO\n\n",
    imagePath: "./assets/images/UNO.png",
    date: "January 19, 2026 12:30",
  },
  {
    name: "Team Fight\nTactics",
    imagePath: "./assets/images/TFT.png",
    date: "January 19, 2026 13:15",
  },
  {
    name: "Valorant\n2v2",
    imagePath: "./assets/images/Valorant.png",
    date: "January 19, 2026 14:30",
  },
  {
    name: "Super Smash Bros.\nUltimate",
    imagePath: "./assets/images/SmashBros.png",
    date: "January 19, 2026 15:45",
  },
  {
    name: "Skak\n\n",
    imagePath: "./assets/images/Skak.png", 
    date: "January 19, 2026 17:00",
  },
  {
    name: "League of Legends\n5v5",
    imagePath: "./assets/images/LeagueOfLegends.png",
    date: "January 19, 2026 18:00",
  },
  {
    name: "Aftensmad\n\n",
    imagePath: "./assets/images/Aftensmad.png",
    date: "January 19, 2026 20:00",
  },
  {
    name: "Mario Kart 8\n Deluxe",
    imagePath: "./assets/images/MarioKart.png",
    date: "January 19, 2026 21:00",
  },
  {
    name: "Geoguesser\n\n",
    imagePath: "./assets/images/Geoguessr.png",
    date: "January 19, 2026 22:00",
  },
  {
    name: "Werewolf\n[Ingen præmie]",
    imagePath: "./assets/images/WereWolf.png", 
    date: "January 19, 2026 23:00",
  },
  {
    name: "Morgenmad\n\n",
    imagePath: "./assets/images/CSGO.png",
    date: "January 20, 2026 10:00",
  },
];

export { tournaments, tournamentStartDelayMinutes};
