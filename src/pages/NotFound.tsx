import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <p className="font-display text-6xl font-semibold text-shrine-maroon-600">404</p>
      <h1 className="font-display text-2xl font-semibold text-shrine-ink">This path isn't on the map</h1>
      <p className="max-w-md text-sm leading-relaxed text-shrine-charcoal">
        The page you're looking for may have moved. Return home to continue planning your
        pilgrimage.
      </p>
      <Button to="/" variant="primary">
        Back to Home
      </Button>
    </Container>
  );
}
