import styled from "styled-components";
import { atom, useRecoilState, selector, useRecoilValue } from "recoil";

const Landing = styled.div`
    text-align: center;
    font-size: 1.5rem;
`;

const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const UserId = styled.input`
    margin: 0.5rem;
    padding: 0.5rem;
    width: 300px;
`;

const IsUserId = styled.div`
    text-align: center;
    font-size: 1rem;
    color: black;
`;

const RedUserId = styled.div`
    text-align: center;
    font-size: 1rem;
    color: red;
`;

const userIdState = atom({
    key: "id",
    default: "",
});

const countIdLength = selector({
    key: "idLength",
    get: ({ get }) => {
        const text = get(userIdState);
        return text.length;
    },
});

function App() {
    const [userId, setUserId] = useRecoilState(userIdState);
    const handleChange = (e) => {
        setUserId(e.target.value);
    };

    const count = useRecoilValue(countIdLength);

    return (
        <>
            <Landing>Hello World!</Landing>
            <UserInfoContainer>
                <UserId onChange={handleChange} />
                {count < 4 ? <IsUserId>유저 아이디는 {userId}입니다.</IsUserId> : <RedUserId>유저 아이디는 {userId}입니다.</RedUserId>}
                <IsUserId>Length:{userId.length}</IsUserId>
            </UserInfoContainer>
        </>
    );
}

export default App;
