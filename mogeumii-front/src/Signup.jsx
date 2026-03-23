import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bank, setBank] = useState('');
    const [account, setAccount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            name: name,
            email: email,
            bank: bank,
            account: account
        };
        console.log("🚀 백엔드로 보낼 준비 완료된 데이터:", userData);
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1 className="logo-text">회원가입</h1>
                <Link to="/">
                    <button className="btn-small">처음으로</button>
                </Link>
            </header>

            <main className="app-main">
                <h2 style={{ marginBottom: '30px', color: '#374151' }}>
                    모금이에 오신 것을<br/>환영합니다!
                </h2>

                <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 'bold', color: '#374151' }}>이름</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{ width: '100%', padding: '10px', fontSize: '14px', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' }}
                            placeholder="홍길동"
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 'bold', color: '#374151' }}>이메일</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ width: '100%', padding: '10px', fontSize: '14px', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' }}
                            placeholder="abc@abcde.com"
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 'bold', color: '#374151' }}>출금은행</label>
                        <input
                            type="text"
                            value={bank}
                            onChange={(e) => setBank(e.target.value)}
                            style={{ width: '100%', padding: '10px', fontSize: '14px', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' }}
                            placeholder="길동뱅크"
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 'bold', color: '#374151' }}>계좌번호</label>
                        <input
                            type="text"
                            value={account}
                            onChange={(e) => setAccount(e.target.value)}
                            style={{ width: '100%', padding: '10px', fontSize: '14px', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' }}
                            placeholder="123-12-1234567"
                        />
                    </div>

                    <button
                        type="submit"
                        style={{ width: '100%', padding: '12px', marginTop: '15px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '15px' }}
                    >
                        가입하기
                    </button>

                </form>
            </main>
        </div>
    )
}

export default Signup;