package com.mogeumii.Mogeumii.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

// JPA와 롬복을 활용한 사용자 엔티티
@Entity // 1. JPA에게 "이 클래스는 DB의 테이블과 1:1로 매핑될 거야!"라고 알려주는 가장 중요한 어노테이션
@Getter // 2. 롬복 기능 : 모든 변수의 값을 가져오는 getter 메서드를 자동 생성 (ex.getName())
@Setter // 3. 롬복 기능 : 모든 변수의 값을 변경하는 setter 메서드를 자동 생성 (ex.setName())
@NoArgsConstructor // 4. 롬복 기능 : 매개변수가 없는 '기본 생성자'를 자동으로 만들어줌 (JPA는 기본 생성자가 필수)

public class Member {

    @Id // 5. 이 테이블의 '기본키'임을 명시해줌 (주민등록번호와 같은 고유한 값)
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 6. mysql의 AUTO_INCREMENT 기능 (데이터가 추가될 때마다 1,2,3..알아서 증가)
    private Long id;

    @Column(nullable = false, length = 50) // 7. DB의 컬럼 설정 : null 값을 허용하지 않고 (필수 입력), 길이는 최대 50자
    private String name;

    @Column(nullable = false, unique = true) // 8. 8. unique = true : 중복된 이메일로 가입할 수 없도록 DB단에서 막아줌
    private String email;

    @Column(length = 50)
    private String bankName; // 4. 출금 은행 (예: 우리은행, 국민은행)

    @Column(length = 100)
    private String accountNumber; // 5. 출금 계좌번호

    @Column(nullable = false)
    private int virtualVaultBalance; // 6. 모인 자투리 금액 (가상 금고 잔액)
}
