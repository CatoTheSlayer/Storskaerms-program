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
    date: "Marts 28, 2026 16:15",
  },
  {
    name: "Rocket League\n2v2",
    imagePath: "./assets/images/RocketLeague.png",
    date: "Marts 28, 2026 17:00",
  },
  {
    name: "Rainbow Six Siege X\n2v2",
    imagePath: "./assets/images/RainbowSixSiege.png",
    date: "Marts 28, 2026 18:30",
  },
  {
    name: "League of Legends\n2v2",
    imagePath: "./assets/images/LeagueOfLegends.png",
    date: "Marts 28, 2026 20:00",
  },
  {
    name: "MTG Commander\n [Ingen Præmie]",
    imagePath: "./assets/images/Magic.png",
    date: "Marts 28, 2026 22:00",
  },
  {
    name: "Morgenmad\n\n",
    imagePath: "./assets/images/Morgenmad.png",
    date: "Marts 29, 2026 10:00",
  },
  {
    name: "BAPBAP\n\n",
    imagePath: "./assets/images/BAPBAP.png",
    date: "Marts 29, 2026 12:00",
  },
  {
    name: "UNO\n\n",
    imagePath: "./assets/images/UNO.png",
    date: "Marts 29, 2026 13:30",
  },
  {
    name: "Valorant\n 2v2",
    imagePath: "./assets/images/Valorant.png",
    date: "Marts 29, 2026 15:00",
  },
  {
    name: "Super Smash Bros.\nUltimate",
    imagePath: "./assets/images/SmashBros.png",
    date: "Marts 29, 2026 17:00",
  },
  {
    name: "Skak\n\n",
    imagePath: "./assets/images/Skak.png", 
    date: "Marts 29, 2026 18:00",
  },
  {
    name: "YOMI Hustle\n [Uden Mods]",
    imagePath: "./assets/images/YOMI.png", 
    date: "Marts 29, 2026 19:00",
  },
  {
    name: "Aftensmad\n\n",
    imagePath: "./assets/images/Aftensmad.png",
    date: "Marts 29, 2026 20:00",
  },
  {
    name: "League of Legends\n5v5",
    imagePath: "./assets/images/LeagueOfLegends.png",
    date: "Marts 29, 2026 21:00",
  },
  {
    name: "Werewolf\n[Ingen præmie]",
    imagePath: "./assets/images/WereWolf.png", 
    date: "Marts 29, 2026 23:00",
  },
  {
    name: "Morgenmad\n\n",
    imagePath: "./assets/images/Morgenmad.png",
    date: "Marts 30, 2026 10:00",
  },
  {
    name: "Bad\nStarter",
    imagePath: "./assets/images/Bad.png",
    date: "Marts 30, 2026 11:30",
  },
  {
    name: "Bad\nSlutter",
    imagePath: "./assets/images/Bad.png",
    date: "Marts 30, 2026 13:30",
  },
  {
    name: "Team Fight\nTactics",
    imagePath: "./assets/images/TFT.png",
    date: "Marts 30, 2026 14:00",
  },
  {
    name: "Mario Kart 8\n Deluxe",
    imagePath: "./assets/images/MarioKart.png",
    date: "Marts 30, 2026 15:00",
  },
  {
    name: "FPS Chess\n[Normal Peices]",
    imagePath: "./assets/images/FPSChess.png",
    date: "Marts 30, 2026 16:00",
  },
  {
    name: "Overwatch\n5v5",
    imagePath: "./assets/images/Overwatch.png",
    date: "Marts 30, 2026 17:00",
  },
  {
    name: "Rounds\n[Uden Mods]",
    imagePath: "./assets/images/Rounds.png",
    date: "Marts 30, 2026 18:30",
  },
  {
    name: "Aftensmad\n\n",
    imagePath: "./assets/images/Aftensmad.png",
    date: "Marts 30, 2026 20:00",
  },
  {
    name: "Counter Strike 2\n2v2",
    imagePath: "./assets/images/CSGO.png",
    date: "Marts 30, 2026 21:00",
  },
  {
    name: "Geoguesser\n\n",
    imagePath: "./assets/images/Geoguessr.png",
    date: "Marts 30, 2026 22:00",
  },
  {
    name: "Morgenmad\n\n",
    imagePath: "./assets/images/Morgenmad.png",
    date: "Marts 31, 2026 10:00",
  },


];

export { tournaments, tournamentStartDelayMinutes};
