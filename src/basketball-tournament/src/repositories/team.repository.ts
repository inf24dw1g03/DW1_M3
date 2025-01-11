import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Team, TeamRelations, Player, Match} from '../models';
import {PlayerRepository} from './player.repository';
import {MatchRepository} from './match.repository';

export class TeamRepository extends DefaultCrudRepository<
  Team,
  typeof Team.prototype.id,
  TeamRelations
> {

  public readonly players: HasManyRepositoryFactory<Player, typeof Team.prototype.id>;

  public readonly matches: HasManyRepositoryFactory<Match, typeof Team.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('PlayerRepository') protected playerRepositoryGetter: Getter<PlayerRepository>, @repository.getter('MatchRepository') protected matchRepositoryGetter: Getter<MatchRepository>,
  ) {
    super(Team, dataSource);
    this.matches = this.createHasManyRepositoryFactoryFor('matches', matchRepositoryGetter,);
    this.registerInclusionResolver('matches', this.matches.inclusionResolver);
    this.players = this.createHasManyRepositoryFactoryFor('players', playerRepositoryGetter,);
    this.registerInclusionResolver('players', this.players.inclusionResolver);
  }
}
