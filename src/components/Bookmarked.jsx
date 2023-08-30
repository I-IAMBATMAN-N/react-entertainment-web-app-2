export default function Bookmarked({ data, setData, ItemProps, searchWord }) {
  //
  function handleBookmark(object) {
    setData(
      data.map((item) =>
        object.title === item.title
          ? { ...item, isBookmarked: !item.isBookmarked }
          : { ...item }
      )
    );
  }
  return (
    <div className="container bookmarked active">
      <section className="section trending">
        <h2 className="heading-large">Bookmarked Movies</h2>
        <div className="recommended-container">
          {/* ------------------------ COMPONENTS ------------------------ */}
          <Movies />
          {/* ------------------------     X      ------------------------ */}
        </div>
      </section>
      <section className="section trending">
        <h2 className="heading-large">Bookmarked TV Series</h2>
        <div className="recommended-container">
          {/* ------------------------ COMPONENTS ------------------------ */}
          <TvSeries />
          {/* ------------------------     X      ------------------------ */}
        </div>
      </section>
    </div>
  );
  function Movies() {
    return data
      .filter(
        (item) =>
          item.category === "Movie" &&
          item.isBookmarked &&
          item.title.toLowerCase().search(searchWord) >= 0
      )
      .map((item) => (
        <figure key={Math.random()} className="movie-item sm">
          <div className="bookmark" onClick={() => handleBookmark(item)}>
            <ion-icon
              class={`bookmark--icon ${item.isBookmarked ? "hidden" : ""}`}
              name="bookmark-outline"
            ></ion-icon>
            <ion-icon
              class={`bookmark--icon ${item.isBookmarked ? "" : "hidden"}`}
              name="bookmark"
            ></ion-icon>
          </div>
          <img
            src={item.thumbnail.regular.large}
            alt=""
            className="movie-img"
          />
          <figcaption>
            <ul className="movie-properties">
              {/* ------------------------ COMPONENTS ------------------------ */}
              <ItemProps item={item} />
              {/* ------------------------     X      ------------------------ */}
            </ul>
            <h3 className="heading-medium">{item.title}</h3>
          </figcaption>
        </figure>
      ));
  }
  function TvSeries() {
    return data
      .filter(
        (item) =>
          item.category === "TV Series" &&
          item.isBookmarked &&
          item.title.toLowerCase().search(searchWord) >= 0
      )
      .map((item) => (
        <figure key={Math.random()} className="movie-item sm">
          <div className="bookmark">
            <ion-icon class="bookmark--icon" name="bookmark-outline"></ion-icon>
            <ion-icon class="bookmark--icon hidden" name="bookmark"></ion-icon>
          </div>
          <img
            src={item.thumbnail.regular.large}
            alt=""
            className="movie-img"
          />
          <figcaption>
            <ul className="movie-properties">
              {/* ------------------------ COMPONENTS ------------------------ */}
              <ItemProps item={item} />
              {/* ------------------------     X      ------------------------ */}
            </ul>
            <h3 className="heading-medium">{item.title}</h3>
          </figcaption>
        </figure>
      ));
  }
}
