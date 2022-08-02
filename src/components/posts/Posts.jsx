import Post from "../post/Post";
import "./posts.css";
import img1 from "../../images/react-1.jpg";
import img2 from "../../images/imedz123.jpg";


export default function Posts({ img, }) {
  return (
    <>
      <div className="leftPosts">
        <Post
          imgURL={img1}
          category="lifestyle"
          postID="M1"
          date="01.08.2022"
          title="Pierwszy post"
          desc="Miałem dziesięć lat Gdy usłyszał o nim świat W mej piwnicy był nasz klub
          Kumpel radio zniósł Usłyszałem blue suede shoes I nie mogłem w nocy spać
          Wiatr odnowy wiał (wujek Józek zmarł) Darowano reszty kar Znów się można było śmiać
          W kawiarniany gwar Jak tornado jazz się wdarł I ja też chciałem grać
          Ojciec, bóg wie gdzie Martenowski stawiał piec Mnie paznokieć z palca zszedł
          Z gryfu został wiór Grałem milion różnych bzdur I poznałem co to sex" />
      </div>
      <div className="middle"></div>
      <div className="rightPosts">
        <Post
          imgURL={img2}
          category="lifestyle"
          postID="K1"
          date="01.08.2022"
          title="Pierwszy post"
          desc="Mój stary to fanatyk wędkarstwa. Pół mieszkania zajebane wędkami, najgorzej. Średnio raz w miesiącu ktoś wdepnie w leżący na ziemi haczyk czy kotwicę i trzeba wyciągać w szpitalu, bo mają zadziory na końcu. W swoim dwudziestodwuletnim życiu już z 10 razy byłem na takim zabiegu. Tydzień temu poszedłem na jakieś losowe badania, to baba z recepcji jak mnie tylko zobaczyła, to kazała buta ściągać xD, bo myślała, że znowu hak w nodze." />
      </div>
    </>
  );
}
