<?php

namespace App\Controller;

use App\Entity\NamePhoneRecord;
use App\Form\NamePhoneRecordType;
use App\Repository\NamePhoneRecordRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class NamePhoneRecordController extends AbstractController
{
    /**
     * @Route("/", name="name_phone_record_index", methods={"GET","POST"})
     */
    public function index(NamePhoneRecordRepository $namePhoneRecordRepository): Response
    {
        return $this->render('name_phone_record/index.html.twig', [
            'name_phone_records' => $namePhoneRecordRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="name_phone_record_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $namePhoneRecord = new NamePhoneRecord();
        $form = $this->createForm(NamePhoneRecordType::class, $namePhoneRecord);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($namePhoneRecord);
            $entityManager->flush();

            return $this->redirectToRoute('name_phone_record_index');
        }

        return $this->render('name_phone_record/new.html.twig', [
            'name_phone_record' => $namePhoneRecord,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="name_phone_record_show", methods={"GET"})
     */
    public function show(NamePhoneRecord $namePhoneRecord): Response
    {
        return $this->render('name_phone_record/show.html.twig', [
            'name_phone_record' => $namePhoneRecord,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="name_phone_record_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, NamePhoneRecord $namePhoneRecord): Response
    {
        $form = $this->createForm(NamePhoneRecordType::class, $namePhoneRecord);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('name_phone_record_index');
        }

        return $this->render('name_phone_record/edit.html.twig', [
            'name_phone_record' => $namePhoneRecord,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="name_phone_record_delete", methods={"DELETE"})
     */
    public function delete(Request $request, NamePhoneRecord $namePhoneRecord): Response
    {
        if ($this->isCsrfTokenValid('delete'.$namePhoneRecord->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($namePhoneRecord);
            $entityManager->flush();
        }

        return $this->redirectToRoute('name_phone_record_index');
    }
}
