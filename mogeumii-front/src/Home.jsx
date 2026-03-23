// [Home.jsx] 파일에 들어갈 코드
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="app-container">
            <header className="app-header">
                <div className="logo-area">
                    <h1 className="logo-text">Mogeumii</h1>
                </div>
                <div className="header-buttons">
                    <button className="btn-small">로그인</button>
                    {/* 시작하기 버튼을 누르면 /signup 주소로 이동! */}
                    <Link to="/signup">
                        <button className="btn-small btn-primary">시작하기</button>
                    </Link>
                </div>
            </header>

            <main className="app-main">
                <section className="hero-section">
                    <h2 className="hero-phrase">
                        일상의 잔돈을<br />가치 있는 나눔으로.
                    </h2>
                </section>
                <section className="steps-section">
                    <p className="steps-title">모금이가 잔돈을 모으는 3단계</p>
                    <div className="steps-placeholder">
                        <div className="step-item">단계 1</div>
                        <div className="step-item">단계 2</div>
                        <div className="step-item">단계 3</div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home;