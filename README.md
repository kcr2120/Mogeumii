## 😽 모금이 Mogeumii
자투리 금액 기부 라우팅 시스템

### 📌 프로젝트 개요
* 결제 시 발생하는 자투리 금액을 내부 가상 금고에 모아두었다가, 
지정된 기부처로 자동 일괄 이체하는 금융 시스템입니다.

### 🛠️ 기술 스택 (예정)
* **Backend:** Java, Spring Boot, Spring Batch, Spring Security
* **Database:** MySQL, MyBatis, Spring Data JPA
* **Frontend:** React, Chart.js

### 🌊 핵심 로직
1. **결제 및 가상 금고 적립:** 결제 발생 시 잔액을 차감하고 자투리 금액을 내부 DB에 기록 (트랜잭션 관리)
2. **배치 처리 (Batch):** 매일 새벽 정해진 시간에 기부 대기 금액을 합산하여 실제 기부처로 일괄 송금
