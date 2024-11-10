export const endpoints = {
  getAllGroups: "groups",
  getGroupById: (groupId: string) => `groups/${groupId}`,
  getChaptersByRoundId: (roundId: string) => `rounds/${roundId}/chapters`,
  getEvent: (eventId: string) => `calendars/${eventId}`,

  renewSubscription: "renew-subscribtion",
  createSubscription: "paymentGatway",
  checkSubscription: "check-subscription",

  likeVideo: (videoId: string) => `videos/${videoId}/like`,
  getVideoLikes: (videoId: string) => `videos/${videoId}/likes`,
  unLikeVideo: (videoId: string) => `videos/${videoId}/unlike`,
  getSavedVideos: `user/saved-videos`,
  saveVideo: (videoId: string) => `videos/${videoId}/save`,
  unSaveVideo: (videoId: string) => `videos/${videoId}/unsave`,
  likePost: (postId: string) => `posts/${postId}/likes`,
  getPostsByGroupId: (groupId: string) => `getPostByGroupId/${groupId}`,
  getAllPosts: "postsAll",

  getProfilePosts: (page: number) => `auth/postsUser-profile?page=${page}`,
  getPostLikes: (postId: string) => `post/${postId}/likes`,

  unLikePost: (postId: string) => `posts/${postId}/likes`,
  getUsersGroups: "auth/groupUser-profile",
};
