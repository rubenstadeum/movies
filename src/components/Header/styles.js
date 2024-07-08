import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 10.5rem;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6.4rem;

    padding: 0 8rem;

    > h1 {
        font-size: 2.4rem;

        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > input {
        padding: 2.4rem;
        flex: 1;
        border-radius: 10px;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        color: ${({ theme }) => theme.COLORS.WHITE};
        border: none;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 50%;
    }

    

    > div {
        display: flex;
        flex-direction: column;

        > strong {
            font-size: 1.4rem;
        }

        > span {
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }
`;