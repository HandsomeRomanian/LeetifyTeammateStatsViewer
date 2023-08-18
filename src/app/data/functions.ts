
export function matchmakingSkillLevelToRank(skillLevel?: number) {
  switch (skillLevel) {
    case 1:
      return "Silver 1";
    case 2:
      return "Silver 2";
    case 3:
      return "Silver 3";
    case 4:
      return "Silver 4";
    case 5:
      return "Silver Elite";
    case 6:
      return "Silver Elite Master";
    case 7:
      return "Gold Nova 1";
    case 8:
      return "Gold Nova 2";
    case 9:
      return "Gold Nova 3";
    case 10:
      return "Gold Nova Master";
    case 11:
      return "Master Guardian 1";
    case 12:
      return "Master Guardian 2";
    case 13:
      return "Master Guardian Elite";
    case 14:
      return "Distinguished Master Guardian";
    case 15:
      return "Legendary Eagle";
    case 16:
      return "Legendary Eagle Master";
    case 17:
      return "Supreme Master First Class";
    case 18:
      return "Global Elite";
    default:
      return "Unranked";
  }
}

export function matchmakingSkillLevelToImageUrl(skillLevel?: number): URL {
  if (skillLevel && skillLevel >= 0 && skillLevel < 19) {
    return new URL('https://leetify.com/assets/images/rank-icons/matchmaking' + skillLevel + '.png')
  } else {
    return new URL('https://leetify.com/assets/images/rank-icons/matchmaking0.png')
  }
}

export function faceItSkillLevelToRank(skillLevel?: number) {
  return 'Faceit ' + skillLevel;
}

export function faceItSkillLevelToImageUrl(skillLevel?: number): URL | null {
  if (skillLevel && skillLevel > 0 && skillLevel <= 10)
    return new URL("https://leetify.com/assets/images/rank-icons/faceit" + skillLevel + ".png");
  return null;
}
