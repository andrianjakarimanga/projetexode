<?php

namespace App\Controller;

use App\Entity\Historique;
use App\Repository\HistoriqueRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class GameController extends AbstractController
{
    #[Route('game/index', name: 'app_game_index')]
    public function index(): Response
    {
        return $this->render('game/index.html.twig', [
            'controller_name' => 'GameController',
        ]);
    }

    #[Route('game/slide', name: 'app_game_slide')]
    public function slide(): Response
    {
        return $this->render('game/slide.html.twig', [
            'controller_name' => 'GameController',
        ]);
    }

    /*#[Route('game/saveresult', name: 'app_game_save')]
    public function saveresult(EntityManagerInterface $em): JsonResponse
    {
        $history = new Historique();
        $history->setEnigmes();
        $history->setLastGame();
        $history->setNombreDIndices();
        $history->setScore();
        $history->setTempsTotal();

        $em->persist($history);
        $em->flush();

        $winLose = false;

        $user = $this->getUser();
        $user->setScore(100);
        $user->setRang(10);
        
        $em->persist($user);
        $em->flush();

        return new JsonResponse(['result' => $winLose]);
    }*/

    #[Route('game/lost', name: 'app_game_lost')]
    public function lost(HistoriqueRepository $HistoriqueRepository): Response
    {
        
        /*  $user = $this->getUser();
        $histo = $HistoriqueRepository ->findOneById(); */
        return $this->render('game/lost.html.twig', [
            'controller_name' => 'GameController',
            /* 'temps_total ' => $histo->getTempsTotal(),
            'rang' => $user->getRang() */
        ]); 
    }
    

    #[Route('game/win', name: 'app_game_win')]
    public function win(HistoriqueRepository $HistoriqueRepository,UserRepository $userRepository): Response
    {
         /* $user = $this->getUser();
        $histo = $HistoriqueRepository ->findOneById(); */
        return $this->render('game/win.html.twig', [
            'controller_name' => 'GameController',
            /* 'temps_total ' => $histo->getTempsTotal(),
            'rang' => $user->getRang() */
        ]); 
    }
    

}



