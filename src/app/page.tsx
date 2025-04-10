import CV from "../../components/CV";
import Slides from "../../components/swiper";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Section "À propos" avec ton prénom */}
      <section className="sticky-header">
        <h1>ROSIE FIEVET-PESEZ</h1>
        <p>Etudiante en première année</p>
      </section>

      {/* Section des slides */}
      <section className="slider-container">
        <Slides />
      </section>

      {/* Section CV (si tu souhaites l'ajouter) */}
      <section className="mt-12">
        <CV />
      </section>
    </main>
  );
}
