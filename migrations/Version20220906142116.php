<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220906142116 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE escape_games_enigmes (escape_games_id INT NOT NULL, enigmes_id INT NOT NULL, INDEX IDX_9776E49CA670F29C (escape_games_id), INDEX IDX_9776E49CC462C366 (enigmes_id), PRIMARY KEY(escape_games_id, enigmes_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_badge (user_id INT NOT NULL, badge_id INT NOT NULL, INDEX IDX_1C32B345A76ED395 (user_id), INDEX IDX_1C32B345F7A2C2FC (badge_id), PRIMARY KEY(user_id, badge_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_avatar (user_id INT NOT NULL, avatar_id INT NOT NULL, INDEX IDX_73256912A76ED395 (user_id), INDEX IDX_7325691286383B10 (avatar_id), PRIMARY KEY(user_id, avatar_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE escape_games_enigmes ADD CONSTRAINT FK_9776E49CA670F29C FOREIGN KEY (escape_games_id) REFERENCES escape_games (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE escape_games_enigmes ADD CONSTRAINT FK_9776E49CC462C366 FOREIGN KEY (enigmes_id) REFERENCES enigmes (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_badge ADD CONSTRAINT FK_1C32B345A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_badge ADD CONSTRAINT FK_1C32B345F7A2C2FC FOREIGN KEY (badge_id) REFERENCES badge (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_avatar ADD CONSTRAINT FK_73256912A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_avatar ADD CONSTRAINT FK_7325691286383B10 FOREIGN KEY (avatar_id) REFERENCES avatar (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE historique ADD enigmes_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE historique ADD CONSTRAINT FK_EDBFD5ECC462C366 FOREIGN KEY (enigmes_id) REFERENCES enigmes (id)');
        $this->addSql('CREATE INDEX IDX_EDBFD5ECC462C366 ON historique (enigmes_id)');
        $this->addSql('ALTER TABLE user ADD historique_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D6496128735E FOREIGN KEY (historique_id) REFERENCES historique (id)');
        $this->addSql('CREATE INDEX IDX_8D93D6496128735E ON user (historique_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE escape_games_enigmes DROP FOREIGN KEY FK_9776E49CA670F29C');
        $this->addSql('ALTER TABLE escape_games_enigmes DROP FOREIGN KEY FK_9776E49CC462C366');
        $this->addSql('ALTER TABLE user_badge DROP FOREIGN KEY FK_1C32B345A76ED395');
        $this->addSql('ALTER TABLE user_badge DROP FOREIGN KEY FK_1C32B345F7A2C2FC');
        $this->addSql('ALTER TABLE user_avatar DROP FOREIGN KEY FK_73256912A76ED395');
        $this->addSql('ALTER TABLE user_avatar DROP FOREIGN KEY FK_7325691286383B10');
        $this->addSql('DROP TABLE escape_games_enigmes');
        $this->addSql('DROP TABLE user_badge');
        $this->addSql('DROP TABLE user_avatar');
        $this->addSql('ALTER TABLE historique DROP FOREIGN KEY FK_EDBFD5ECC462C366');
        $this->addSql('DROP INDEX IDX_EDBFD5ECC462C366 ON historique');
        $this->addSql('ALTER TABLE historique DROP enigmes_id');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D6496128735E');
        $this->addSql('DROP INDEX IDX_8D93D6496128735E ON user');
        $this->addSql('ALTER TABLE user DROP historique_id');
    }
}
