import  "../../styles/Profile.css";
import Avatar from "../avatar/Avatar";

/*const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 250,
};

export default function Profile() {
  return (
    <>
      <h1 style={styles.h1}>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Foto de ' + user.name}
        style={styles.img}
      />
    </>
  );
}
const styles ={
  img:{
    width:user.imageSize,
    heigth:user.imageSize,
    border: 'solid 15px',
    borderColor: 'rgb(255, 0, 0)',
  },
  h1:{
    color:'rgb(90, 235, 7)',
  },
} 
*/ 
export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}