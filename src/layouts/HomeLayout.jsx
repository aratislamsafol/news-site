
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftContent from "../components/layout-components/LeftContent";
import RightContent from "../components/layout-components/RightContent";
import Navbar from "../components/Navbar";

export default function HomeLayout() {
  return (
    <div className="regular-font">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto mt-2">
          <LatestNews />
        </section>
      </header>
      <section className="w-11/12 mx-auto mt-2">
        <Navbar></Navbar>
      </section>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <aside className="col-span-3">
          <LeftContent></LeftContent>
        </aside>
        <section className="col-span-6">Main Content</section>
        <aside className="col-span-3">
          <RightContent></RightContent>
        </aside>
      </main>
    </div>
  )
}
