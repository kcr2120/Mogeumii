package com.mogeumii.Mogeumii;

import com.mogeumii.Mogeumii.entity.Member;
import com.mogeumii.Mogeumii.repository.MemberRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MogeumiiApplication {

	public static void main(String[] args) {
		SpringApplication.run(MogeumiiApplication.class, args);
	}
	// [서버가 켜질 때 자동으로 딱 한 번 실행되는 마법의 테스트 코드]
	@Bean
	public CommandLineRunner testRunner(MemberRepository memberRepository) {
		return args -> {
			// [수정 완료!] 이메일 중복 에러를 피하기 위해 새로운 이메일로 두 번째 테스트 데이터를 넣습니다.
			Member member = new Member();
			member.setName("김채령");
			member.setEmail("chaeryeong2@mogeum.com"); // 이메일 끝에 2를 붙였어!

			// 아까 새로 추가한 은행과 계좌번호 정보
			member.setBankName("우리은행");
			member.setAccountNumber("1002-123-456789");

			member.setVirtualVaultBalance(15000); // 이번엔 1만 5천 원!

			// DB에 저장 명령!
			memberRepository.save(member);

			System.out.println("🎉 [두 번째 테스트 성공] 계좌 정보가 포함된 데이터가 저장되었습니다!");
		};
	}
}
