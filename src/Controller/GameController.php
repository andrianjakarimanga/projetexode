<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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

    #[Route('game/result', name: 'app_game_result')]
    public function result(): Response
    {
        return $this->render('game/result.html.twig', [
            'controller_name' => 'GameController',
        ]);
    }
}
