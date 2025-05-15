import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

export default function HomeLayout() {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto mt-2">
          <LatestNews />
        </section>
      </header>
      <nav></nav>
      <main></main>
    </div>
  )
}
