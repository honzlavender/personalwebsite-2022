
// component to control optional links for cards 

  export function ResLink() {
      return (
        <a href="https://honz-reservation-frontend.herokuapp.com/dashboard?date=2022-02-15"
        target="_blank" rel="noreferrer"
        >deployed app</a>
      )
  }

  export function ResButton() {
    return (
      <button type="button" class="btn">
      <a
        href="https://honz-reservation-frontend.herokuapp.com/dashboard?date=2022-02-15"
        target="_blank"
        className="resume"
        rel="noreferrer"
        style={{textDecoration: 'none'}}
      >deployed app
      </a>
    </button>
    )
  }