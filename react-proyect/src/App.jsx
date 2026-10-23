import MyButton from "./components/button/MyButton";
import Profile from "./components/profile/Profile";
import Login from "./components/login/Login";
import ShoppingList from "./components/shopping/ShoppingList";

export default function MyApp() {

  //codigo javaScript

  return (
    <div>
      <h1>
        Bienvenido a mi aplicación
      </h1>
      <MyButton />
      
      <Profile/>
      <Login/>
      <ShoppingList/>
      <MyButton />
    </div>
  );
}

//seccion de estilos