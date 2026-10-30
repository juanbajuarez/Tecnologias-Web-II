
import Profile from '../profile/Profile' 

export default function Gallery() {
  return (
    <div>
      <h1>Científicos Notables</h1>
      <Profile 
        person={{
          imageId: 'szV5sdG',
          name: 'Maria Skłodowska-Curie',
          profession: 'física y química',
          discovery: 'polonio (elemento químico)',
          awards: [
            'Premio Nobel de Física',
            'Premio Nobel de Química',
            'Medalla Davy',
            'Medalla Matteucci'
          ],
        }} 
      />
      <Profile 
        person={{
          imageId: 'YfeOqp2',
          name: 'Katsuko Saruhashi',
          profession: 'geoquímico',
          discovery: 'un método para medir el dióxido de carbono en el agua de mar',
          awards: [
            'Premio Miyake de geoquímica',
            'Premio Tanaka'
          ],
        }} 
      />
    </div>
  );
}