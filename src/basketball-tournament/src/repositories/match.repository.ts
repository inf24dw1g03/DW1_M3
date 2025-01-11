import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Match, MatchRelations, Team, Tournament} from '../models';
import {TeamRepository} from './team.repository';
import {TournamentRepository} from './tournament.repository';

export class MatchRepository extends DefaultCrudRepository<
  Match,
  typeof Match.prototype.id,
  MatchRelations
> {

  public readonly team: BelongsToAccessor<Team, typeof Match.prototype.id>;

  public readonly tournament: BelongsToAccessor<Tournament, typeof Match.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('TeamRepository') protected teamRepositoryGetter: Getter<TeamRepository>, @repository.getter('TournamentRepository') protected tournamentRepositoryGetter: Getter<TournamentRepository>,
  ) {
    super(Match, dataSource);
    this.tournament = this.createBelongsToAccessorFor('tournament', tournamentRepositoryGetter,);
    this.registerInclusionResolver('tournament', this.tournament.inclusionResolver);
    this.team = this.createBelongsToAccessorFor('team', teamRepositoryGetter,);
    this.registerInclusionResolver('team', this.team.inclusionResolver);
  }
}
