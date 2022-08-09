import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey, TableIndex} from "typeorm";

export class CreateCars1660002671918 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cars",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "daily_rate",
                        type: "float",
                    },
                    {
                        name: "available",
                        type: "boolean",
                        default: true,
                    },
                    {
                        name: "license_plate",
                        type: "varchar",
                    },
                    {
                        name: "fine_amount",
                        type: "float",
                    },
                    {
                        name: "brand",
                        type: "string",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ]
            })
        );
        await queryRunner.addColumn(
            "cars",
            new TableColumn({
                name: "categoryId",
                type: "string",
            })
        );
        await queryRunner.createForeignKey(
            "cars",
            new TableForeignKey({
                columnNames: ["categoryId"],
                referencedColumnNames: ["id"],
                referencedTableName: "categories",
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("cars");
        const foreignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("categoryId") !== -1
        );
        await queryRunner.dropForeignKey("cars", foreignKey);
        await queryRunner.dropColumn("cars", "categoryId");
        await queryRunner.dropTable("cars");
    }
}
