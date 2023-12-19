export const User = (props) => {
    return(
      <div className="user">
        <h3>{props.name}</h3>
        <h4>{props.email}</h4>
        <h4>{props.about}</h4>
      </div>
    );
  }