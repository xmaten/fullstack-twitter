import { UserResolvers } from '../resolvers-types.generated';
import { TwitterResolverContext } from '../resolvers';

const userTwitterResolver: UserResolvers<TwitterResolverContext> = {
  stats(user, _, {db}) {
    return {
      followingCount: 123,
      followerCount: 321,
      tweetCount: db.getUserTweets(user.id).length
    }
  }
}

export default userTwitterResolver
