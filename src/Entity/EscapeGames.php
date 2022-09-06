<?php

namespace App\Entity;

use App\Repository\EscapeGamesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EscapeGamesRepository::class)]
class EscapeGames
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $Name = null;

    #[ORM\Column(length: 255)]
    private ?string $Image = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $Description = null;

    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTimeInterface $Durée = null;

    #[ORM\ManyToMany(targetEntity: Enigmes::class, inversedBy: 'escapeGames')]
    private Collection $Enigmes;

    public function __construct()
    {
        $this->Enigmes = new ArrayCollection();
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

    public function getImage(): ?string
    {
        return $this->Image;
    }

    public function setImage(string $Image): self
    {
        $this->Image = $Image;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->Description;
    }

    public function setDescription(string $Description): self
    {
        $this->Description = $Description;

        return $this;
    }

    public function getDurée(): ?\DateTimeInterface
    {
        return $this->Durée;
    }

    public function setDurée(\DateTimeInterface $Durée): self
    {
        $this->Durée = $Durée;

        return $this;
    }

    /**
     * @return Collection<int, Enigmes>
     */
    public function getEnigmes(): Collection
    {
        return $this->Enigmes;
    }

    public function addEnigme(Enigmes $enigme): self
    {
        if (!$this->Enigmes->contains($enigme)) {
            $this->Enigmes->add($enigme);
        }

        return $this;
    }

    public function removeEnigme(Enigmes $enigme): self
    {
        $this->Enigmes->removeElement($enigme);

        return $this;
    }
}
