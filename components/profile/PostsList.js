import PostItem from '@/components/profile/PostItem';

const POSTS_DATA_TEST = [
  {
    id: 1,
    title: "Blog 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  },
  {
    id: 2,
    title: "Blog 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  },
  {
    id: 3,
    title: "Blog 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  },
  {
    id: 4,
    title: "Blog 4",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  },
  {
    id: 5,
    title: "Blog 5",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  },
  {
    id: 6,
    title: "Blog 6",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  },
  {
    id: 7,
    title: "Blog 7",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  },
  {
    id: 8,
    title: "Blog 8",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  },
  {
    id: 9,
    title: "Blog 9",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  },
  {
    id: 10,
    title: "Blog 10",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  },
  {
    id: 11,
    title: "Blog 11",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  },
  {
    id: 12,
    title: "Blog 12",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  }
];

export default function PostsList() {
  return (
    <div className="w-full h-full overflow-y-auto">
      {(POSTS_DATA_TEST || []).map((post) => {
        return (
          <PostItem post={post} key={post.id}/>
        );
      })}
    </div>
  );
}
