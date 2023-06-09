import { MigrationInterface, QueryRunner, Table  } from "typeorm"

export class UserTable1682635703325 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true, 
                        generationStrategy: 'increment'

                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length: '225',
                        isNullable: false,

                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        length: '225',
                        isNullable: false,
                        isUnique: true

                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        isNullable: false

                    },

                ] 
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
