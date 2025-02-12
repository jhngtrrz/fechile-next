export function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full py-2 md:py-3 lg:py-4 bg-background border-t max-h-12">
            <div className="container mx-auto px-4">
                <p className="text-center text-sm text-muted-foreground">
                    © {currentYear} - Fundación de Emprendedores Adventistas de Chile.
                </p>
            </div>
        </footer>
    )
}
