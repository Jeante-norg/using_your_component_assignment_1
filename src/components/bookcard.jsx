// write the book component code here
const Bookcard = (props) => {
  return (
    <div style={styles.card}>
      {/* <h1>goodbye world.</h1> */}
      <img style={styles.img} src={props.image} alt="" />
      <div>
        <h2 style={styles.name}> {props.name}</h2>
        <p style={styles.details}>
          {props.genre}
          <br /> {props.author}
        </p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    borderRadius: "15px",
    border: "1px solid #ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "670px",
    // margin: "1rem",
    margin: "1rem auto",
    padding: "15px",
    gap: "25px",
    backgroundColor: "#FFE6C9",
    flexDirection: "row",
  },
  img: {
    borderRadius: "10px",
    height: "150px",
    width: "150px",
    objectFit: "cover",
  },
  name: {
    fontWeight: "bold",
    color: "#555",
  },
  details: {
    flexDirection: "column",
    color: "#555",
  },
};

export default Bookcard;
