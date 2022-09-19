<?php

namespace App\Entity;

use App\Repository\HistoriqueRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: HistoriqueRepository::class)]
class Historique
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;   

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $LastGame = null;  

    #[ORM\ManyToOne(inversedBy: 'Historique')]
    private ?Enigmes $enigmes = null;

    #[ORM\OneToMany(mappedBy: 'historique', targetEntity: User::class)]
    private Collection $User;

    #[ORM\Column(length: 255)]
    private ?string $rang = null;

    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTimeInterface $score = null;

    #[ORM\ManyToOne(inversedBy: 'historique')]
    private ?User $user = null;

    public function __construct()
    {
        $this->User = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLastGame(): ?\DateTimeInterface
    {
        return $this->LastGame;
    }

    public function setLastGame(\DateTimeInterface $LastGame): self
    {
        $this->LastGame = $LastGame;

        return $this;
    }

    

    public function getEnigmes(): ?Enigmes
    {
        return $this->enigmes;
    }

    public function setEnigmes(?Enigmes $enigmes): self
    {
        $this->enigmes = $enigmes;

        return $this;
    }

    public function getRang(): ?string
    {
        return $this->rang;
    }

    public function setRang(string $rang): self
    {
        $this->rang = $rang;

        return $this;
    }

    public function getScore(): ?\DateTimeInterface
    {
        return $this->score;
    }

    public function setScore(\DateTimeInterface $score): self
    {
        $this->score = $score;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }
}
