import { Component} from '@angular/core';
import { Tarjeta } from '../tarjeta/tarjeta';
import { Cantante } from '../../../models/cantante';



@Component({
  selector: 'app-lista',
  imports: [Tarjeta],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class lista {
  
  cantantes:Cantante[]=[
    new Cantante("Lola Indigo", 5,"/Lola_Indigo.jpeg","Lola Índigo, cuyo nombre real es Miriam Doblas Muñoz, nació en Madrid en 1992 y creció en Granada. Es cantante, bailarina y coreógrafa española, conocida por su estilo urbano y energético que mezcla pop, reguetón y dance. Se dio a conocer en Operación Triunfo 2017 y alcanzó el éxito con su primer sencillo “Ya no quiero ná”. Su carrera destaca por las coreografías potentes, la estética visual cuidada y su presencia en grandes escenarios de España y Latinoamérica.","Dragona"),
    new Cantante("Aitana", 3,"/Aitana.jpeg","Aitana Ocaña, nacida en 1999 en Barcelona, es una cantante pop española que saltó a la fama en Operación Triunfo 2017. Su estilo combina pop moderno, baladas y sonidos electrónicos. Es una de las artistas más exitosas del pop español actual, con temas como “Teléfono”, “Mon Amour” o “Los Ángeles”.","Mariposa"),
    new Cantante("Rosalia", 5,"/Rosalia.jpeg","Rosalía Vila Tobella, nacida en 1992 en Barcelona, es una artista innovadora que fusiona flamenco, pop y música urbana. Su álbum “El mal querer” la catapultó al éxito internacional, y con “Motomami” consolidó su estilo experimental. Ganadora de múltiples Grammy y Latin Grammy, es reconocida por su estética vanguardista y visión artística global.","Motomami"),
    new Cantante("Bad Gyal", 4,"/Bad_gyal.jpeg","Bad Gyal (Alba Farelo, 1997, Barcelona) es una cantante y productora que mezcla dancehall, reguetón y trap con una actitud rebelde y sensual. Empezó subiendo versiones a internet y se convirtió en una figura clave del urban español. Canciones como “Fiebre” o “Chulo” reflejan su estilo atrevido y su influencia internacional.","Reguetonera"),
    new Cantante("Ana Mena", 2,"/Ana.jpeg","Ana Mena Rojas, nacida en 1997 en Málaga, comenzó como actriz y se consolidó como cantante pop. Su música combina pop latino, reguetón y ritmos italianos, siendo muy popular en España e Italia. Éxitos como “A un paso de la luna” o “Música ligera” muestran su versatilidad y carisma.","Belladrama"),
  ];

}
