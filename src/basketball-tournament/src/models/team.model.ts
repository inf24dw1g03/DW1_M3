import {Entity, model, property, hasMany} from '@loopback/repository';
import {Player} from './player.model';
import {Match} from './match.model';

@model()
export class Team extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
  })
  fundation_year?: number;

  @hasMany(() => Player)
  players: Player[];

  @hasMany(() => Match)
  matches: Match[];

  constructor(data?: Partial<Team>) {
    super(data);
  }
}

export interface TeamRelations {
  // describe navigational properties here
}

export type TeamWithRelations = Team & TeamRelations;
