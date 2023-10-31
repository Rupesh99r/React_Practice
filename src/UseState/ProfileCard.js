import data from "../Data.js";
const Article = ({ title, url, imgUrl }) => {
  return (
    <section className="profile-card">
      <img src={imgUrl} alt="Images" />
      <h3 className="title">{title || "Welcome to REact"}</h3>
      <a href={url || "https/:www.google.com"}>click here</a>
    </section>
  );
};
const ProfileCard = () => {
  return (
    <section className="post-container">
      {data.map((EachObj) => {
        const { id, url, title, thumbnailUrl } = EachObj;
        return (
          <Article key={id} title={title} url={thumbnailUrl} imgUrl={url} />
        );
      })}
    </section>
  );
};
export default ProfileCard;
