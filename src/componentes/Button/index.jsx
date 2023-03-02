import { Container } from "./style";

export function Button({ title, loading = false, ...rest }) {

    return (
        <Container
            type="button"
            disablad={loading}
            {...rest}
        >
            {loading ? "Carreagando..." : title}
        </Container>
    );

}