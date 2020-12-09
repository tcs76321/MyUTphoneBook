<?php

namespace App\Repository;

use App\Entity\NamePhoneRecord;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method NamePhoneRecord|null find($id, $lockMode = null, $lockVersion = null)
 * @method NamePhoneRecord|null findOneBy(array $criteria, array $orderBy = null)
 * @method NamePhoneRecord[]    findAll()
 * @method NamePhoneRecord[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class NamePhoneRecordRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, NamePhoneRecord::class);
    }

    // /**
    //  * @return NamePhoneRecord[] Returns an array of NamePhoneRecord objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('n.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?NamePhoneRecord
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
