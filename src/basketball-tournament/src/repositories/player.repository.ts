import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Player, PlayerRelations, Team} from '../models';
import {TeamRepository} from './team.repository';

export class PlayerRepository extends DefaultCrudRepository<
  Player,
  typeof Player.prototype.id,
  PlayerRelations
> {

  public readonly team: BelongsToAccessor<Team, typeof Player.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('TeamRepository') protected teamRepositoryGetter: Getter<TeamRepository>,
  ) {
    super(Player, dataSource);
    this.team = this.createBelongsToAccessorFor('team', teamRepositoryGetter,);
    this.registerInclusionResolver('team', this.team.inclusionResolver);
  }
}
