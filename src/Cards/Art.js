import "../CSS/Cards.css";
import Cards from "./Cards";
import art from "../Graphics/Home/art.png"

/**ZHANA OPEN SMARTER */
import date from "../Graphics/Artist/Zhana/date.jpg"
import dnaCell from "../Graphics/Artist/Zhana/dnaCell.gif"
import africaMap from "../Graphics/Artist/Zhana/africaMap.gif"
import drd4 from "../Graphics/Artist/Zhana/drd4.jpg"
import earthstack from "../Graphics/Artist/Zhana/earthstack.gif"
import Exposome from "../Graphics/Artist/Zhana/Exposome.gif"
import genetic from "../Graphics/Artist/Zhana/genetic.gif"
import glassJar from "../Graphics/Artist/Zhana/glassJar.gif"
import orchidDandelion from "../Graphics/Artist/Zhana/orchidDandelion.jpg"
import sexIntimacy from "../Graphics/Artist/Zhana/sexIntimacy.jpg"
import sexIntimacyGif from "../Graphics/Artist/Zhana/sexIntimacyGif.gif"
import spermEgg from "../Graphics/Artist/Zhana/spermEgg.gif"
import tug from "../Graphics/Artist/Zhana/tug.jpg"

/**KENNETH PLAY */
import nsfw from "../Graphics/Artist/KennethPlay/nsfw.jpg"
import circuitTraining from "../Graphics/Artist/KennethPlay/circuitTraining.jpg"
import clitPenis from "../Graphics/Artist/KennethPlay/clitPenis.jpg"
import flirtPods from "../Graphics/Artist/KennethPlay/flirtPods.jpg"
import pleasurePalm from "../Graphics/Artist/KennethPlay/pleasurePalm.gif"
import sfwFinger from "../Graphics/Artist/KennethPlay/sfwFinger.jpg"
import playbook from "../Graphics/Artist/KennethPlay/playbook.gif"
import vulvas from "../Graphics/Artist/KennethPlay/vulvas.jpg"
import hitachi from "../Graphics/Artist/KennethPlay/hitachi.png"
import label from "../Graphics/Artist/KennethPlay/label.jpg"
import blogDesign from "../Graphics/Artist/KennethPlay/blogDesign.png"
import drawOnTop from "../Graphics/Artist/KennethPlay/drawOnTop.png"
import mensHealth from "../Graphics/Artist/KennethPlay/mensHealth.png"



function Art() {
  return (
    <div className="col-cards">
    <div className="row-blurb">
      <h6 class="blurb-art">
        Hi! I'm an illustrator and painter inspired by people and the stories attached to them 
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
  </div>
  );
}

export default Art;