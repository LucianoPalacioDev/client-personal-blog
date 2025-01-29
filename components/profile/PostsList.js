import PostItem from '@/components/profile/PostItem';

export default function PostsList({posts}) {
  return (
    <div className="w-full h-full overflow-y-auto p-5 border border-gray-200 rounded-lg shadow-sm flex flex-col gap-3">
      {(posts || []).map((post) => {
        return <PostItem post={post} key={post.id} />;
      })}
    </div>
  );
}
