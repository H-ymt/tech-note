import Link from "next/link";
import { formatDate, getNotePosts } from "app/note/utils";

export function NotePosts() {
  let allNotes = getNotePosts();

  return (
    <div>
      {allNotes
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link key={post.slug} className="flex flex-col space-y-1 mb-4" href={`/note/${post.slug}`}>
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[6.875rem] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">{post.metadata.title}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}
