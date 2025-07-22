import { NotePosts } from "app/components/posts";

export const metadata = {
  title: "Tech Note",
  description: "Read my Note.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Tech Note</h1>
      <NotePosts />
    </section>
  );
}
