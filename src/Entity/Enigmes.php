<?php

namespace App\Entity;

use App\Repository\EnigmesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EnigmesRepository::class)]
class Enigmes
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $Name = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $Indice = null;

    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTimeInterface $TempsEnigme = null;

    #[ORM\ManyToMany(targetEntity: EscapeGames::class, mappedBy: 'Enigmes')]
    private Collection $escapeGames;

    #[ORM\OneToMany(mappedBy: 'enigmes', targetEntity: Historique::class)]
    private Collection $Historique;

    public function __construct()
    {
        $this->escapeGames = new ArrayCollection();
        $this->Historique = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->Name;
    }

    public function setName(string $Name): self
    {
        $this->Name = $Name;

        return $this;
    }

    public function getIndice(): ?string
    {
        return $this->Indice;
    }

    public function setIndice(string $Indice): self
    {
        $this->Indice = $Indice;

        return $this;
    }

    public function getTempsEnigme(): ?\DateTimeInterface
    {
        return $this->TempsEnigme;
    }

    public function setTempsEnigme(\DateTimeInterface $TempsEnigme): self
    {
        $this->TempsEnigme = $TempsEnigme;

        return $this;
    }

    /**
     * @return Collection<int, EscapeGames>
     */
    public function getEscapeGames(): Collection
    {
        return $this->escapeGames;
    }

    public function addEscapeGame(EscapeGames $escapeGame): self
    {
        if (!$this->escapeGames->contains($escapeGame)) {
            $this->escapeGames->add($escapeGame);
            $escapeGame->addEnigme($this);
        }

        return $this;
    }

    public function removeEscapeGame(EscapeGames $escapeGame): self
    {
        if ($this->escapeGames->removeElement($escapeGame)) {
            $escapeGame->removeEnigme($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Historique>
     */
    public function getHistorique(): Collection
    {
        return $this->Historique;
    }

    public function addHistorique(Historique $historique): self
    {
        if (!$this->Historique->contains($historique)) {
            $this->Historique->add($historique);
            $historique->setEnigmes($this);
        }

        return $this;
    }

    public function removeHistorique(Historique $historique): self
    {
        if ($this->Historique->removeElement($historique)) {
            // set the owning side to null (unless already changed)
            if ($historique->getEnigmes() === $this) {
                $historique->setEnigmes(null);
            }
        }

        return $this;
    }
}
