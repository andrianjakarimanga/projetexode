<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220922134745 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE historique DROP FOREIGN KEY FK_EDBFD5ECC462C366');
        $this->addSql('DROP INDEX IDX_EDBFD5ECC462C366 ON historique');
        $this->addSql('ALTER TABLE historique DROP enigmes_id, DROP nombre_dindices, CHANGE temps_total temps_total INT NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE historique ADD enigmes_id INT DEFAULT NULL, ADD nombre_dindices INT NOT NULL, CHANGE temps_total temps_total TIME NOT NULL');
        $this->addSql('ALTER TABLE historique ADD CONSTRAINT FK_EDBFD5ECC462C366 FOREIGN KEY (enigmes_id) REFERENCES enigmes (id)');
        $this->addSql('CREATE INDEX IDX_EDBFD5ECC462C366 ON historique (enigmes_id)');
    }
}
