import {Entity, model, property, hasMany} from '@loopback/repository';
import {Match} from './match.model';

@model()
export class Tournament extends Entity {
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
    type: 'string',
    required: true,
  })
  begin_date: string;

  @property({
    type: 'string',
    required: true,
  })
  end_date: string;

  @hasMany(() => Match)
  matches: Match[];

  constructor(data?: Partial<Tournament>) {
    super(data);
  }
}

export interface TournamentRelations {
  // describe navigational properties here
}

export type TournamentWithRelations = Tournament & TournamentRelations;
