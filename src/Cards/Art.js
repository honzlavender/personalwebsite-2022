import "../CSS/Cards.css";
import Cards from "./Cards";
import art from "../Graphics/Home/art.png";

/**ZHANA OPEN SMARTER */
import date from "../Graphics/Artist/Zhana/date.jpg";
import dnaCell from "../Graphics/Artist/Zhana/dnaCell.gif";
import africaMap from "../Graphics/Artist/Zhana/africaMap.gif";
import drd4 from "../Graphics/Artist/Zhana/drd4.jpg";
import earthstack from "../Graphics/Artist/Zhana/earthstack.gif";
import Exposome from "../Graphics/Artist/Zhana/Exposome.gif";
import genetic from "../Graphics/Artist/Zhana/genetic.gif";
import glassJar from "../Graphics/Artist/Zhana/glassJar.gif";
import orchidDandelion from "../Graphics/Artist/Zhana/orchidDandelion.jpg";
import sexIntimacy from "../Graphics/Artist/Zhana/sexIntimacy.jpg";
import sexIntimacyGif from "../Graphics/Artist/Zhana/sexIntimacyGif.gif";
import spermEgg from "../Graphics/Artist/Zhana/spermEgg.gif";
import tug from "../Graphics/Artist/Zhana/tug.jpg";

/**KENNETH PLAY */
import nsfw from "../Graphics/Artist/KennethPlay/nsfw.jpg";
import circuitTraining from "../Graphics/Artist/KennethPlay/circuitTraining.jpg";
import clitPenis from "../Graphics/Artist/KennethPlay/clitPenis.jpg";
import flirtPods from "../Graphics/Artist/KennethPlay/flirtPods.jpg";
import pleasurePalm from "../Graphics/Artist/KennethPlay/pleasurePalm.gif";
import sfwFinger from "../Graphics/Artist/KennethPlay/sfwFinger.jpg";
import playbook from "../Graphics/Artist/KennethPlay/playbook.gif";
import vulvas from "../Graphics/Artist/KennethPlay/vulvas.jpg";
import hitachi from "../Graphics/Artist/KennethPlay/hitachi.png";
import label from "../Graphics/Artist/KennethPlay/label.jpg";
import blogDesign from "../Graphics/Artist/KennethPlay/blogDesign.png";
import drawOnTop from "../Graphics/Artist/KennethPlay/drawOnTop.png";
import mensHealth from "../Graphics/Artist/KennethPlay/mensHealth.png";

/**PORTRAITS */
import dannyLovisa from "../Graphics/Artist/Portraits/dannyLovisa.pdf";
import dustin from "../Graphics/Artist/Portraits/dustin.jpg";
import fletcherJane from "../Graphics/Artist/Portraits/fletcherJane.jpg";
import girls from "../Graphics/Artist/Portraits/girls.jpg";
import Heather from "../Graphics/Artist/Portraits/Heather.jpg";
import Jorge from "../Graphics/Artist/Portraits/Jorge.jpg";
import Kevin from "../Graphics/Artist/Portraits/Kevin.jpg";
import nicoleBoris from "../Graphics/Artist/Portraits/nicoleBoris.jpg";
import noel from "../Graphics/Artist/Portraits/noel.jpg";
import billy from "../Graphics/Artist/Portraits/billy.png";
import robin from "../Graphics/Artist/Portraits/robin.jpg";
import Shons from "../Graphics/Artist/Portraits/Shons.jpg";

/**STORY BOARDS */
import hannah from "../Graphics/Artist/Stories/hannah.jpg";
import shons from "../Graphics/Artist/Stories/shons.jpg";
import smidge from "../Graphics/Artist/Stories/smidge.jpg";

function Art() {
  return (
    <div className="col-cards">
      <div className="row-blurb">
        <h6 class="blurb-art">
          I like to think of myself as a multi-media artist though I spend most
          of my time illustrating
        </h6>
        <img src={art} alt="selfie" class="artist" />
      </div>
      <div className="row-cards">
        <Cards
          cover={sexIntimacy}
          projectName="dr. zhana vrangalova"
          buttLabel="dr. zhana's open smarter course"
          pic1={date}
          pic2={dnaCell}
          pic3={africaMap}
          pic4={drd4}
          pic5={earthstack}
          pic6={Exposome}
          pic7={genetic}
          pic8={glassJar}
          pic9={orchidDandelion}
          pic10={sexIntimacyGif}
          pic11={spermEgg}
          pic12={tug}
          github="https://www.drzhana.com/open-smarter"
          description={`Illustrations, animations, and gifs created with and for Dr. Zhana Vrangalova. Her Open Smarter course explores ethical non-monogamy and non-traditional relationships backed by science and research. digital art created in procreate, 2021`}
        />
        <Cards
          cover={nsfw}
          projectName="kenneth play"
          buttLabel="kenneth play - NSFW"
          pic1={flirtPods}
          pic2={vulvas}
          pic3={clitPenis}
          pic4={pleasurePalm}
          pic5={playbook}
          pic6={mensHealth}
          pic7={circuitTraining}
          pic8={hitachi}
          pic9={label}
          pic10={drawOnTop}
          pic11={blogDesign}
          pic12={sfwFinger}
          github="https://kennethplay.com/"
          description={`a collection of illustrations for sex & pleasure educator, Kenneth Play. These range from graphics for blogs (the Kenneth Play Blog, Men’s Health, & Pornhub’s Sexual Wellness Center) & social media to anatomically correct how-to drawings for his book Beyond Pleasure, coming out spring 2022`}
        />
      </div>
      <div className="row-cards">
        <Cards
          // cover={nicoleBoris}
          cover={girls}
          // cover={dustin}
          projectName="custom portraits"
          buttLabel="get your own"
          pic1={girls}
          pic2={Shons}
          pic3={Jorge}
          pic4={nicoleBoris}
          pic5={dannyLovisa}
          pic6={noel}
          pic7={Heather}
          pic8={billy}
          pic9={dustin}
          pic10={Kevin}
          pic11={robin}
          pic12={fletcherJane}
          github="https://honz.bigcartel.com/"
          description={`An on going commission project where I recreate special memories for people.`}
        />
        <Cards
          cover={shons}
          projectName="storyboards"
          buttLabel="kenneth play - NSFW"
          pic1={hannah}
          pic2={smidge}
          pic3={shons}
          pic4=""
          pic5=""
          pic6=""
          pic7=""
          pic8=""
          pic9=""
          pic10=""
          pic11=""
          pic12=""
          github="https://kennethplay.com/"
          description={`Similar to the custom portraits, this project is where I bring memories to life in the form of a comic.`}
        />
      </div>
    </div>
  );
}

export default Art;
