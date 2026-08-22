/** @category Models */
export type TornCityStatsResponse = {
  stats: {
    users: {
      total: number;
      male: number;
      female: number;
      enby: number;
      married: number;
    };
    items: {
      found_in_city: number;
      found_in_dump: number;
      trashed: number;
      total: number;
    };
    trading: {
      sold_on_market: number;
      sold_in_bazaar: number;
      sold_points: number;
      bazaar_profit: number;
      auctions: number;
      trades: number;
      items_sent: number;
    };
    currency: {
      money_on_hand: number;
      money_on_hand_average: number;
      money_in_bank: number;
      points_total: number;
      points_players: number;
      points_factions: number;
      points_market: number;
      points_used: number;
    };
    attacking: {
      attacks_won: number;
      attacks_lost: number;
      attacks_stalemated: number;
      attacks_stealthed: number;
      escapes: number;
      hits: number;
      misses: number;
      critical_hits: number;
      rounds_fired: number;
      money_mugged: number;
      respect_gained: number;
    };
    jobs: {
      army: number;
      grocer: number;
      casino: number;
      education: number;
      medical: number;
      law: number;
      company: number;
      unemployed: number;
    };
    jail: {
      jailings: number;
      busts: number;
      busts_failed: number;
      bails: number;
      bails_spent: number;
    };
    hospital: {
      trips: number;
      medical_items_used: number;
      revives: number;
    };
    drugs: {
      total_used: number;
      overdoses: number;
      cannabis: number;
      ecstasy: number;
      ketamine: number;
      lsd: number;
      opium: number;
      shrooms: number;
      speed: number;
      pcp: number;
      xanax: number;
      vicodin: number;
    };
    traveling: {
      items_bought_abroad: number;
      total_trips: number;
      argentina: number;
      mexico: number;
      united_arab_emirates: number;
      hawaii: number;
      japan: number;
      united_kingdom: number;
      south_africa: number;
      switzerland: number;
      china: number;
      cayman_islands: number;
    };
    bounties: {
      placed: number;
      money_spent: number;
    };
    crimes: {
      total: number;
      jail_sentences: number;
    };
    communication: {
      total_messages: number;
      friends: number;
      coworkers: number;
      spouses: number;
      classified_ads_placed: number;
      personals_placed: number;
    };
    other: {
      logins: number;
      years_played: number;
      merits_bought: number;
      energy_refills: number;
      company_trains: number;
      stat_enhancers_used: number;
    };
  };
};
