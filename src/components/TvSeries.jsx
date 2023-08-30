//
export default function TvSeries({ data, setData, ItemProps, searchWord }) {
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
    <div className="container tv-shows active">
      <section className="section trending">
        <h2 className="heading-large">TV Shows</h2>
        <div className="recommended-container">
          {/* ------------------------ COMPONENTS ------------------------ */}
          <TvSeriesItems />
          {/* ------------------------     X      ------------------------ */}
        </div>
      </section>
    </div>
  );

  function TvSeriesItems() {
    return data
      .filter(
        (item) =>
          item.category === "TV Series" &&
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
}
