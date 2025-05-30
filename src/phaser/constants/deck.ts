/**
 * Suits
 */
export enum Suit {
  Clubs = "CLUBS",
  Diamonds = "DIAMONDS",
  Hearts = "HEARTS",
  Spades = "SPADES",
}

/**
 * Rank
 */
export enum Rank {
  Ace = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
  Ten = 10,
  Jack = 11,
  Queen = 12,
  King = 13,
}

/**
 * Color map
 */
export enum SuitColor {
  Red = "RED",
  Black = "BLACK",
}

/**
 * Defines sprite offset of each suit in the spritemap.
 */
export const SUIT_IMAGE_INDEX = {
  [Suit.Hearts]: 0,
  [Suit.Diamonds]: 1,
  [Suit.Clubs]: 2,
  [Suit.Spades]: 3,
} as const;

/**
 * Defines suit colors
 */
export const SUIT_COLOR = {
  [Suit.Hearts]: SuitColor.Red,
  [Suit.Diamonds]: SuitColor.Red,
  [Suit.Clubs]: SuitColor.Black,
  [Suit.Spades]: SuitColor.Black,
} as const;

export const NUM_CARDS = 52;
export const NUM_SUITS = 4;
export const NUM_VALUES = 13;

export const SPRITE_CARD_WIDTH = 14;
export const CARD_BACK_INDEX = 27;
