/* TYPES */
interface PlayerState {
  value: string | boolean;
}

export interface VerticalPlayerState extends PlayerState {
  value: string;
  onVertChange: () => VerticalPlayerState;
  onVertChangeString: string;
}

export interface HorizontalPlayerState extends PlayerState {
  value: string;
  onLeft: () => HorizontalPlayerState;
  onLeftString: string;
  onRight: () => HorizontalPlayerState;
  onRightString: string;
}

export interface AttackingPlayerState extends PlayerState {
  value: boolean;
  onAtk: () => AttackingPlayerState;
  onAtkString: string;
}

/* STATES */

export const ground: VerticalPlayerState = {
  value: "Grounded",
  onVertChange: () => fly1,
  onVertChangeString: "Fly1",
};

export const fly1: VerticalPlayerState = {
  value: "Fly1",
  onVertChange: () => fly2,
  onVertChangeString: "Fly2",
};

export const fly2: VerticalPlayerState = {
  value: "Fly2",
  onVertChange: () => ground,
  onVertChangeString: "Grounded",
};

export const no_move: HorizontalPlayerState = {
  value: "Standing",
  onLeft: () => left,
  onLeftString: "Walk left",
  onRight: () => right,
  onRightString: "Walk right",
};

export const left: HorizontalPlayerState = {
  value: "Walk left",
  onLeft: () => left_rush,
  onLeftString: "Run left",
  onRight: () => no_move,
  onRightString: "Stop",
};

export const right: HorizontalPlayerState = {
  value: "Walk right",
  onLeft: () => no_move,
  onLeftString: "Stop",
  onRight: () => right_rush,
  onRightString: "Run right",
};

export const left_rush: HorizontalPlayerState = {
  value: "Run left",
  onLeft: () => left_rush,
  onLeftString: "Run left",
  onRight: () => left,
  onRightString: "Walk left",
};

export const right_rush: HorizontalPlayerState = {
  value: "Run right",
  onLeft: () => right,
  onLeftString: "Walk right",
  onRight: () => right_rush,
  onRightString: "Run right",
};

export const atk: AttackingPlayerState = {
  value: true,
  onAtk: () => notAtk,
  onAtkString: "Stop attack",
};

export const notAtk: AttackingPlayerState = {
  value: false,
  onAtk: () => atk,
  onAtkString: "Attack",
};
