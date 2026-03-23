package com.mogeumii.Mogeumii.repository;

import com.mogeumii.Mogeumii.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
// [JPA 마법의 지팡이: JpaRepository]
// 이 인터페이스 하나만 만들면, 복잡한 SQL 쿼리 없이도
// 데이터를 저장(save), 조회(findById), 삭제(delete)하는 기능이 자동으로 생겨!

public interface MemberRepository extends JpaRepository<Member, Long> {
    // Member: 우리가 다룰 데이터(엔티티) 이름
    // Long: 그 데이터의 기본키(ID) 타입
}
