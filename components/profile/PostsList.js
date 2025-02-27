import PostItem from "@/components/profile/PostItem";
import LoadingIcon from "@/components/shared/icons/LoadingIcon";

export default function PostsList({
  posts,
  isLoadingPost,
  isPostsOwner,
  handleDeletePost,
  handleEditPost,
}) {
  return (
    <div className="w-full h-full overflow-y-auto p-0 sm:p-5 border-none sm:border-solid sm:border sm:border-gray-200 rounded-lg shadow-none sm:shadow-sm flex flex-col gap-3">
      {isLoadingPost ? (
        <div className="w-full h-full flex justify-center items-center">
          <LoadingIcon size="3rem" />
        </div>
      ) : (posts || []).length <= 0 ? (
        <div className="w-full h-full flex justify-center items-center">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
            No posts found
          </h5>
        </div>
      ) : (
        (posts || []).map((post) => {
          return (
            <PostItem
              key={post.id}
              post={post}
              isPostsOwner={isPostsOwner}
              handleDeletePost={handleDeletePost}
              handleEditPost={handleEditPost}
            />
          );
        })
      )}
    </div>
  );
}
