//possibily add a home feed showing reviews?

export default function Dashboard() {
    return (
        <>
            <div class="input-field col s12">
          <input id="search" type="search"/>
          <label>Game Search</label>
          <span class="helper-text" data-error="wrong" data-success="right"></span>
          <button class="search-submit" type="submit">Search</button>
          </div>

        <div>
        <label>Review Title</label>
          <input id="search" type="search"/>
          <span class="helper-text" data-error="wrong" data-success="right">Review</span>
          <textarea></textarea>
          <button class="review-submit" type="submit">Submit</button>
        </div>



        </>


    )

}       