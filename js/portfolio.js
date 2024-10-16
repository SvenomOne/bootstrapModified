document.addEventListener('DOMContentLoaded', function () {
    console.log("portfolio.js geladen"); // Debugging: Prüfen, ob das Skript geladen wird

    const portfolioItems = [
        { id: 1, title: "JavaScript", imgSrc: "assets/img/portfolio/js.png", description: "JavaScript ist eine Programmiersprache, die im Webbrowser integriert ist, um Webseiten dynamisch und interaktiv zu gestalten und auf Benutzerinteraktionen zu reagieren und diese auszuführen." },
        { id: 2, title: "PHP", imgSrc: "assets/img/portfolio/php.png", description: "PHP ist eine serverseitige Skriptsprache, die zur Entwicklung dynamischer und interaktiver Webseiten verwendet wird." },
        { id: 3, title: "Apache2", imgSrc: "assets/img/portfolio/apache.png", description: "Apache2 ist ein leistungsfähiger und anpassbarer Webserver, der statische Inhalte wie HTML und CSS sowie dynamische Inhalte wie PHP bereitstellt und die Kommunikation zwischen Server und Client sicherstellt." },
        { id: 4, title: "CSS", imgSrc: "assets/img/portfolio/css.png", description: "CSS = Cascading Style Sheets, ist eine Stylesheet-Sprache, die das Aussehen und die Gestaltung von Webseiten beschreibt. CSS sorgt dafür, dass Inhalte visuell ansprechend und benutzerfreundlich sind." },
        { id: 5, title: "HTML", imgSrc: "assets/img/portfolio/html.png", description: "HTML ist die Grundlage für jede Webseite und bildet die Basis für die Kombination von CSS und JavaScript, um vollständige und interaktive Webanwendungen zu erstellen." },
        { id: 6, title: "VS Code", imgSrc: "assets/img/portfolio/vscode.png", description: "VS Code ist ein leistungsfähiger, vielseitiger und anpassbarer Editor, der alle notwendigen Tools und Funktionen für Webentwickler zur Verfügung stellt." }
    ];

    const container = document.getElementById('portfolio-items-container');
    const modalContainer = document.getElementById('portfolio-modals-container');



    if (container && modalContainer) {
        portfolioItems.forEach(item => {
            // HTML für Portfolio-Items
            const portfolioHTML = `            
                <div class="col-md-6 col-lg-4 mb-5">
                    <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal${item.id}">
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid portfolio-img" src="${item.imgSrc}" alt="${item.title}" />
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', portfolioHTML);

            // HTML für Portfolio-Modals
            const modalHTML = `
            <div class="portfolio-modal modal fade" id="portfolioModal${item.id}" tabindex="-1" aria-labelledby="portfolioModal${item.id}" aria-hidden="true">
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                        <div class="modal-header border-0">
                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center pb-5">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-8">
                                        <!-- Portfolio Modal - Title-->
                                        <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">${item.title}</h2>
                                        <!-- Icon Divider-->
                                        <div class="divider-custom">
                                            <div class="divider-custom-line"></div>
                                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                            <div class="divider-custom-line"></div>
                                        </div>
                                        <!-- Portfolio Modal - Image-->
                                        <img class="img-fluid rounded mb-5" src="${item.imgSrc}" alt="${item.title}" style="max-width: 80%; height: auto;"/>
                                        <!-- Portfolio Modal - Text-->
                                        <p class="mb-4">${item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            modalContainer.insertAdjacentHTML('beforeend', modalHTML);
        });
    } else {
        console.error("Container nicht gefunden"); // Debugging: Warnung, wenn die Container nicht vorhanden sind
    }
});