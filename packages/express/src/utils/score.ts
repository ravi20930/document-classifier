export interface ScoreFactors {
  promptScore: number; // Assumed to be between 0 and 100
  igScore: number; // Assumed to be between 0 and 100
  photoScore: number; // Assumed to be between 0 and 100
  snapUsername: string | null;
  igUname: string | null;
  orgEmail: string | null;
  isCamVerified: boolean;
  isAnonymous: boolean;
  likeCount: number;
  matchCount: number;
}

export interface EngagementRange {
  maxLikes: number;
  maxMatches: number;
}

export const calculateOverallScore = (
  userData: ScoreFactors,
  userEngagementRange: EngagementRange
): number => {
  const { maxLikes, maxMatches } = userEngagementRange;
  // Normalize factors except likes and matches (using existing user scores)
  const normalizedPromptScore = parseFloat(
    (userData.promptScore / 100).toFixed(2)
  );
  const normalizedIgScore = parseFloat((userData.igScore / 100).toFixed(2));
  const normalizedPhotoScore = parseFloat(
    (userData.photoScore / 100).toFixed(2)
  );

  // Normalize likes and matches with adjusted limits
  const normalizedLikeCount = (userData.likeCount - 0) / (maxLikes - 0);
  const normalizedMatchCount = (userData.matchCount - 0) / (maxMatches - 0);

  // Define weights (adjusted for normalized factors and ensure they sum to 1)
  const totalWeight = 0.2 + 0.2 + 0.1 + 0.3 + 0.15 + 0.1 + 0.1 + 0.2; // Adjust as needed
  const promptScoreWeight = 0.2 / totalWeight;
  const otherFactorsWeight = 0.2 / totalWeight;
  const orgEmailWeight = 0.1 / totalWeight;
  const isCamVerifiedWeight = 0.3 / totalWeight;
  const photoScoreWeight = 0.15 / totalWeight;
  const igScoreWeight = 0.1 / totalWeight;
  const likeCountWeight = 0.1 / totalWeight;
  const matchCountWeight = 0.2 / totalWeight;

  // Adjust weights for anonymous users
  let effectivePhotoScoreWeight = photoScoreWeight;
  let effectiveIgScoreWeight = igScoreWeight;
  if (userData.isAnonymous) {
    effectivePhotoScoreWeight = 0;
    effectiveIgScoreWeight = 0;
  }

  // Calculate the overall score with capping
  const overallScore = Math.min(
    Math.max(
      // Ensure score stays within 0-100 range
      (normalizedPromptScore * promptScoreWeight +
        (userData.snapUsername ? otherFactorsWeight : 0) +
        (userData.igUname ? otherFactorsWeight : 0) +
        (userData.orgEmail ? orgEmailWeight : 0) +
        (userData.isCamVerified ? isCamVerifiedWeight : 0) +
        normalizedPhotoScore * effectivePhotoScoreWeight +
        normalizedIgScore * effectiveIgScoreWeight +
        normalizedLikeCount * likeCountWeight +
        normalizedMatchCount * matchCountWeight) *
        100,
      0
    ),
    100
  );

  return parseFloat(overallScore.toFixed(2));
};

// Prompt score function
export const calculatePromptScore = (prompt: string): number => {
  // Weighting factors
  const lengthWeight = 0.4; // Longer prompts are generally better
  const keywordWeight = 0.3; // Presence of relevant keywords
  const sentimentWeight = 0.2; // Positive and engaging sentiment
  const uniquenessWeight = 0.1; // Originality and avoidance of clichés

  // Calculate score based on weighting and heuristics
  let score = 0;

  // Length (normalized to 0-1)
  score += Math.min(prompt.length / 200, 1) * lengthWeight;

  // Keyword presence (simple example)
  const keywords = ["interesting", "passionate", "travel", "adventure"];
  score +=
    keywords.filter((word) => prompt.includes(word)).length * keywordWeight;

  // Sentiment analysis (replace with your actual implementation)
  // const sentiment = getSentiment(prompt);
  // score += sentiment * sentimentWeight;

  // Uniqueness (replace with your actual implementation)
  // const similarity = getSimilarity(prompt);
  // score -= similarity * uniquenessWeight;

  // Adjust score to 0-100 range
  score = Math.max(0, Math.min(score, 1)) * 100;

  return score;
};

// Instagram score function
export const calculateIgScore = (igData: any): number => {
  // Weighting factors
  const followerCountWeight = 0.4;
  const postCountWeight = 0.2;
  const engagementWeight = 0.2;
  const verificationWeight = 0.2;

  // Extract relevant data from igData (replace with your actual data structure)
  const followerCount = igData.follower_count;
  const postCount = igData.post_count;
  const averageEngagement = igData.average_engagement;
  const isVerified = igData.is_verified;

  // Calculate score based on weighting and data
  let score = 0;

  score += Math.log(followerCount + 1) * followerCountWeight;
  score += Math.min(postCount / 50, 1) * postCountWeight;
  score += Math.min(averageEngagement / 10, 1) * engagementWeight;
  score += isVerified ? verificationWeight : 0;

  // Adjust score to 0-100 range
  score = Math.max(0, Math.min(score, 1)) * 100;

  return score;
};

export const calculatePhotoScore = (photos: any[]): number => {
  // Weighting factors
  const clarityWeight = 0.3;
  const attractivenessWeight = 0.3;
  const varietyWeight = 0.2;
  const profilePictureWeight = 0.2;

  // Analyze each photo (replace with your actual image analysis logic)
  let score = 0;

  // for (const photo of photos) {
  // Calculate individual scores for clarity, attractiveness, etc.
  // const clarityScore = ...;
  // const attractivenessScore = ...;
  // ...

  // Combine individual scores with weights
  //   score += clarityScore * clarityWeight + attractivenessScore * attractivenessWeight + ...;
  // }

  // Apply bonus for profile picture and variety
  if (photos.some((photo) => photo.isProfilePicture)) {
    score += profilePictureWeight;
  }

  // Normalize score based on number of photos
  score /= photos.length;

  // Adjust score to 0-100 range
  score = Math.max(0, Math.min(score, 1)) * 100;

  return score;
};
