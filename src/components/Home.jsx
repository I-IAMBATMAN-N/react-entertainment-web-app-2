export default function Home({ data, setData }) {
  function handleBookmark(object) {
    setData(
      data.map((item) =>
        object.title === item.title
          ? { ...item, isBookmarked: !item.isBookmarked }
          : { ...item }
      )
    );
  }
  // console.log(TrendingItems());
  return (
    <div className="container home active">
      {/* ------------------------ COMPONENTS ------------------------ */}
      <TrendingSection />
      <RecommendedSection />
      {/* ------------------------     X      ------------------------ */}
    </div>
  );

  function TrendingSection() {
    return (
      <section className="section trending">
        <h2 className="heading-large">Trending</h2>
        <div className="trending-container">
          {/* ----------------------- COMPONENTS ----------------------- */}
          <TrendingItems />
          {/* -----------------------     X      ----------------------- */}
        </div>
      </section>
    );
    function TrendingItems() {
      return data
        .filter((item) => item.isTrending)
        .map((item) => (
          <figure key={Math.random()} className="movie-item">
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
              src={item.thumbnail.trending.large}
              alt=""
              className="movie-img background"
            />
            <figcaption>
              <ul className="movie-properties">
                {/* ------------------------ COMPONENTS ------------------------ */}
                <ItemProps item={item} />
                {/* ------------------------     X      ------------------------ */}
              </ul>
              <h3 className="heading-medium md">{item.title}</h3>
            </figcaption>
          </figure>
        ));
    }
  }

  function RecommendedSection() {
    return (
      <section className="section recommended">
        <h2 className="heading-large">Recommended for you</h2>
        <div className="recommended-container">
          {/* ----------------------- COMPONENTS ----------------------- */}
          <RecommendedItems />
          {/* -----------------------     X      ----------------------- */}
        </div>
      </section>
    );
    function RecommendedItems() {
      return data.map((item) => (
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
  function ItemProps({ item }) {
    const { year, category, rating } = item;
    const items = [year, category, rating];
    return items.map((item, index) => (
      <li key={Math.random()} className="movie-property">
        {index === 1 ? (
          <img
            src={
              item === "Movie"
                ? "/assets/icon-category-movie.svg"
                : "/assets/icon-category-tv.svg"
            }
            alt=""
          />
        ) : (
          <></>
        )}
        <p>{item}</p>
      </li>
    ));
  }
}
