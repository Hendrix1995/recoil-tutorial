import { useState } from "react";
import styled from "styled-components";
import { atom, useRecoilState } from "recoil";

const Landing = styled.div`
    text-align: center;
    font-size: 2rem;
`;

const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const UserId = styled.input`
    margin: 0.5rem;
    padding: 0.5rem;
`;

const IsUserId = styled.div`
    text-align: center;
    font-size: 1rem;
`;

const userIdState = atom({
    key: "userId",
    default: 0,
});

function App() {
    const { userId, setUserId } = useState("");
    const handleChange = (e) => {
        setUserId(e.target.value);
    };

    console.log(userId);

    return (
        <>
            <Landing>Hello World!</Landing>
            <UserInfoContainer>
                <UserId onClick={handleChange} />
                <div>{userId}</div>
            </UserInfoContainer>
        </>
    );
}

export default App;
