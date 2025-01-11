import {Entity, model, property} from '@loopback/repository';

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


  constructor(data?: Partial<Tournament>) {
    super(data);
  }
}

export interface TournamentRelations {
  // describe navigational properties here
}

export type TournamentWithRelations = Tournament & TournamentRelations;
