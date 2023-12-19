export const User = ({image = 'john.jpg', name, email, about}) => {
    return(
      <div className="member">
        <img src={require('../../Assets/Members/' + image)} alt={name}/>
        <h3>{name}</h3>
        <h4>{email}</h4>
        <h4>{about}</h4>
      </div>
    );
  }