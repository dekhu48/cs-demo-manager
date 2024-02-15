import type { Player } from 'csdm/common/types/player';
import type { PlayerClutchStats } from '../clutches/fetch-players-clutch-stats';
import type { PlayerQueryResult } from './player-query-result';

export function playerQueryResultToPlayer(
  row: PlayerQueryResult,
  clutchStats: PlayerClutchStats | undefined,
  collateralKillCount: number,
): Player {
  return {
    steamId: row.steam_id,
    assistCount: row.assist_count,
    averageDamagePerRound: row.average_damage_per_round,
    averageDeathPerRound: row.average_death_per_round,
    averageKillPerRound: row.average_kill_per_round,
    utilityDamagePerRound: row.utility_damage_per_round,
    bombDefusedCount: row.bomb_defused_count,
    bombPlantedCount: row.bomb_planted_count,
    hostageRescuedCount: row.hostage_rescued_count,
    damageArmor: row.damage_armor,
    damageHealth: row.damage_health,
    deathCount: row.death_count,
    firstDeathCount: row.first_death_count,
    firstKillCount: row.first_kill_count,
    firstTradeDeathCount: row.first_trade_death_count,
    firstTradeKillCount: row.first_trade_kill_count,
    fiveKillCount: row.five_kill_count,
    fourKillCount: row.four_kill_count,
    mvpCount: row.mvp_count,
    headshotCount: row.headshot_count,
    headshotPercentage: row.headshot_percentage,
    id: String(row.id),
    kast: row.kast,
    killCount: row.kill_count,
    killDeathRatio: row.kill_death_ratio,
    matchChecksum: row.match_checksum,
    rankType: row.rank_type,
    oldRank: row.old_rank,
    rank: row.rank,
    winsCount: row.wins_count,
    name: row.name,
    oneKillCount: row.one_kill_count,
    score: row.score,
    teamName: row.team_name,
    threeKillCount: row.three_kill_count,
    tradeDeathCount: row.trade_death_count,
    tradeKillCount: row.trade_kill_count,
    twoKillCount: row.two_kill_count,
    utilityDamage: row.utility_damage,
    vsOneCount: clutchStats?.vsOneCount ?? 0,
    vsOneWonCount: clutchStats?.vsOneWonCount ?? 0,
    vsOneLostCount: clutchStats?.vsOneLostCount ?? 0,
    vsTwoCount: clutchStats?.vsTwoCount ?? 0,
    vsTwoWonCount: clutchStats?.vsTwoWonCount ?? 0,
    vsTwoLostCount: clutchStats?.vsTwoLostCount ?? 0,
    vsThreeCount: clutchStats?.vsThreeCount ?? 0,
    vsThreeWonCount: clutchStats?.vsThreeWonCount ?? 0,
    vsThreeLostCount: clutchStats?.vsThreeLostCount ?? 0,
    vsFourCount: clutchStats?.vsFourCount ?? 0,
    vsFourWonCount: clutchStats?.vsFourWonCount ?? 0,
    vsFourLostCount: clutchStats?.vsFourLostCount ?? 0,
    vsFiveCount: clutchStats?.vsFiveCount ?? 0,
    vsFiveWonCount: clutchStats?.vsFiveWonCount ?? 0,
    vsFiveLostCount: clutchStats?.vsFiveLostCount ?? 0,
    avatar: row.avatar,
    hltvRating: row.hltv_rating,
    hltvRating2: row.hltv_rating_2,
    lastBanDate: row.last_ban_date?.toUTCString() ?? null,
    crosshairShareCode: row.crosshair_share_code,
    collateralKillCount,
    wallbangKillCount: row.wallbang_kill_count,
    color: row.color,
  };
}
