import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Team} from './team.model';
import {Tournament} from './tournament.model';

@model()
export class Match extends Entity {
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
  date: string;

  @property({
    type: 'string',
    required: true,
  })
  hour: string;

  @property({
    type: 'string',
    required: true,
  })
  location: string;

  @belongsTo(() => Team)
  teamId: number;

  @belongsTo(() => Tournament)
  tournamentId: number;

  constructor(data?: Partial<Match>) {
    super(data);
  }
}

export interface MatchRelations {
  // describe navigational properties here
}

export type MatchWithRelations = Match & MatchRelations;
