import Image from "next/image";
import { Nav } from "./components/nav";

export default function Home() {
  return (
      <main>    
          <div className="welcome">
              <h2>Bem vindo ao Amor Sacrum, jovem!</h2>
              <p>Este site tem o objetivo de disponibilizar as principais informações acerca da Igreja Católica Apostólica Romana. A ideia é ajudar tanto aqueles que estão inciando sua caminhada, quanto aqueles mais experientes e que são curiosos.</p>

              <p>Então fique à vontade para explorar bastante, pois é um projeto inteiramente pessoal e gratuito. </p>
          </div>
      
          <div className="gospelOfTheDay">
              <h2>Evangelho do dia</h2>
              <div>
                  <p>Mc 16, 6</p>
                  <a href="#" className="underline">Ver completo {"->"}</a>
              </div>
          </div>

          <div className="saintOfTheDay">
              <h2>Santo do dia</h2>
              <div>
                  <Image src="/media/joseph.png" width={100} height={100} alt="Joseph" />
                  <div>
                      <p>São José</p>
                      <p>Bispo, 155</p>
                  </div>
              </div>
              <div className="more">
                  <a href="#" className="underline">Ver mais {"->"}</a>
              </div>
          </div>
      </main>
  );
}
