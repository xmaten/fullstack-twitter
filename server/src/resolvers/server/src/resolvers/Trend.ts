import { TrendResolvers } from '../../../../resolvers-types.generated';
import { TwitterResolverContext } from '../../../../resolvers';

const trendTwitterResolver: TrendResolvers<TwitterResolverContext> =
  {
    __resolveType(obj, _context, _info) {
      if (typeof (obj as any).hashtag === "string") {
        return "HashtagTrend"
      } else {
        return "TopicTrend"
      }
    },
  }
export default trendTwitterResolver
