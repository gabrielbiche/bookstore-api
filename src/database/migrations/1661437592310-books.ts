import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class books1661437592310 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'books',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'author',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'publishingCompany',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'dateOfPublication',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'numberOfPages',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: true,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
            onUpdate: 'now()',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('books');
  }
}
