import { NotePosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Tech Note</h1>
      <p>{`I'm an engineer who like frontend development.`}</p>
      <div className="my-8">
        <NotePosts />
      </div>
    </section>
  );
}
