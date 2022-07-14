import { DbTweet } from './db';
import { Tweet } from './resolvers-types.generated'

export const tweetTransform = (t: DbTweet): Omit<Tweet, "author"> => {
  return {
    id: t.id,
    body: t.message,
    createdAt: t.createdAt,
    updatedAt: t.updatedAt
  }
}
