<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\EscapeGamesRepository;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(EscapeGamesRepository $EscapeGamesRepository):Response
    {
        return $this->render('home/index.html.twig', [
            'names' =>$EscapeGamesRepository->findAll(),
            //'description'  =>$EscapeGamesRepository->findAll(),
           
        ]);
    }
}
