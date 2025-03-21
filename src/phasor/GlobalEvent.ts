import * as Phaser from "phaser";

import Card from "./Card";
import Pile from "./Pile";
import Deck from "./Deck";
import { getValidDropPiles } from "./Rule";

import { PileId } from "./constants/table";

// Register handlers for various global events.
export function registerGlobalEvents(scene: Phaser.Scene, deck: Deck): void {
  scene.input.on(
    "dragenter",
    (
      _pointer: Phaser.Input.Pointer,
      gameObject: Phaser.GameObjects.GameObject,
      target: Phaser.GameObjects.GameObject,
    ) => {
      if (gameObject instanceof Card && target instanceof Pile)
        dragEnter(gameObject, target, deck);
    },
  );

  scene.input.on(
    "dragleave",
    (
      _pointer: Phaser.Input.Pointer,
      gameObject: Phaser.GameObjects.GameObject,
      target: Phaser.GameObjects.GameObject,
    ) => {
      if (gameObject instanceof Card && target instanceof Pile)
        reset(scene, deck);
    },
  );

  scene.input.on(
    "pointerup",
    (
      _pointer: Phaser.Input.Pointer,
      _currentlyOver: Phaser.GameObjects.GameObject,
    ) => {
      reset(scene, deck);
    },
  );
}

function dragEnter(card: Card, pile: Pile, deck: Deck): void {
  const pileId = pile.name as PileId;
  if (getValidDropPiles(deck, card, [pileId]).length === 0) return;

  const pileChildren = deck.pileChildren(pileId);
  const highlight = pileChildren.at(-1) ?? pile;
  highlight.setTint(0x4a90e2);
}

function reset(scene: Phaser.Scene, deck: Deck): void {
  [...scene.children.list, ...deck.cards].forEach((obj) => {
    if (obj instanceof Pile || obj instanceof Card) obj.clearTint();
  });
}
