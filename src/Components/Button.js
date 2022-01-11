//import { RiGithubFill } from "react-icons/ri";
//extra button to maybe use for extra links i.e. heroku, github.io
//buttLabel={buttLabel}
//thisLink={thisLink}



function Button({thisLink, buttLabel}) {

    return(
        <button type="button" class="btn">
        <a
          href={thisLink}
          target="_blank"
          className="resume"
          rel="noreferrer"
          style={{textDecoration: 'none', color: '#bfd7e3'}}
        >
          {" "}
      {buttLabel}
        </a>
      </button>
    )
}

export default Button;