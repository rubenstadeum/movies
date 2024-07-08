import { Container, Profile } from "./styles";

export function Header() {
    return (
        <Container>
            <h1>Movies</h1>

            <input 
                type="text" 
                placeholder="Pesquisar pelo título" 
            />

            <Profile>
                <div>
                    <strong>Rubens Tadeu</strong>
                    <span>sair</span>
                </div>

                <img 
                    src="https://github.com/rubenstadeum.png" 
                    alt="Perfil do usuário" 
                />
            </Profile>
        </Container>
    );
}