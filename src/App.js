import "./styles.css";
import Header from "./components/header.js";
import Section from "./components/section.js";
import ListItem from "./components/Listitem";

const gameListData = [
  {
    url: "https://www.twitch.tv/directory/category/dota-2",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/29595-144x192.jpg",
    alt: "Imagem do jogo Dota 2",
  },
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },

  {
    url: "https://www.twitch.tv/directory/category/counter-strike",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/32399-144x192.jpg",
    alt: "Imagem do jogo CS2",
  },

  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft",
  },
];

const streamersListData = [
  {
    url: "https://www.twitch.tv/bunnyzila",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/1043f94a-1cba-407e-811e-7f374c1ad2b5-profile_image-70x70.png",
    alt: "Imagem <datalist></datalist> Heloisa",
  },

  {
    url: "https://www.twitch.tv/baiano",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/05396d4d-7af0-4b9b-8c7e-c03563b4d448-profile_image-70x70.png",
    alt: "Imagem do Baiano",
  },

  {
    url: "https://www.twitch.tv/mylonzete",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/mylonzete-profile_image-db23c2eb385eab8c-70x70.jpeg",
    alt: "Imagem do mylonzete",
  },
  {
    url: "https://www.twitch.tv/yoda",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/e5e89aba-723b-4ba1-852c-d8fba19b1da1-profile_image-70x70.png",
    alt: "Imagem do Yoda",
  },
];

const socialListData = [
  {
    url: "https://instagram.com/o_schiavon",
    imageUrl: "/assets/insta.svg",
    alt: "Instagram do João",
  },
  {
    url: "https://www.youtube.com/@joaoschiavon1014",
    imageUrl: "/assets/youtube.svg",
    alt: "Instagram do João",
  },
  {
    url: "https://www.linkedin.com/in/jo%C3%A3o-lucas-schiavon-b0582519a/",
    imageUrl: "/assets/linkedin.svg",
    alt: "Instagram do João",
  },
];

export default function App() {
  return (
    <div className="App">
      {/*Importar o Header aqui*/}
      <Header />
      <h1 id="nome">João L. Schiavon</h1>
      <h2 id="nome">Desenvolvedor</h2>
      {/*Importar o Main aqui*/}
      <main>
        <Section title="Meus Jogos" subtitle="Os games que mais gosto de jogar">
          {gameListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
        <Section
          title="Canais e Streamers"
          subtitle="Os streamers que mais gosto de assistir"
        >
          {streamersListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
        <Section
          title="Minhas Redes Sociais"
          subtitle="Onde você pode me encontrar"
        >
          {socialListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
}
