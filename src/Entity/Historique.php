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

   /*  #[ORM\Column]
    private ?int $NombreDIndices = null; */

    #[ORM\Column]
    private ?int $TempsTotal = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $LastGame = null;

    #[ORM\Column]
    private ?int $Score = null;

   /*  #[ORM\ManyToOne(inversedBy: 'Historique')]
    private ?Enigmes $enigmes = null; */

    #[ORM\OneToMany(mappedBy: 'historique', targetEntity: User::class)]
    private Collection $User;

    public function __construct()
    {
        $this->User = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /* public function getNombreDIndices(): ?int
    {
        return $this->NombreDIndices;
    }

    public function setNombreDIndices(int $NombreDIndices): self
    {
        $this->NombreDIndices = $NombreDIndices;

        return $this;
    }
 */
    public function getTempsTotal(): ?int
    {
        return $this->TempsTotal;
    }

    public function setTempsTotal(int $TempsTotal): self
    {
        $this->TempsTotal = $TempsTotal;

        return $this;
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

    public function getScore(): ?int
    {
        return $this->Score;
    }

    public function setScore(int $Score): self
    {
        $this->Score = $Score;

        return $this;
    }

    /* public function getEnigmes(): ?Enigmes
    {
        return $this->enigmes;
    }

    public function setEnigmes(?Enigmes $enigmes): self
    {
        $this->enigmes = $enigmes;

        return $this;
    } */

    /**
     * @return Collection<int, User>
     */
    public function getUser(): Collection
    {
        return $this->User;
    }

    public function addUser(User $user): self
    {
        if (!$this->User->contains($user)) {
            $this->User->add($user);
            $user->setHistorique($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->User->removeElement($user)) {
            // set the owning side to null (unless already changed)
            if ($user->getHistorique() === $this) {
                $user->setHistorique(null);
            }
        }

        return $this;
    }
}
