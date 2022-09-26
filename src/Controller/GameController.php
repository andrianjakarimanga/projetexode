<?php

namespace App\Controller;

use App\Entity\Historique;
use App\Repository\HistoriqueRepository;
use App\Repository\UserRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class GameController extends AbstractController
{
    /* #[Route('game/index', name: 'app_game_index')]
    public function index(): Response
    {

        $score = 0;
        $rang = 0;
        $date = 0;
        $user = $this->getUser();
        foreach ($user->getHistorique() as $row) {
            //if(date($row->getScore()->getTimestamp()) > $score){
            //$score = $row->getScore()->getTimestamp();
            $rang = $row->getRang();
            $date = $row->getLastGame();
            //}
        };


        return $this->render('game/index.html.twig', [
            'controller_name' => 'GameController',
            'score' => date_format($date, 'd/m/Y'),
            'rang' => $rang,
            'date' => date_format($date, 'd/m/Y'),
        ]);
    } */

    #[Route('game/index', name: 'app_game_index')]
    public function index(): Response
    {

        $tempsTotal = 0;
        $rang = 0;
        $date = "-";

        $user = $this->getUser();
        foreach ($user->getHistorique() as $row) {
            //if(date($row->getScore()->getTimestamp()) > $score){
            //$score = $row->getScore()->getTimestamp();
            $rang = $row->getRang();
            $date = date_format($row->getLastGame(), 'd/m/Y');
            $tempsTotal = $row->getTempsTotal();
            //}
        };


        return $this->render('game/index.html.twig', [
            'controller_name' => 'GameController',
            'score' => gmdate("H:i:s", $tempsTotal),
            'rang' => $rang,
            'date' => $date,
        ]);
    }

    #[Route('game/slide', name: 'app_game_slide')]
    public function slide(): Response
    {
        return $this->render('game/slide.html.twig', [
            'controller_name' => 'GameController',
        ]);
    }

    #[Route('game/saveresult', name: 'app_game_save')]
    public function saveresult(EntityManagerInterface $em, Request $request): JsonResponse
    {

        $history = new Historique();
        $history->setLastGame(new DateTime());
        $history->setScore(json_decode($request->getContent())->time);
        $history->setTempsTotal(json_decode($request->getContent())->time);
        $history->setRang(0);
        $history->setUser($this->getUser());

        $em->persist($history);
        $em->flush();



        $user = $this->getUser();

        return new JsonResponse(['result' => 'ok']);
    }

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
    public function win(HistoriqueRepository $HistoriqueRepository, UserRepository $userRepository): Response
    {
        $user = $this->getUser();
        foreach ($user->getHistorique() as $row) {
            $histo = $row;
            $tempsTotal = $histo->getTempsTotal();
            $rang = $row->getRang();
        }

        if ($tempsTotal >= 0 && $tempsTotal <= 360) {
            $rang = "1-3";
        }

        if ($tempsTotal >= 361 && $tempsTotal <= 720) {
            $rang = "4-9";
        }

        if ($tempsTotal >= 721 && $tempsTotal <= 1080) {
            $rang = "10-24";
        }

        if ($tempsTotal >= 1081 && $tempsTotal <= 1440) {
            $rang = "25-99";
        }

        if ($tempsTotal >= 1441) {
            $rang = "99-200";
        }

        return $this->render('game/win.html.twig', [
            'controller_name' => 'GameController',
            'temps_total' => gmdate("H:i:s", $tempsTotal),
            'rang' => $rang,
        ]);
    }


    #[Route('game/recompense', name: 'app_game_recompense')]
    public function recompense(): Response
    {

        return $this->render('game/recompense.html.twig', [
            'controller_name' => 'GameController',

        ]);
    }

    #[Route('game/statistiques', name: 'app_game_statistiques')]
    public function statistiques(HistoriqueRepository $HistoriqueRepository): Response
    {
        $score = 0;
        $rang = 0;
        $user = $this->getUser();
        foreach ($user->getHistorique() as $row) {
            //if(date($row->getScore()->getTimestamp()) > $score){
            $score = $row->getScore();
            $rang = $row->getRang();

            //}
        };


        if ($score >= 0  && $score <= 360) {
            $rang = "1-3";
        }

        if ($score >= 361 && $score <= 720) {
            $rang = "4-9";
        }

        if ($score >= 721 && $score <= 1080) {
            $rang = "10-24";
        }

        if ($score >= 1081 && $score <= 1440) {
            $rang = "25-99";
        }

        if ($score >= 1441) {
            $rang = "99-200";
        }


        return $this->render('game/statistiques.html.twig', [
            'controller_name' => 'GameController',
            'score' => gmdate("H:i:s", $score),
            'rang' => $rang,
        ]);
    }
}
