import { describe, it, expect, beforeEach } from "vitest";
import { Bowling } from "./Bowling";

describe("Bowling.computeScore", () => {
  let game: Bowling;

  beforeEach(() => {
    game = new Bowling();
  });

  it("une partie avec tous des 0 vaut 0", () => {
    expect(game.computeScore("--------------------")).toBe(0);
  });

  it("une partie avec tous des 1 vaut 20", () => {
    expect(game.computeScore("11111111111111111111")).toBe(20);
  });
});
