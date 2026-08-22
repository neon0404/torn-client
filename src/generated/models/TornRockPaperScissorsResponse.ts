/** @category Models */
export type TornRockPaperScissorsResponse = {
  rockpaperscissors: {
    type: "rock" | "paper" | "scissors";
    count: number;
  }[];
};
