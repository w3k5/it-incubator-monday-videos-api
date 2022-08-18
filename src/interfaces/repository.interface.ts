export interface RepositoryInterface<Entity> {
	/**
	 * Finds all entities from Database
	 */
	getAll: () => Promise<Entity[]>;
	getById: (id: number) => Promise<Entity | null>;
	create: (data: Omit<Entity, 'id'>) => Promise<Entity>;
	update: (id: number, data: keyof Entity) => Promise<boolean>;
	removeById: (id: number) => Promise<void>;
	drop: () => Promise<void>;
}
