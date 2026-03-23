package com.mogeumii.Mogeumii.dto;

import lombok.Getter;
import lombok.Setter;

// 리액트에서 날아오는 데이터를 임시로 담아둘 택배 상자 : DTO

@Getter
@Setter
public class MemberCreateRequest {
    // 리액트 화면의 입력칸에서 사용자가 적을 정보
    private String name;
    private String email;
    private String bankName;
    private String accountNumber;
}