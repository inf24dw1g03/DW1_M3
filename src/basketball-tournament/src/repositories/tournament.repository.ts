import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Tournament, TournamentRelations, Match} from '../models';
import {MatchRepository} from './match.repository';

export class TournamentRepository extends DefaultCrudRepository<
  Tournament,
  typeof Tournament.prototype.id,
  TournamentRelations
> {

  public readonly matches: HasManyRepositoryFactory<Match, typeof Tournament.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('MatchRepository') protected matchRepositoryGetter: Getter<MatchRepository>,
  ) {
    super(Tournament, dataSource);
    this.matches = this.createHasManyRepositoryFactoryFor('matches', matchRepositoryGetter,);
    this.registerInclusionResolver('matches', this.matches.inclusionResolver);
  }
}
