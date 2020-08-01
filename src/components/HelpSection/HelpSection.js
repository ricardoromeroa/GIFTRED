import React from 'react'
import './HelpSection.css'

const HelpSection = () => {
    return (
            <section className="section">
                <div className="sectioncard text-center">
                    <div className="card-body1">
                        <h2 className="section-title">¿Listo para apoyar a tu comunidad?</h2>
                        <h4 className="section-text">Busca negocios participantes por giro o ubicación para apoyarlos. Tambíen puedes invitar a tu negocio local favorito a unirse a GIFTRED. Ayudémonos entre todos.</h4>
                        <a href="/directorio" className="btn btn-primary section-button">Directorio</a>
                    </div>
                </div>
            </section>
    )
}

export default HelpSection
