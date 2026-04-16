import InnerHeader from "@/components/InnerHeader";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <InnerHeader />

      <main className="py-5">
        <section>
          <div className="container">
            <h1 className="mb-3">About Us Page</h1>
            <p className="mb-0">
              Welcome to our About Us page. This page contains information about our website, our goals, and what we
              provide to users.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
