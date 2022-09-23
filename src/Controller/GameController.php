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
    #[Route('game/index', name: 'app_game_index')]
    public function index(): Response
    {

        $score = 0;
        $rang = 0;
        $date = 0;
        $user = $this->getUser();
        foreach($user->getHistorique() as $row){
            //if(date($row->getScore()->getTimestamp()) > $score){
                $score = $row->getScore()->getTimestamp();
                $rang = $row->getRang();
                $date = $row->getLastGame();
            //}
        };
   
        return $this->render('game/index.html.twig', [
            'controller_name' => 'GameController',
            'score' => gmdate("H:i:s", $score),
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
    public function saveresult(EntityManagerInterface $em , Request $request): JsonResponse
    {

        $history = new Historique();
        $history->setLastGame(new DateTime());
        $history->setScore(json_decode($request->getContent())->time);
        $history->setTempsTotal(json_decode($request->getContent())->time);
        

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
    public function win(HistoriqueRepository $HistoriqueRepository,UserRepository $userRepository): Response
    {
         /* $user = $this->getUser();
        $histo = $HistoriqueRepository ->findOneById(); */
        return $this->render('game/win.html.twig', [
            'controller_name' => 'GameController',
             'temps_total ' => $HistoriqueRepository->getTempsTotal(),
            /* 'rang' => $user->getRang() */
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
    public function statistiques(HistoriqueRepository $HistoriqueRepository ): Response
    {

        $tabScore = [
            0 => [
                'min' => '0:00:00',
                'max' => '00:06:00',
            ],
            1 => [
                'min' => '00:06:01',
                'max' => '00:12:00',
            ],
            
            2 => [
                'min' => '00:12:01',
                'max' => '00:18:00',
            ],

            3 => [
                'min' => '00:18:01',
                'max' => '00:24:00',
            ],

            4 => [
                'min' => '00:24:01',
                'max' => '00:30:00',
            ]
            ]; 

            $score = 0;
            $rang = 0;
            $user = $this->getUser();
            foreach($user->getHistorique() as $row){
                //if(date($row->getScore()->getTimestamp()) > $score){
                    $score = $row->getScore()->getTimestamp();
                    $rang = $row->getRang();
    
                //}
            };

            $rang = 24;
       
        

            // if ($score >= 0  && $score <= 360){
             //   $rang

             //} 
            
            return $this->render('game/statistiques.html.twig', [
                'controller_name' => 'GameController',
                'score' => gmdate("H:i:s", $score),
                'rang' => $rang,
            ]); 

}

}
