import PostItem from '@/components/profile/PostItem';

const POSTS_DATA_TEST = [
  {
    id: 1,
    title: "Post 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  },
  {
    id: 2,
    title: "Post 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  },
  {
    id: 3,
    title: "Post 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  },
  {
    id: 4,
    title: "Post 4",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  },
  {
    id: 5,
    title: "Post 5",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  },
  {
    id: 6,
    title: "Post 6",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  },
  {
    id: 7,
    title: "Post 7",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  },
  {
    id: 8,
    title: "Post 8",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  },
  {
    id: 9,
    title: "Post 9",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  },
  {
    id: 10,
    title: "Post 10",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  },
  {
    id: 11,
    title: "Post 11",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  },
  {
    id: 12,
    title: "Post 12",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  }
];

export default function PostsList() {
  return (
    <div className="w-full h-full overflow-y-auto p-5 border border-gray-200 rounded-lg shadow-sm flex flex-col gap-3">
      {(POSTS_DATA_TEST || []).map((post) => {
        return <PostItem post={post} key={post.id} />;
      })}
    </div>
  );
}
